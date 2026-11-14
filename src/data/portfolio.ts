/**
 * Central portfolio data — Devansh Maurya's SDE-focused Portfolio.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Devansh Maurya',
  displayName: 'Devansh Maurya',
  firstName: 'DEVANSH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DEVANSH ORIGINAL',
  role: 'Software Developer',
  tagline: ['Software Development', 'Full-Stack Development', 'AI Integration'],
  intro:
    'Final-year B.Tech Information Technology student with hands-on experience building web applications and AI-powered projects using React, Next.js, Python, Django, and FastAPI. Developed projects involving AI-assisted document originality analysis and recruitment workflows, with experience integrating Gemini API. Seeking an entry-level software development opportunity.',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'devanshmaurya30@gmail.com',
  phone: '+91 8299309455',
  links: {
    linkedin: 'https://www.linkedin.com/in/devansh-maurya-324862308/',
    github: 'https://github.com/devanshmaurya30-creator',
    portfolio: 'https://portfolio-builder--devanshgaming6.replit.app/',
  },
  resumePdf: '/assets/Devansh_Maurya_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Devansh Maurya',
  },
  interests: ['Software Engineering', 'AI Integration', 'Cloud Computing', 'System Design'],
};

export const education = [
  {
    school: 'Shri Ramswaroop Memorial College of Engineering and Management',
    place: 'Lucknow, Uttar Pradesh',
    degree: 'Bachelor of Technology — Information Technology',
    period: '2023 – 2027',
    score: 'CGPA 7.2 / 10 (72.1%)',
  },
];

export const experience = [
  {
    company: 'SRDT Technologies Pvt. Ltd.',
    role: 'Data Science & Analytics Intern',
    place: 'Lucknow, UP',
    period: 'June 6, 2026 – June 25, 2026',
    points: [
      'Completed practical training in Python-based data analysis, data preprocessing, and data visualization.',
      'Studied Data Structures using Java for core foundational algorithmic problem-solving.',
      'Covered aptitude, logical reasoning, and industry-standard software engineering workflows.',
    ],
  },
  {
    company: 'SRDT Technologies Pvt. Ltd.',
    role: 'Full-Stack Developer Intern (Python/Django)',
    place: 'Lucknow, UP',
    period: 'Sept 1, 2025 – Sept 12, 2025',
    points: [
      'Developed a To-Do List web application using Python, Django, SQLite, HTML, and CSS.',
      'Implemented full CRUD operations for real-time task management and state handling.',
      'Integrated SQLite relational storage for structured application persistence.',
    ],
  },
  {
    company: 'Google Developer Groups (GDG) SRMCEM',
    role: 'Active Member',
    place: 'Lucknow, UP',
    period: 'October 2025 – Present',
    points: [
      'Participated in hands-on technical workshops, coding sessions, and developer events.',
      'Explored emerging practices in Artificial Intelligence, Cloud Computing, and modern Web Development.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'plagora-ai',
    title: 'Plagora AI',
    year: '2026',
    genre: 'AI • Document Originality & Plagiarism • Gemini API',
    logline: 'An AI-powered document originality and plagiarism detection platform with semantic similarity analysis and PDF reports.',
    stack: ['Next.js', 'React.js', 'TypeScript', 'Python', 'FastAPI', 'Gemini API'],
    build: [
      'Built an AI-powered platform analyzing PDF, DOCX, and TXT documents or pasted text for exact, paraphrased, semantic, and repeated-content similarity.',
      'Integrated Google Gemini AI for semantic similarity analysis and linked flagged passages to reference sources with explanations and confidence ratings.',
      'Developed an interactive document viewer, originality editor with AI rewriting suggestions, side-by-side document comparison, and downloadable PDF audit reports.',
    ],
    features: [
      '4-Tier Similarity Detection: Exact matches, paraphrased restructuring, Gemini AI semantic concepts, and repeated content',
      'Source Verification: Passages linked to reference sources and academic citations with confidence ratings',
      'Originality Editor & AI Rewriter: Direct text editing with suggestions to rephrase flagged content and restore originality',
      'Side-by-Side Comparison & Downloadable PDF audit certificates with breakdown charts',
    ],
    metrics: [
      { value: 'Gemini', label: 'semantic AI vector engine' },
      { value: '4 Types', label: 'similarity detection modes' },
      { value: 'Interactive', label: 'viewer & AI rewriter' },
      { value: 'PDF Audit', label: 'downloadable certificates' },
    ],
    github: 'https://github.com/devanshmaurya30-creator/plagora-ai',
    demo: 'https://plagora-ai-hw9j.vercel.app/',
    palette: { from: '#0a192f', via: '#1e3a8a', to: '#060d1a', accent: '#60a5fa' },
    motif: 'shield',
  },
  {
    id: 'ai-hiring-suite',
    title: 'AI Hiring Suite',
    year: '2026',
    genre: 'AI • Recruitment • Full-Stack Development',
    logline: 'An AI-powered recruitment platform for candidate screening, job matching, and interview preparation.',
    stack: ['Next.js', 'React.js', 'TypeScript', 'Python', 'FastAPI', 'SQLite', 'MongoDB', 'Gemini API'],
    build: [
      'Built an AI-powered recruitment platform for candidate screening, job matching, and interview preparation.',
      'Implemented AI resume parsing, job and candidate matching, candidate evaluation, and AI interview assistance with the Gemini API.',
      'Developed FastAPI REST APIs with JWT authentication and database integration using SQLite and MongoDB.',
    ],
    features: [
      'AI resume parsing, candidate evaluation, and job matching',
      'AI-assisted interactive interview preparation powered by Google Gemini API',
      'High-performance FastAPI REST APIs with JWT authentication',
      'Dual database integration using SQLite and MongoDB for candidate records',
    ],
    metrics: [
      { value: 'Gemini', label: 'AI interview engine' },
      { value: 'FastAPI', label: 'high-speed REST APIs' },
      { value: 'JWT', label: 'secure authentication' },
      { value: 'Next.js', label: 'full-stack SSR frontend' },
    ],
    github: 'https://github.com/devanshmaurya30-creator/AI-Hiring-Suite',
    demo: 'https://ai-hiring-suite-s4cs.vercel.app/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'bharat-defence-nexus',
    title: 'Bharat Defence Nexus — Indian Armed Forces',
    year: '2026',
    genre: 'Defense Tech • Satellite Visualization • Frontend',
    logline: 'A defense-themed dashboard with satellite visualization and tactical radar-style interfaces.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS'],
    build: [
      'Built a defense-themed dashboard with satellite visualization and tactical radar-style interfaces.',
      'Developed interactive panels using reusable, responsive React components (visual demo; no backend).',
    ],
    features: [
      'Defense technology dashboard with satellite visualization',
      'Tactical radar-style interface and telemetry sweeps',
      'Interactive, modular real-time dashboard panels',
      'Reusable React component architecture with Tailwind CSS',
    ],
    metrics: [
      { value: 'Real-Time', label: 'satellite telemetry' },
      { value: 'Tactical', label: 'radar interface' },
      { value: 'Modular', label: 'dashboard panels' },
      { value: '100%', label: 'responsive design' },
    ],
    github: 'https://github.com/devanshmaurya30-creator',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'f1-racing-website',
    title: 'F1 Racing Website',
    year: '2026',
    genre: 'Web Development • Frontend Development',
    logline: 'A responsive Formula 1 website displaying drivers, teams, race schedules, and championship standings from static sample data.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS'],
    build: [
      'Built a responsive Formula 1 website showing drivers, teams, race schedules, and championship standings from static sample data.',
      'Created animated, reusable React components for consistent responsive layouts.',
    ],
    features: [
      'World Championship drivers and constructors standings',
      'Detailed team profiles and driver line-ups',
      'Complete Grand Prix race calendars and schedules',
      'High-speed responsive layout optimized for motorsports data',
    ],
    metrics: [
      { value: 'F1', label: 'live telemetry & standings' },
      { value: 'Grid', label: 'all teams & drivers' },
      { value: 'Schedules', label: 'full season calendar' },
      { value: 'Modern', label: 'cinematic UI' },
    ],
    github: 'https://github.com/devanshmaurya30-creator/F1SportWebsite',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'fsd-internship',
    title: 'Full-Stack Developer Intern',
    org: 'SRDT Technologies Pvt. Ltd.',
    detail: 'Engineered a full-stack To-Do List web application with Python, Django, SQLite, and CRUD operations.',
    laurel: 'Engineering Internship',
  },
  {
    id: 'ds-internship',
    title: 'Data Science & Analytics Intern',
    org: 'SRDT Technologies Pvt. Ltd.',
    detail: 'Completed intensive training in Python data analysis, preprocessing, visualization, and Data Structures in Java.',
    laurel: 'Analytics Internship',
  },
  {
    id: 'gdg-member',
    title: 'Active Technical Member',
    org: 'Google Developer Groups (GDG) SRMCEM',
    detail: 'Participated in technical workshops, coding sessions, and explored AI, cloud computing, and web engineering.',
    laurel: 'Community Member',
  },
  {
    id: 'dsa-fundamentals',
    title: 'Problem-Solving Focus',
    org: 'DSA in Python',
    detail: 'Dedicated focus on programming fundamentals, core algorithmic problem-solving, and computer science foundations.',
    laurel: 'SDE Preparation',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/**
 * Unpublished until actual certificates are provided.
 */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming foundations',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Basic / DSA' },
      { name: 'JavaScript', mono: 'Js', note: 'Web' },
      { name: 'TypeScript', mono: 'Ts', note: 'Typed' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive interfaces & modern web',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Django', mono: 'Dj' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    subtitle: 'LLM & intelligent services',
    skills: [
      { name: 'Google Gemini API', mono: 'Gm', note: 'AI API' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Application data stores',
    skills: [
      { name: 'SQLite', mono: 'Sq' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Workflow & environment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core engineering pillars',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Hiring Suite', 'SRDT Data Science Internship', 'SRDT Django To-Do App'],
  JavaScript: ['F1 Racing Website', 'Interactive UI Applications'],
  TypeScript: ['AI Hiring Suite', 'Aegis Secure Command HQ'],
  'React.js': ['AI Hiring Suite', 'Aegis Secure Command HQ', 'F1 Racing Website'],
  'Next.js': ['AI Hiring Suite'],
  'Tailwind CSS': ['Aegis Secure Command HQ', 'F1 Racing Website'],
  HTML5: ['F1 Racing Website', 'SRDT To-Do App'],
  CSS3: ['SRDT To-Do App', 'F1 Racing Website'],
  Django: ['SRDT Technologies Full-Stack Internship (To-Do List App)'],
  FastAPI: ['AI Hiring Suite (REST APIs & JWT)'],
  'REST APIs': ['AI Hiring Suite', 'FastAPI Backend Architecture'],
  'Google Gemini API': ['AI Hiring Suite (Resume parsing & interview AI)'],
  SQLite: ['AI Hiring Suite', 'SRDT To-Do List Web App'],
  MongoDB: ['Full-Stack Web Architectures'],
  Git: ['Version Control across all repositories'],
  GitHub: ['github.com/devanshmaurya30-creator'],
  'VS Code': ['Primary IDE across projects'],
  Postman: ['API Testing for FastAPI endpoints'],
  DSA: ['Python problem-solving & Java Data Structures training'],
  DBMS: ['B.Tech IT Core Curriculum & SQLite implementations'],
  'Operating Systems': ['B.Tech IT Core Curriculum'],
  'Computer Networks': ['B.Tech IT Core Curriculum'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'School education and the beginning of your academic journey.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Spark',
        description: 'Building strong academic foundations and discovering a passion for science, technology, and computing.',
        tags: ['School Education', 'Curiosity', 'Foundations'],
        runtime: '2021 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineering Chapter',
    period: '2023 – 2025',
    synopsis: 'B.Tech Information Technology at SRMCEM, Lucknow.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The IT Undergrad',
        description: 'B.Tech in Information Technology at Shri Ramswaroop Memorial College of Engineering and Management (CGPA 7.2).',
        tags: ['B.Tech IT', 'SRMCEM', 'CGPA 7.2'],
        runtime: '2023 – 2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Foundations of Computer Science',
        description: 'Mastering core computer science pillars: Data Structures, DBMS, Operating Systems, and Computer Networks.',
        tags: ['DSA', 'DBMS', 'OS', 'Networks'],
        runtime: 'Academics',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'First Steps into Development',
    period: '2025',
    synopsis: 'Full-Stack Python/Django internship and GDG participation.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Django Builder',
        description: 'Full-Stack Developer Internship at SRDT Technologies — developing a To-Do List web application with Python, Django, SQLite, and CRUD operations.',
        tags: ['Python', 'Django', 'SQLite', 'SRDT'],
        runtime: 'Sept 2025',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Joining the Community',
        description: 'Active member of Google Developer Groups (GDG) SRMCEM — participating in workshops, coding sessions, and exploring AI and cloud technologies.',
        tags: ['GDG SRMCEM', 'Workshops', 'Developer Community'],
        runtime: 'Oct 2025 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building with Technology',
    period: '2026',
    synopsis: 'Data Science internship, AI Hiring Suite, Aegis and F1 Racing Website.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Data Science & Analytics',
        description: 'Internship at SRDT Technologies covering practical Python data analysis, preprocessing, visualization, and Data Structures in Java.',
        tags: ['Data Science', 'Analytics', 'Python', 'SRDT'],
        runtime: 'June 2026',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The AI Original: AI Hiring Suite',
        description: 'AI-powered recruitment platform using Next.js, FastAPI, SQLite, and Google Gemini API for resume screening and automated interviews.',
        tags: ['Next.js', 'FastAPI', 'Gemini API', 'AI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Mission Control & Speed',
        description: 'Aegis Secure Command HQ defense satellite dashboard in React/Tailwind, and dynamic F1 Racing web application with live standings.',
        tags: ['Aegis HQ', 'F1 Racing', 'React', 'Tailwind'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: '2026 – 2027',
    synopsis: 'DSA preparation, software engineering and campus placements.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Placement Horizon',
        description: 'Dedicated focus on Data Structures & Algorithms in Python, practical software development, and campus placement drives.',
        tags: ['DSA in Python', 'Campus Placements', 'Class of 2027'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Goal', title: 'Software Developer', detail: 'SDE Track • Practical Engineering', palette: amber },
  { label: 'The AI Original', title: 'AI Hiring Suite', detail: 'Gemini API • Next.js • FastAPI', palette: crimson },
  { label: 'Defense UI', title: 'Aegis Command HQ', detail: 'Satellite telemetry & radar UI', palette: ocean },
  { label: 'Motorsports Web', title: 'F1 Racing Platform', detail: 'Standings, drivers & schedules', palette: amber },
  { label: 'Academics', title: 'B.Tech IT', detail: 'SRMCEM Lucknow • Class of 2027', palette: violet },
  { label: 'Work Experience', title: 'SRDT Technologies', detail: 'Full-Stack & Data Science Intern', palette: jade },
  { label: 'Developer Community', title: 'GDG SRMCEM', detail: 'Active Member • Tech Workshops', palette: ocean },
  { label: 'Full-Stack Stack', title: 'React & Django', detail: 'with Next.js, FastAPI & SQLite', palette: crimson },
  { label: 'Core Problem Solving', title: 'DSA in Python', detail: 'Algorithms & CS Fundamentals', palette: jade },
  { label: 'Next Milestone', title: 'Placements 2027', detail: 'Building practical software applications', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Information Technology',
    lines: ['Shri Ramswaroop Memorial College of Engineering and Management, Lucknow', 'Class of 2027 · Expected Graduation June 2027'],
    chips: ['CGPA 7.2 (72.1%)'],
  },
  {
    kicker: 'Role & Focus',
    title: 'Software Developer (SDE)',
    lines: ['Python, JavaScript, TypeScript · React, Next.js, Django, FastAPI', 'SQLite, MongoDB · REST APIs, Git, VS Code'],
    chips: ['Python', 'JavaScript', 'React', 'Next.js', 'FastAPI', 'Django'],
  },
  {
    kicker: 'Work Experience',
    title: 'Two SRDT Internships',
    lines: [
      'Full-Stack Developer Intern (Python/Django) · SRDT Technologies',
      'Data Science & Analytics Intern · SRDT Technologies',
      'Active Member · Google Developer Groups (GDG) SRMCEM',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'AI Hiring Suite — Gemini API, Next.js, FastAPI & SQLite',
      'Aegis Secure Command HQ — Defense Satellite & Radar Dashboard',
      'F1 Racing Website — World Championship Standings & Schedules',
    ],
  },
  {
    kicker: 'Community & Problem Solving',
    title: 'Active Learning',
    lines: ['Google Developer Groups (GDG) SRMCEM workshops', 'DSA preparation in Python & Core CS Fundamentals'],
  },
  {
    kicker: 'Current Mission',
    title: 'The Next Chapter',
    lines: ['Campus Placements 2027 · Software Development · SDE Opportunities'],
  },
];

export type ProfileId = 'devansh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'devansh',
    name: 'Devansh',
    blurb: 'About → Journey → Projects → Skills → Experience → Contact',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume → Skills → Experience → Projects → Education',
    color: '#4cc9ff',
    order: ['story', 'skills', 'moments', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects → Technologies → GitHub → Development Journey',
    color: '#46e3a8',
    order: ['originals', 'skills', 'picks', 'journey', 'moments', 'about', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Story → Design → Highlights → Personal Journey',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'moments', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Experience', card: 'Experience & Honors', meta: `${achievements.length} Milestones`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume & Summary', palette: violet },
};
