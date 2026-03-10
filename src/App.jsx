import { useState, useEffect } from "react";

const SKILLS = {
  "Languages": ["C", "Python", "JavaScript", "SQL"],
  "Frameworks & Libraries": ["React", "Next.js", "Jetpack Compose", "Flask"],
  "AI / Machine Learning": ["PyTorch", "Hugging Face", "LoRA", "CUDA"],
  "Databases": ["MySQL", "PostgreSQL"],
  "Tools & Platforms": ["AWS", "Firebase", "Docker", "Git/GitHub", "Android Studio", "VSCode"],
};

const EXPERIENCES = [
  { role: "Graduate Learning Assistant", subtitle: "Programming Language Design & Intro to AI", company: "Worcester Polytechnic Institute", location: "Worcester, MA", period: "Jan 2026 – May 2026", bullet: "Graded assignments on Canvas & Gradescope; assisted faculty with quizzes and autograding pipelines for programming language and AI courses." },
  { role: "Packaged Application Development Associate", company: "Accenture", location: "Bangalore, India", period: "Jul 2024 – Nov 2024", bullet: "Implemented state management using Redux in a React-based e-commerce platform, applying Agile and software engineering best practices." },
  { role: "Android Developer Intern", company: "Lovelocal", location: "Bangalore, India", period: "Apr 2024 – Jun 2024", bullet: "Built a multi-page tutorial app with student registration and course enrollment dashboard using Kotlin, Jetpack Compose, and Android Studio." },
  { role: "React Developer Intern", company: "OpenCube Labs", location: "Bangalore, India", period: "Aug 2023 – Sept 2023", bullet: "Built an interactive React study application with reusable components to enhance UI/UX and exam preparation resources." },
];

const PROJECTS = [
  {
    title: "Master's Thesis",
    subtitle: "Early Prediction of Side Effects in Cancer Patients",
    period: "In Progress", tags: ["Machine Learning", "Healthcare", "Python", "Clinical AI"],
    github: null, featured: true,
    desc: "Developing an ML prediction framework to identify treatment-related side effects in cancer patients using the AYA Chinese clinical dataset, supporting proactive clinical intervention.",
    bullets: [
      "Developing a machine learning prediction framework to identify treatment-related side effects in cancer patients using the AYA Chinese clinical dataset.",
      "Performing feature engineering on structured clinical variables including patient demographics, treatment history, and clinical measurements.",
      "Applying predictive modeling techniques to detect patterns associated with treatment toxicity and adverse reactions.",
      "Conducting longitudinal data analysis to capture temporal changes in patient health indicators during treatment cycles.",
      "Training ML models to predict side effects before clinical manifestation, enabling proactive intervention.",
      "Evaluating model performance using accuracy, precision, recall, F1-score, and ROC-AUC.",
      "Designing interpretable models to support data-driven clinical decision-making.",
      "Collaborating in a healthcare-focused research environment to ensure real-world clinical relevance.",
    ],
  },
  {
    title: "Recruit.me",
    subtitle: "Serverless Full-Stack Hiring Platform",
    period: "Sept – Dec 2025", tags: ["Next.js", "AWS Lambda", "MySQL", "TypeScript", "API Gateway", "S3"],
    github: "https://github.com/shreelaxmi-malawade/Recruit.me", featured: true,
    desc: "Multi-role recruitment platform supporting the full hiring lifecycle (Apply → Offer → Accept/Reject → Hire) with serverless APIs, secure auth, and admin analytics.",
    bullets: [
      "Built a multi-role recruitment platform supporting applicant, company, and admin users, implementing a full hiring lifecycle workflow (Apply → Offer → Accept/Reject → Hire).",
      "Developed 10+ REST APIs using AWS Lambda and API Gateway, enabling scalable backend processing with MySQL (Amazon RDS).",
      "Designed normalized relational database schema with optimized SQL queries, improving dashboard data retrieval speed by ~30%.",
      "Implemented secure authentication system with bcrypt hashing and validation, ensuring protected user credential management.",
      "Built admin analytics dashboards analyzing job listings, applicant activity, and hiring funnel metrics.",
      "Improved system usability with pagination and structured error handling, supporting efficient processing of large applicant datasets.",
      "Deployed frontend using Next.js static export on Amazon S3, enabling lightweight hosting with serverless backend integration.",
    ],
  },
  {
    title: "Readability & Retrieval",
    subtitle: "RAG System Research",
    period: "Aug – Dec 2025", tags: ["RAG", "NLP", "Embeddings", "Python", "IR", "BM25"],
    github: "https://github.com/shreelaxmi-malawade/Readability-Influences-Retrieval", featured: true,
    desc: "Investigated how document readability impacts retrieval ranking and generated outputs in RAG systems, evaluating 6 embedding models and 5 retrieval strategies.",
    bullets: [
      "Investigated how document readability impacts retrieval ranking and generated outputs in RAG systems.",
      "Used the OneStopEnglish corpus with aligned Elementary, Intermediate, and Advanced articles for controlled experiments.",
      "Generated semantic embeddings using 6 transformer-based models (Snowflake Arctic, Nomic, Gemma, Qwen, and others).",
      "Implemented 5 retrieval strategies: dense, sparse (TF-IDF/BM25), and hybrid ranking methods.",
      "Built a full RAG pipeline combining retrieval and generative language modeling for response generation.",
      "Designed a custom weighted ranking metric to quantify readability-driven retrieval bias.",
      "Evaluated performance using R-Precision, Precision@K, MRR, nDCG — achieving up to 0.98 R-Precision.",
      "Key findings: dense embeddings favored intermediate texts; sparse methods favored elementary texts; retrieval bias influenced generated outputs.",
    ],
  },
  {
    title: "Knowledge-to-SQL",
    subtitle: "NL to SQL for Medical Databases",
    period: "Jan – May 2025", tags: ["LLaMA-2", "PyTorch", "LoRA", "SLURM", "HPC", "DPO"],
    github: "https://github.com/shreelaxmi-malawade/Knowledge-to-SQL-implementation", featured: false,
    desc: "Developed an NLP-to-SQL system using LLaMA-2 13B with multi-stage fine-tuning (SFT + DPO), improving query execution accuracy from 13.33% to 33.33%.",
    bullets: [
      "Developed an NLP-to-SQL system using LLaMA-2 13B to convert natural language questions into executable SQL queries.",
      "Reimplemented and optimized a research paper pipeline to improve automated database query generation.",
      "Built a multi-stage fine-tuning pipeline combining Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO).",
      "Implemented database feedback preference learning, allowing the model to improve based on SQL execution results.",
      "Designed an end-to-end pipeline: natural language input → SQL generation → database execution → feedback learning.",
      "Improved query execution accuracy from 13.33% to 33.33% through model optimization and preference-based training.",
      "Fine-tuned LLMs using LoRA for parameter-efficient training on large-scale transformer architectures.",
      "Deployed model training on an HPC cluster using SLURM for distributed GPU workloads.",
    ],
  },
  {
    title: "Sentify",
    subtitle: "Sentiment Analysis for Social Media",
    period: "Oct 2023 – Mar 2024", tags: ["Flask", "React", "NLP", "ML/DL", "Python"],
    github: "https://github.com/shreelaxmi-malawade/Sentify_Backend", featured: false,
    desc: "Full-stack Flask + React application for real-time sentiment analysis on text and image data, with ML/DL model integration and dynamic visualizations.",
    bullets: [
      "Built Sentify, a full-stack Flask + React application for real-time sentiment analysis.",
      "Developed REST API backend to serve machine learning models for sentiment inference.",
      "Implemented text sentiment classification using TF-IDF feature extraction and supervised ML models.",
      "Integrated deep learning model for image-based sentiment detection.",
      "Designed NLP preprocessing pipeline including tokenization, stop-word removal, and normalization.",
      "Trained models with labeled sentiment datasets using train-test split and hyperparameter tuning.",
      "Evaluated models using accuracy, precision, recall, F1-score, and confusion matrices.",
      "Built a dynamic React dashboard to visualize sentiment insights and predictions in real time.",
    ],
  },
  {
    title: "Jijivisha",
    subtitle: "Mental Health Mobile Application",
    period: "Mar – Jun 2023", tags: ["Android", "Java", "SQLite", "XML"],
    github: null, featured: false,
    desc: "Android mental wellness app with 4 core modules (challenges, games, journal, auth), SQLite for progress tracking, and responsive XML UI layouts.",
    bullets: [
      "Developed a mobile mental wellness application using Android Studio, Java, and SQLite, enabling users to track activities and maintain a personal journal.",
      "Implemented user authentication (login/signup) with progress tracking and dynamic daily motivational quotes displayed on app launch.",
      "Designed core app modules: daily challenges (Nirmoha), relaxation games (Sukha), and personal journaling (Smriti) to support user engagement and mental well-being.",
      "Built responsive UI screens using XML layouts and activity-based navigation, ensuring smooth interaction across multiple app features.",
    ],
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Serif:ital,wght@0,600;1,400&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; overflow-y: scroll; }

  :root {
    --bg: #f8f9fc;
    --bg2: #f0f3f8;
    --bg3: #e8ecf4;
    --blue: #3a5a9b;
    --blue-dark: #2c4578;
    --blue-light: #5b7ec4;
    --blue-pale: #dde5f4;
    --text: #1a2540;
    --text-2: #4a5672;
    --text-3: #8a93aa;
    --white: #ffffff;
    --border: rgba(58,90,155,0.12);
    --shadow-sm: 0 1px 4px rgba(26,37,64,0.07);
    --shadow: 0 4px 20px rgba(26,37,64,0.09);
    --shadow-lg: 0 12px 40px rgba(26,37,64,0.13);
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 3.5rem; height: 60px;
    background: rgba(248,249,252,0.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: 'IBM Plex Serif', serif;
    font-weight: 600; font-size: 1.1rem; color: var(--blue);
    letter-spacing: -0.2px;
  }
  .nav-links { display: flex; gap: 0; list-style: none; }
  .nav-links a {
    display: block; padding: 0 1.2rem; height: 60px; line-height: 60px;
    color: var(--text-2); text-decoration: none;
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.06em;
    text-transform: uppercase; transition: color 0.2s, background 0.2s;
  }
  .nav-links a:hover { color: var(--blue); background: rgba(58,90,155,0.05); }
  .nav-links a.active { color: var(--blue); border-bottom: 2px solid var(--blue); }

  /* ── HERO ── */
  .hero {
    min-height: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 120px 3.5rem 80px;
    position: relative;
  }
  .hero-left { max-width: 820px; width: 100%; margin: 0 auto; }
  .hero-status {
    display: inline-flex; align-items: center; gap: 0.55rem;
    background: var(--blue-pale); color: var(--blue);
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 0.38rem 0.9rem;
    border-radius: 4px; margin-bottom: 1.8rem;
    animation: fadeUp 0.5s 0.1s both;
  }
  .hero-status span { width: 6px; height: 6px; border-radius: 50%; background: var(--blue-light); display: inline-block; animation: pulse 2s infinite; }
  .hero-h1 {
    font-family: 'IBM Plex Serif', serif;
    font-size: clamp(2.6rem, 5vw, 4.2rem);
    font-weight: 600; line-height: 1.08;
    color: var(--text); letter-spacing: -1px;
    animation: fadeUp 0.6s 0.2s both;
  }
  .hero-h1 em { font-style: italic; color: var(--blue); }
  .hero-sub {
    margin-top: 1.4rem;
    color: var(--text-2); font-size: 1rem; line-height: 1.75;
    animation: fadeUp 0.6s 0.35s both;
  }
  .hero-sub strong { color: var(--text); font-weight: 600; }
  .hero-roles {
    display: flex; flex-wrap: wrap; gap: 0.5rem;
    margin-top: 1.3rem;
    animation: fadeUp 0.6s 0.5s both;
    justify-content: center;
  }
  .hero-role {
    background: var(--white); border: 1px solid var(--border);
    color: var(--text-2); padding: 0.3rem 0.85rem;
    border-radius: 4px; font-size: 0.75rem; font-weight: 500;
    box-shadow: var(--shadow-sm);
  }
  .hero-btns {
    display: flex; gap: 0.85rem; flex-wrap: wrap;
    margin-top: 2.2rem;
    animation: fadeUp 0.6s 0.65s both;
    justify-content: center;
  }
  .btn {
    padding: 0.75rem 1.8rem; border-radius: 5px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600; font-size: 0.85rem;
    text-decoration: none; border: none; cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    display: inline-block; letter-spacing: 0.02em;
  }
  .btn-primary {
    background: var(--blue); color: var(--white);
    box-shadow: 0 3px 12px rgba(58,90,155,0.3);
  }
  .btn-primary:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(58,90,155,0.35); }
  .btn-secondary {
    background: var(--white); color: var(--blue);
    border: 1.5px solid var(--blue); box-shadow: var(--shadow-sm);
  }
  .btn-secondary:hover { background: var(--blue-pale); transform: translateY(-1px); }

  /* Hero right panel */
  .hero-right {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: var(--shadow);
    animation: fadeUp 0.7s 0.3s both;
  }
  .hero-card-title {
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--text-3);
    margin-bottom: 1.4rem; padding-bottom: 0.9rem;
    border-bottom: 1px solid var(--border);
  }
  .hero-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border-radius: 8px; overflow: hidden; margin-bottom: 1.4rem; }
  .hero-stat { background: var(--bg); padding: 1.1rem; }
  .hero-stat-n { font-family: 'IBM Plex Serif', serif; font-size: 1.9rem; font-weight: 600; color: var(--blue); }
  .hero-stat-l { font-size: 0.76rem; color: var(--text-3); margin-top: 0.15rem; }
  .hero-edu { display: flex; flex-direction: column; gap: 0.8rem; }
  .hero-edu-item {
    display: flex; gap: 0.9rem; align-items: flex-start;
    padding: 0.9rem; background: var(--bg); border-radius: 8px;
    border: 1px solid var(--border);
  }
  .hero-edu-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--blue-light); margin-top: 0.35rem; flex-shrink: 0; }
  .hero-edu-name { font-size: 0.82rem; font-weight: 600; color: var(--text); }
  .hero-edu-deg { font-size: 0.76rem; color: var(--text-3); margin-top: 0.15rem; }
  .hero-edu-gpa { font-size: 0.74rem; color: var(--blue); font-weight: 600; margin-top: 0.2rem; }

  /* ── SECTIONS ── */
  .sec { padding: 5rem 3.5rem; }
  .sec-alt { background: var(--bg2); }
  .sec-inner { max-width: 1100px; margin: 0 auto; }
  .sec-header { margin-bottom: 2.5rem; }
  .sec-eyebrow {
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--blue-light);
    margin-bottom: 0.5rem;
  }
  .sec-title {
    font-family: 'IBM Plex Serif', serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 600; color: var(--text);
    letter-spacing: -0.5px;
  }
  .sec-title em { font-style: italic; color: var(--blue); }
  .divider { height: 1px; background: var(--border); margin: 0 3.5rem; }

  /* ── ABOUT ── */
  .about-body { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: start; }
  .about-p { color: var(--text-2); line-height: 1.82; margin-bottom: 1rem; font-size: 0.96rem; }
  .about-p strong { color: var(--text); font-weight: 600; }

  /* ── SKILLS ── */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
  .skill-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 8px; padding: 1.4rem;
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .skill-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); border-color: rgba(58,90,155,0.25); }
  .skill-cat-name {
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--blue-light);
    margin-bottom: 0.9rem; padding-bottom: 0.7rem;
    border-bottom: 1px solid var(--border);
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .stag {
    background: var(--bg2); color: var(--text-2);
    padding: 0.28rem 0.72rem; border-radius: 4px;
    font-size: 0.78rem; font-weight: 500;
    border: 1px solid var(--border);
    transition: background 0.15s, color 0.15s;
  }
  .stag:hover { background: var(--blue-pale); color: var(--blue); border-color: var(--blue-pale); }

  /* ── EXPERIENCE ── */
  .exp-list { display: flex; flex-direction: column; gap: 0; max-width: 820px; }
  .exp-row {
    display: grid; grid-template-columns: 180px 1fr;
    gap: 2rem; padding: 1.8rem 0;
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
  }
  .exp-row:first-child { padding-top: 0; }
  .exp-row:last-child { border-bottom: none; }
  .exp-meta { }
  .exp-period { font-size: 0.76rem; font-weight: 600; color: var(--blue-light); margin-bottom: 0.25rem; }
  .exp-loc { font-size: 0.74rem; color: var(--text-3); }
  .exp-role { font-family: 'IBM Plex Serif', serif; font-size: 1rem; font-weight: 600; color: var(--text); }
  .exp-company { font-size: 0.84rem; color: var(--blue); font-weight: 500; margin-top: 0.2rem; }
  .exp-subtitle { font-size: 0.78rem; color: var(--text-3); font-style: italic; margin-top: 0.15rem; }
  .exp-bullet { margin-top: 0.7rem; color: var(--text-2); font-size: 0.87rem; line-height: 1.65; padding-left: 1rem; border-left: 2px solid var(--blue-pale); }

  /* ── PROJECTS ── */
  .proj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.2rem; }
  .proj-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 10px; padding: 1.6rem;
    box-shadow: var(--shadow-sm);
    display: flex; flex-direction: column; gap: 0.85rem;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    position: relative;
  }
  .proj-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: rgba(58,90,155,0.22); }
  .proj-card.feat { border-top: 3px solid var(--blue); }
  .proj-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
  .proj-name { font-family: 'IBM Plex Serif', serif; font-size: 1rem; font-weight: 600; color: var(--text); }
  .proj-sub { font-size: 0.78rem; color: var(--text-3); margin-top: 0.15rem; }
  .proj-period {
    font-size: 0.69rem; font-weight: 600; color: var(--blue-light);
    background: var(--blue-pale); padding: 0.22rem 0.6rem;
    border-radius: 4px; white-space: nowrap; flex-shrink: 0;
  }
  .proj-desc { color: var(--text-2); font-size: 0.84rem; line-height: 1.68; flex: 1; }
  .proj-tags { display: flex; flex-wrap: wrap; gap: 0.38rem; }
  .ptag {
    background: var(--bg2); color: var(--text-2);
    padding: 0.22rem 0.62rem; border-radius: 4px;
    font-size: 0.71rem; font-weight: 600;
    border: 1px solid var(--border);
  }
  .proj-link {
    display: inline-flex; align-items: center; gap: 0.35rem;
    color: var(--blue); font-size: 0.8rem; font-weight: 600;
    text-decoration: none; transition: gap 0.2s;
    margin-top: auto; padding-top: 0.3rem;
  }
  .proj-link:hover { gap: 0.6rem; }
  .feat-badge {
    position: absolute; top: -1px; right: 1.2rem;
    background: var(--blue); color: var(--white);
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 0.2rem 0.55rem;
    border-radius: 0 0 5px 5px;
  }

  /* ── CONTACT ── */
  .contact-wrap { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; align-items: start; }
  .contact-desc { color: var(--text-2); line-height: 1.78; margin-bottom: 2rem; font-size: 0.96rem; }
  .contact-desc strong { color: var(--text); }
  .cinfo { display: flex; flex-direction: column; gap: 0.7rem; }
  .citem {
    display: flex; align-items: center; gap: 0.9rem;
    background: var(--white); border: 1px solid var(--border);
    border-radius: 7px; padding: 0.8rem 1.1rem;
    box-shadow: var(--shadow-sm); transition: border-color 0.2s, transform 0.2s;
  }
  .citem:hover { border-color: rgba(58,90,155,0.3); transform: translateX(3px); }
  .cicon { color: var(--blue-light); font-size: 1rem; width: 20px; text-align: center; flex-shrink: 0; }
  .citem a, .citem span { color: var(--text-2); text-decoration: none; font-size: 0.86rem; transition: color 0.2s; }
  .citem a:hover { color: var(--blue); }
  .cform { display: flex; flex-direction: column; gap: 1rem; }
  .flabel { font-size: 0.73rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-3); display: block; margin-bottom: 0.4rem; }
  .finput, .ftextarea {
    width: 100%; background: var(--white);
    border: 1.5px solid var(--border); color: var(--text);
    padding: 0.8rem 1rem; border-radius: 6px;
    font-family: 'IBM Plex Sans', sans-serif; font-size: 0.88rem;
    outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    resize: none; box-shadow: var(--shadow-sm);
  }
  .finput:focus, .ftextarea:focus { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(58,90,155,0.1); }
  .finput::placeholder, .ftextarea::placeholder { color: var(--text-3); }
  .success {
    background: #edf4ff; border: 1.5px solid var(--blue-pale);
    color: var(--blue); padding: 1.2rem; border-radius: 7px;
    font-size: 0.88rem; text-align: center; font-weight: 500;
  }

  /* ── FOOTER ── */
  footer {
    padding: 1.5rem 3.5rem;
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    background: var(--white);
  }
  .ft-p { color: var(--text-3); font-size: 0.78rem; }
  .ft-links { display: flex; gap: 1.5rem; }
  .ft-links a { color: var(--text-3); text-decoration: none; font-size: 0.78rem; transition: color 0.2s; }
  .ft-links a:hover { color: var(--blue); }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; padding-top: 80px; min-height: auto; padding-bottom: 3rem; }
    .hero-right { display: none; }
    .about-body, .contact-wrap { grid-template-columns: 1fr; gap: 2rem; }
  }
  @media (max-width: 600px) {
    .nav { padding: 0 1.2rem; }
    .nav-links { display: none; }
    .sec, .hero { padding-left: 1.2rem; padding-right: 1.2rem; }
    .divider { margin: 0 1.2rem; }
    footer { flex-direction: column; gap: 0.8rem; padding: 1.2rem; }
    .exp-row { grid-template-columns: 1fr; gap: 0.5rem; }
  }
`;

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState("about");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const onScroll = () => {
      ["about", "skills", "experience", "projects", "education", "contact"].forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY + 130 >= el.offsetTop && window.scrollY + 130 < el.offsetTop + el.offsetHeight) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Shreelaxmi K. Malawade</div>
        <ul className="nav-links">
          {["About","Skills","Experience","Projects","Education","Contact"].map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? "active" : ""}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(l.toLowerCase());
                  if (el) window.scrollTo({ top: el.offsetTop - 65, behavior: "smooth" });
                }}
              >{l}</a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download="Shreelaxmi_Malawade_Resume.pdf"
          style={{
            background:"var(--blue)",color:"var(--white)",
            padding:"0.45rem 1.1rem",borderRadius:"5px",
            fontSize:"0.78rem",fontWeight:600,textDecoration:"none",
            letterSpacing:"0.03em",whiteSpace:"nowrap",
            boxShadow:"0 2px 8px rgba(58,90,155,0.25)",
            transition:"background 0.2s,transform 0.15s",
          }}
          onMouseOver={e=>{e.currentTarget.style.background="var(--blue-dark)";e.currentTarget.style.transform="translateY(-1px)";}}
          onMouseOut={e=>{e.currentTarget.style.background="var(--blue)";e.currentTarget.style.transform="translateY(0)";}}
        >↓ Resume</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-left">
          <div className="hero-status"><span /> Open to Internship & Full-Time Roles</div>
          <h1 className="hero-h1">
            Building Smarter Systems,<br /><em>One Model at a Time.</em>
          </h1>
          <p className="hero-sub">
            I'm a <strong>CS grad student at WPI</strong> specializing in Machine Learning, AI research, and full-stack development. I turn complex problems into scalable, data-driven solutions.
          </p>
          <div className="hero-roles">
            {["ML Engineer", "Software Engineer", "Data Scientist", "Full-Stack Dev"].map(r => (
              <span className="hero-role" key={r}>{r}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => {
              const el = document.getElementById("projects");
              if (el) window.scrollTo({ top: el.offsetTop - 65, behavior: "smooth" });
            }}>View Projects</button>
            <button className="btn btn-secondary" onClick={() => {
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 65, behavior: "smooth" });
            }}>Contact Me</button>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/shreelaxmi-malawade-919244352" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn btn-secondary" href="/resume.pdf" download="Shreelaxmi_Malawade_Resume.pdf" style={{display:"inline-flex",alignItems:"center",gap:"0.4rem"}}>↓ Download Resume</a>
          </div>
        </div>

        {/* Right info card removed */}
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section className="sec" id="about-detail">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">Who I Am</div>
            <div className="sec-title">About <em>Me</em></div>
          </div>
          <div className="about-body">
            <div>
              <p className="about-p">I'm a <strong>Master's student in Computer Science at Worcester Polytechnic Institute</strong>, with a strong focus on Machine Learning, AI systems, and full-stack application development. My academic and project work centers around building intelligent, data-driven systems that solve real-world problems.</p>
              <p className="about-p">I've worked extensively with <strong>Python, SQL, React, Flask, PyTorch, and Hugging Face Transformers</strong> — developing AI-driven applications including a Knowledge-to-SQL system using LLaMA-2 with multi-stage fine-tuning (SFT + DPO), a real-time sentiment analysis platform, and predictive healthcare models.</p>
              <p className="about-p">My current research focuses on the <strong>early prediction of side effects in cancer patients</strong> using ML techniques to support data-driven clinical decision-making. I'm actively seeking opportunities in ML Engineering, AI, Data Science, and Software Engineering.</p>
            </div>
            <div style={{background:"var(--bg2)",borderRadius:"10px",padding:"1.8rem",border:"1px solid var(--border)"}}>
              <div className="sec-eyebrow" style={{marginBottom:"1.2rem"}}>Currently</div>
              {[
                ["📍","Based in","Worcester, MA, USA"],
                ["🎓","Studying at","WPI — GPA 4.0"],
                ["🔬","Researching","ML for Cancer Patient Care"],
                ["💼","Open to","ML · AI · SWE · Data Roles"],
                ["📧","Email","smalawade1@wpi.edu"],
              ].map(([icon, label, val]) => (
                <div key={label} style={{display:"flex",gap:"0.9rem",marginBottom:"1rem",alignItems:"flex-start"}}>
                  <span style={{fontSize:"0.9rem",width:"20px"}}>{icon}</span>
                  <div>
                    <div style={{fontSize:"0.7rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-3)",marginBottom:"0.1rem"}}>{label}</div>
                    <div style={{fontSize:"0.86rem",color:"var(--text-2)",fontWeight:500}}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section className="sec sec-alt" id="skills">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">What I Work With</div>
            <div className="sec-title">Technical <em>Skills</em></div>
          </div>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div className="skill-card" key={cat}>
                <div className="skill-cat-name">{cat}</div>
                <div className="skill-tags">
                  {items.map(s => <span className="stag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section className="sec" id="experience">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">Where I've Worked</div>
            <div className="sec-title">Experience</div>
          </div>
          <div className="exp-list">
            {EXPERIENCES.map((e, i) => (
              <div className="exp-row" key={i}>
                <div className="exp-meta">
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-loc">{e.location}</div>
                </div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  {e.subtitle && <div className="exp-subtitle">{e.subtitle}</div>}
                  <div className="exp-bullet">{e.bullet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section className="sec sec-alt" id="projects">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">What I've Built</div>
            <div className="sec-title">Projects</div>
          </div>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <div className={`proj-card${p.featured ? " feat" : ""}`} key={i}>
                {p.featured && <div className="feat-badge">Featured</div>}
                <div className="proj-top">
                  <div>
                    <div className="proj-name">{p.title}</div>
                    <div className="proj-sub">{p.subtitle}</div>
                  </div>
                  <div className="proj-period">{p.period}</div>
                </div>
                <div className="proj-desc">{p.desc}</div>
                {expanded[i] && (
                  <ul style={{margin:"0.2rem 0 0.3rem",paddingLeft:"1.1rem",display:"flex",flexDirection:"column",gap:"0.45rem"}}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{color:"var(--text-2)",fontSize:"0.82rem",lineHeight:"1.6"}}>{b}</li>
                    ))}
                  </ul>
                )}
                <div className="proj-tags">{p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}</div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"auto",paddingTop:"0.3rem"}}>
                  {p.github && (
                    <a className="proj-link" href={p.github} target="_blank" rel="noreferrer">GitHub Repository →</a>
                  )}
                  <button
                    onClick={() => setExpanded(prev => ({...prev, [i]: !prev[i]}))}
                    style={{background:"none",border:"none",cursor:"pointer",color:"var(--blue-light)",fontSize:"0.8rem",fontWeight:600,fontFamily:"'IBM Plex Sans',sans-serif",padding:0,textAlign:"left",transition:"color 0.2s"}}
                  >
                    {expanded[i] ? "▲ Hide Details" : "▼ View Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EDUCATION */}
      <section className="sec" id="education">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">Academic Background</div>
            <div className="sec-title">Education</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"820px"}}>

            {/* WPI */}
            <div style={{background:"var(--white)",border:"1px solid var(--border)",borderLeft:"4px solid var(--blue)",borderRadius:"8px",padding:"1.8rem 2rem",boxShadow:"var(--shadow-sm)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem"}}>
                <div>
                  <div style={{fontFamily:"'IBM Plex Serif',serif",fontSize:"1.1rem",fontWeight:600,color:"var(--text)"}}>Worcester Polytechnic Institute</div>
                  <div style={{color:"var(--blue)",fontWeight:600,fontSize:"0.92rem",marginTop:"0.25rem"}}>Master of Science in Computer Science</div>
                  <div style={{color:"var(--text-3)",fontSize:"0.8rem",marginTop:"0.2rem"}}>Worcester, MA</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{background:"var(--blue-pale)",color:"var(--blue)",fontSize:"0.75rem",fontWeight:600,padding:"0.28rem 0.8rem",borderRadius:"4px",display:"inline-block"}}>Expected 2026</div>
                  <div style={{color:"var(--blue)",fontWeight:700,fontSize:"0.9rem",marginTop:"0.5rem"}}>GPA: 4.0 / 4.0</div>
                </div>
              </div>
              <div style={{marginTop:"1.2rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                {["Machine Learning","Artificial Intelligence","Full-Stack Development","NLP","Data Science"].map(c => (
                  <span key={c} style={{background:"var(--bg2)",color:"var(--text-2)",padding:"0.25rem 0.7rem",borderRadius:"4px",fontSize:"0.75rem",fontWeight:500,border:"1px solid var(--border)"}}>{c}</span>
                ))}
              </div>
            </div>

            {/* DSATM */}
            <div style={{background:"var(--white)",border:"1px solid var(--border)",borderLeft:"4px solid var(--blue-light)",borderRadius:"8px",padding:"1.8rem 2rem",boxShadow:"var(--shadow-sm)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem"}}>
                <div>
                  <div style={{fontFamily:"'IBM Plex Serif',serif",fontSize:"1.1rem",fontWeight:600,color:"var(--text)"}}>Dayananda Sagar Academy of Technology & Management</div>
                  <div style={{color:"var(--blue)",fontWeight:600,fontSize:"0.92rem",marginTop:"0.25rem"}}>Bachelor of Engineering in Computer Science and Engineering</div>
                  <div style={{color:"var(--text-3)",fontSize:"0.8rem",marginTop:"0.2rem"}}>Bangalore, India</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{background:"var(--blue-pale)",color:"var(--blue)",fontSize:"0.75rem",fontWeight:600,padding:"0.28rem 0.8rem",borderRadius:"4px",display:"inline-block"}}>2024</div>
                  <div style={{color:"var(--blue)",fontWeight:700,fontSize:"0.9rem",marginTop:"0.5rem"}}>GPA: 3.74 / 4.0</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section className="sec" id="contact">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-eyebrow">Get In Touch</div>
            <div className="sec-title">Let's <em>Connect</em></div>
          </div>
          <div className="contact-wrap">
            <div>
              <p className="contact-desc">I'm actively looking for <strong>internship and full-time opportunities</strong> in Machine Learning, AI, Data Science, and Software Engineering. Whether you have a role, a project, or just want to connect — I'd love to hear from you.</p>
              <div className="cinfo">
                {[
                  {icon:"✉", label:"smalawade1@wpi.edu", href:"mailto:smalawade1@wpi.edu"},
                  {icon:"◎", label:"Worcester, Massachusetts, USA", href:null},
                  {icon:"↗", label:"LinkedIn Profile", href:"https://www.linkedin.com/in/shreelaxmi-malawade-919244352"},
                  {icon:"⌥", label:"GitHub Profile", href:"https://github.com/shreelaxmi-malawade"},
                ].map(({icon, label, href}) => (
                  <div className="citem" key={label}>
                    <span className="cicon">{icon}</span>
                    {href ? <a href={href} target="_blank" rel="noreferrer">{label}</a> : <span>{label}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              {sent ? (
                <div className="success">✓ Message sent! I'll get back to you shortly.</div>
              ) : (
                <form className="cform" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div>
                    <label className="flabel">Name</label>
                    <input className="finput" type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} required />
                  </div>
                  <div>
                    <label className="flabel">Email</label>
                    <input className="finput" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required />
                  </div>
                  <div>
                    <label className="flabel">Message</label>
                    <textarea className="ftextarea" rows={5} placeholder="Tell me about the opportunity or project..." value={form.message} onChange={e => setForm({...form, message:e.target.value})} required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{alignSelf:"flex-start"}}>Send Message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="ft-p">© 2025 Shreelaxmi K Malawade</p>
        <div className="ft-links">
          <a href="https://github.com/shreelaxmi-malawade" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shreelaxmi-malawade-919244352" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:smalawade1@wpi.edu">Email</a>
        </div>
      </footer>
    </>
  );
}