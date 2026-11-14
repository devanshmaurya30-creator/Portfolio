import sharp from 'sharp';

const inputPath = 'C:/Users/devan/.gemini/antigravity/brain/84037e4a-0046-4cea-b1a0-0a8f3c8945b5/.user_uploaded/media_1794588782586.jpg';

const { data, info } = await sharp(inputPath)
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const lum = new Float32Array(width * height);
for (let i = 0; i < width * height; i++) {
  lum[i] = 0.299 * data[i * 3] + 0.587 * data[i * 3 + 1] + 0.114 * data[i * 3 + 2];
}

// 1. Establish left and right edge arrays for every y from 0 to height-1
const rawLeft = new Float32Array(height);
const rawRight = new Float32Array(height);

// Top background (y < 80): pure background
for (let y = 0; y < 80; y++) {
  rawLeft[y] = 10000;
  rawRight[y] = -10000;
}

// Scan y from 80 to 680 with precise bounds
for (let y = 80; y <= 680; y++) {
  let lx = -1;
  const minX = (y < 95) ? 350 : ((y < 550) ? 200 : 150);
  for (let x = minX; x < 500; x++) {
    if (lum[y * width + x] > 20) {
      lx = x;
      break;
    }
  }

  let rx = -1;
  const maxX = (y < 95) ? 570 : ((y < 140) ? 650 : 900);
  for (let x = maxX; x >= 500; x--) {
    if (lum[y * width + x] > 20) {
      rx = x;
      break;
    }
  }

  // Fallbacks if not found on early crown rows
  if (lx === -1) lx = (y > 80) ? rawLeft[y - 1] : 450;
  if (rx === -1) rx = (y > 80) ? rawRight[y - 1] : 546;

  rawLeft[y] = lx;
  rawRight[y] = rx;
}

// Smooth the edges with a 5-point moving average to prevent single-pixel noise
const smoothLeft = new Float32Array(height);
const smoothRight = new Float32Array(height);

for (let y = 80; y <= 680; y++) {
  let sumL = 0, sumR = 0, count = 0;
  for (let dy = -2; dy <= 2; dy++) {
    const ny = y + dy;
    if (ny >= 80 && ny <= 680) {
      sumL += rawLeft[ny];
      sumR += rawRight[ny];
      count++;
    }
  }
  smoothLeft[y] = sumL / count;
  smoothRight[y] = sumR / count;
}

// Shoulder continuation for y > 680 down to 1023
const y0 = 680;
const lx0 = smoothLeft[y0];
const rx0 = smoothRight[y0];

for (let y = y0 + 1; y < height; y++) {
  const tl = Math.min(1, (y - y0) / (880 - y0));
  smoothLeft[y] = Math.max(0, lx0 * (1 - Math.pow(tl, 0.8)));

  const tr = Math.min(1, (y - y0) / (880 - y0));
  smoothRight[y] = Math.min(width, rx0 + (width - rx0) * Math.pow(tr, 0.8));
}

// 2. Build alpha channel
const alpha = new Uint8Array(width * height);

for (let y = 0; y < height; y++) {
  if (y < 80) continue;

  const lx = smoothLeft[y];
  const rx = smoothRight[y];

  for (let x = 0; x < width; x++) {
    const idx = y * width + x;
    const l = lum[idx];

    if (x < lx - 3 || x > rx + 3) {
      alpha[idx] = 0;
    } else if (x >= lx + 3 && x <= rx - 3) {
      // Solid inside subject
      alpha[idx] = 255;
    } else {
      // 6px transition band centered on the contour
      const dist = Math.min(x - lx, rx - x); // -3 to +3
      const normDist = (dist + 3) / 6; // 0 to 1
      const edgeAlpha = normDist * normDist * (3 - 2 * normDist);
      
      // Hair strand luminance enhancement
      const lumAlpha = Math.max(0, Math.min(1, (l - 14) / 18));
      const finalAlpha = Math.max(edgeAlpha, lumAlpha);

      alpha[idx] = Math.round(255 * Math.max(0, Math.min(1, finalAlpha)));
    }
  }
}

// 3. Create clean RGBA buffer
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const a = alpha[i];
  if (a === 0) {
    rgba[i * 4] = 0;
    rgba[i * 4 + 1] = 0;
    rgba[i * 4 + 2] = 0;
    rgba[i * 4 + 3] = 0;
  } else {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = a;
  }
}

// Soft subpixel antialiasing on alpha channel
const alphaChannel = Buffer.alloc(width * height);
for (let i = 0; i < width * height; i++) {
  alphaChannel[i] = rgba[i * 4 + 3];
}

const blurredAlpha = await sharp(alphaChannel, { raw: { width, height, channels: 1 } })
  .blur(0.8)
  .extractChannel(0)
  .raw()
  .toBuffer();

for (let i = 0; i < width * height; i++) {
  rgba[i * 4 + 3] = blurredAlpha[i];
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('pic.png');

console.log('Saved pic.png successfully!');
