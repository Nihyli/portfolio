export type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  impact?: string;
};

export type ProjectItem = {
  name: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  /** Public source or product link */
  repoUrl?: string;
  /** Path under `/public` or absolute URL to a proposal or write-up (PDF, etc.) */
  proposalUrl?: string;
  proposalLabel?: string;
};

export type StackItem = {
  name: string;
  detail: string;
  icon: string;
  tone: "accent" | "emerald" | "warm";
};

export type TerminalCopy = {
  aboutProtocol: string;
  aboutImpactLead: string;
  aboutImpactWord: string;
  statusLine: string;
  systemLogLine: string;
  techStackEyebrow: string;
  techStackTitle: string;
  techStackSub: string;
  operationalRegistry: string;
  techIntro: string;
  contactChapter: string;
  contactSubtitle: string;
};

export type LeadershipItem = {
  organization: string;
  role: string;
  period: string;
  /** e.g. city/state or "Virtual" */
  location?: string;
  bullets: string[];
};

export type NewsItem = {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  /** Accessible label for the outbound link */
  linkLabel: string;
  /** Path under `/public` for the card image */
  imageSrc: string;
  imageAlt: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
};

export type ProfileData = {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  intro: string;
  availability: string;
  /** Short line for the hero status pill (pulse + text). */
  heroStatusLabel: string;
  /** Right-aligned kicker beside the projects section title. */
  projectsTagline: string;
  /** Large faint letters in the contact block (e.g. initials). */
  contactWatermark: string;
  /** Friendly opener (e.g. emoji hello). */
  heroGreeting: string;
  /** Social-style tags (e.g. #open_to_work). */
  hashTags: string[];
  /** Meta line for footer (stack / editor shout-out). */
  footerBuildLine: string;
  focusAreas: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
  heroCtaLabel: string;
  projectsCtaLabel: string;
  photoPlaceholderLabel: string;
  /** Path under `/public` for the hero portrait (omit to show placeholder). */
  portraitSrc?: string;
  education: string[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  stackShowcase: StackItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  news: NewsItem[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
  /** Short labels for other campus / program involvement */
  leadershipOther: string[];
  /** Opsora-style terminal / protocol copy blocks */
  terminal: TerminalCopy;
};

export const profile: ProfileData = {
  name: "Yohannes Hailu",
  headline: "Software Engineer focused on reliable systems and practical impact.",
  subheadline:
    "Honors Computer Science, Mathematics, and Data Science student at UNL.",
  location: "Lincoln, Nebraska",
  intro:
    "Full Stack Builder. Lifelong learner and problem solver. Obsessed with all things tech.",
  availability: "SAP iXp Intern, AI Solutions Advisory.",
  heroStatusLabel: "SAP iXp Intern · AI Solutions Advisory",
  projectsTagline: "Shipped work, honest tradeoffs, and outcomes you can measure.",
  contactWatermark: "YH",
  heroGreeting: "Hello 👋",
  hashTags: ["#open_to_internships", "#full_stack", "#ai_solutions", "#lincoln_NE", "#unl"],
  footerBuildLine: "Next.js · Tailwind · Geist Mono",
  focusAreas: ["Full Stack", "AI Solutions", "Data Analytics", "API Integration"],
  email: "yhailu006@gmail.com",
  phone: "402-905-5385",
  linkedin: "https://www.linkedin.com/in/yohanneshailu/",
  github: "https://github.com/Nihyli",
  resumePath: "/resume.pdf",
  heroCtaLabel: "Download Resume",
  projectsCtaLabel: "Explore Projects",
  photoPlaceholderLabel: "headshot",
  portraitSrc: "/portrait.png",
  education: [
    "University of Nebraska-Lincoln - BS Honors Computer Science, BS Honors Math, BS Honors Data Science (May 2028)",
    "GPA: 3.95/4.00",
    "Relevant coursework: Data Structures and Algorithms, Software Engineering, Data Analysis, Computer Systems, Machine Learning, Object-Oriented Programming"
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C#", "C++"],
    frameworks: ["React", "Next.js", "Spring Boot", "FastAPI", "Node.js", "MUI", "AWS Lambda"],
    tools: [
      "DynamoDB",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "CI/CD",
      "n8n",
      "Claude Code",
      "Prompt Engineering",
      "REST APIs",
      "Git",
    ],
  },
  stackShowcase: [
    {
      name: "Python",
      detail: "Scripting, automation, and backend problem solving.",
      icon: "python",
      tone: "accent",
    },
    {
      name: "Java",
      detail: "Object-oriented development and systems coursework.",
      icon: "java",
      tone: "emerald",
    },
    {
      name: "JavaScript",
      detail: "Frontend behavior and product interaction logic.",
      icon: "javascript",
      tone: "accent",
    },
    {
      name: "C#",
      detail: "Application development and backend service work.",
      icon: "csharp",
      tone: "warm",
    },
    {
      name: "C++",
      detail: "Performance-sensitive coding and robotics control systems.",
      icon: "cplusplus",
      tone: "accent",
    },
    {
      name: "SQL",
      detail: "Query design, data modeling, and production data access.",
      icon: "sql",
      tone: "emerald",
    },
    {
      name: "React",
      detail: "Component architecture and frontend experience.",
      icon: "react",
      tone: "emerald",
    },
    {
      name: "Next.js",
      detail: "Full-stack app routing, rendering, and deployment.",
      icon: "next",
      tone: "warm",
    },
    {
      name: "Spring Boot",
      detail: "Java backend services and production APIs.",
      icon: "spring",
      tone: "emerald",
    },
    {
      name: "FastAPI",
      detail: "Python services, testing, and inspection workflows.",
      icon: "fastapi",
      tone: "warm",
    },
    {
      name: "AWS Lambda",
      detail: "Serverless functions and cloud event workflows.",
      icon: "lambda",
      tone: "accent",
    },
  ],
  experience: [
    {
      organization: "SAP",
      role: "SAP iXp Intern, AI Solutions Advisory",
      period: "Sep 2026 - Present",
      location: "Newtown Square, Pennsylvania",
      impact: "Prototype and evaluate AI solutions with technical and business stakeholders.",
      bullets: [
        "Support the development and evaluation of AI solutions for real-world business challenges.",
        "Collaborate with technical and business teams to identify AI use cases, develop prototypes, analyze results, and present recommendations to stakeholders.",
      ],
    },
    {
      organization: "Lockheed Martin",
      role: "Software Engineering Intern",
      period: "May 2026 - Aug 2026",
      location: "Omaha, Nebraska",
      impact: "Intern Software Lead on a classified program; 12+ production features used daily by 100+ technical users.",
      bullets: [
        "Hold an active Top Secret clearance; developed and maintained production full-stack software for a classified U.S. government program using React, TypeScript, Spring Boot, and MongoDB.",
        "Designed, implemented, tested, and deployed 12+ production features used daily by more than 100 technical users, translating ambiguous requirements into reliable software.",
        "Served as Intern Software Lead, coordinating a 4-intern workstream and reviewing 30+ pull requests while collaborating with engineers on implementation decisions and code quality.",
      ],
    },
    {
      organization: "Aviture",
      role: "Software Engineering Intern",
      period: "May 2025 - Aug 2025",
      location: "Omaha, Nebraska",
      impact: "Delivered production features for a platform at national scale.",
      bullets: [
        "Developed and tested 15+ React/TypeScript features backed by AWS Lambda for a U.S. Air Force recruitment application.",
        "Improved data-retrieval performance by 400x by designing and optimizing DynamoDB queries.",
        "Built and maintained functionality for a recruiting platform with 1M+ downloads across mobile app stores.",
      ],
    },
    {
      organization: "Headstarter AI",
      role: "Software Engineering Fellow",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      impact: "Built and shipped complete web products in rapid cycles.",
      bullets: [
        "Built 3 full-stack web apps in 9 weeks using Next.js, Firebase, and MUI.",
        "Integrated LLM APIs to parse web data and return structured responses across 3 project codebases.",
      ],
    },
    {
      organization: "University of Nebraska-Lincoln",
      role: "Technology Support Intern",
      period: "Apr 2025 - Present",
      location: "Lincoln, Nebraska",
      impact: "Improved reliability across multi-department IT operations.",
      bullets: [
        "Resolved 20+ weekly support requests, independently troubleshooting software, operating systems, hardware, and network connectivity.",
        "Supported 500+ students and faculty through email, phone, ticketing, and in-person channels.",
        "Supported email, data, and account migrations across five university departments and resolved software access issues.",
      ],
    },
  ],
  projects: [
    {
      name: "Conditia",
      role: "Full-Stack Developer",
      period: "Jun 2026 - Jul 2026",
      bullets: [
        "Built Python/FastAPI microservices and a React/Vite UI with 80%+ unit-test coverage, routing low-confidence model output to human review.",
        "Modeled data with async SQLAlchemy and PostgreSQL and wired a CI pipeline that runs automated tests and Alembic migrations on every change.",
        "Added a guided image/video capture flow and an analysis worker that atomically claims and processes each inspection.",
      ],
      tech: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "SQLAlchemy", "Alembic", "CI"],
    },
    {
      name: "Kampus",
      role: "Hackathon Team Lead",
      period: "March 2026",
      bullets: [
        "Full-stack UNL student platform that unifies Canvas, MyRed, NvolveU, and Google Calendar in one dashboard.",
        "AI-assisted scheduling and wellness insights with OpenAI GPT-4o, including overlap detection and focus-time blocks.",
        "Chrome extension (Manifest V3) syncs portal data into a Next.js app backed by PostgreSQL and Prisma.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
        "Socket.io",
        "Chrome Extension",
      ],
      repoUrl: "https://github.com/pujara-narayana/Kampus",
    },
    {
      name: "TicketExchange",
      role: "Creator",
      period: "2025",
      bullets: [
        "College ticket marketplace for verified students, with Stripe-backed payments and in-app negotiation chat.",
        "Turborepo spanning Next.js web, Expo mobile, and a NestJS API with PostgreSQL, Redis, BullMQ, and Socket.IO.",
      ],
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Socket.IO",
        "Expo",
      ],
      repoUrl: "https://github.com/Nihyli/TicketExchange",
    },
    {
      name: "Recyclable.io",
      role: "Hackathon Team Lead",
      period: "March 2025",
      bullets: [
        "Webcam-based game that classifies recyclables with TensorFlow.js and a Teachable Machine image model.",
        "Realtime global leaderboard using Firebase Firestore; static frontend deployed on Netlify.",
      ],
      tech: ["TensorFlow.js", "Firebase", "JavaScript", "HTML", "CSS"],
      repoUrl: "https://github.com/Nihyli/Recyclable.io",
    },
    {
      name: "NASA SUITS",
      role: "Programmer",
      period: "Aug 2024 - May 2025",
      bullets: [
        "Developed augmented reality interfaces to visualize telemetry data in simulated space environments, improving access to mission-critical information.",
        "Iterated on interface design through user testing and feedback to improve performance in high-stakes simulated environments.",
      ],
      tech: ["AR Interface Design", "Prototyping", "User Testing"],
      proposalUrl: "/nasa-suits-proposal-unl-vantage.pdf",
      proposalLabel: "View proposal: UNL VANTAGE (PDF)",
    },
    {
      name: "VEX U Robotics",
      role: "Programmer",
      period: "Aug 2024 - May 2025",
      bullets: [
        "Improved robot-control latency and synchronization by 15% using C++ algorithms and the VEX V5 API.",
        "Wrote daily technical reports documenting system behavior, implementation changes, and troubleshooting findings for the project team.",
      ],
      tech: ["C++", "VEX V5 API"],
    },
  ],
  news: [
    {
      title: "Polsley, students represent School of Computing at annual NACME Conference and Gala",
      source: "University of Nebraska–Lincoln Newsroom",
      date: "November 2024",
      summary:
        "Attended the 2024 NACME Conference and Gala in Houston with School of Computing faculty and fellow scholars, representing UNL at the flagship event for community, networking, and career development.",
      url: "https://newsroom.unl.edu/announce/cse/18122/98366",
      linkLabel: "Read UNL announcement",
      imageSrc: "/news/nacme-unl.jpg",
      imageAlt:
        "Oliver Triana Gutierrez, Anok Timothy, Yohannes Hailu, Leopoldo Hernandez, and Seth Polsley at the NACME Conference in Houston.",
    },
    {
      title: "Instagram highlight",
      source: "Instagram",
      date: "2025",
      summary:
        "Featured post with photos and updates from recent work and campus life.",
      url: "https://www.instagram.com/p/DLi5b1WOg7H/",
      linkLabel: "View on Instagram",
      imageSrc: "/news/instagram-post.jpg",
      imageAlt: "Photo from the featured Instagram post.",
    },
  ],
  certifications: [
    {
      name: "Dell Prompt Engineering Achievement Version 1.0",
      issuer: "Dell Technologies",
      date: "Aug 2026",
    },
    {
      name: "IBM Data Analyst Professional Certificate (V3)",
      issuer: "Coursera",
      date: "Dec 2025",
    },
  ],
  leadership: [
    {
      organization: "African Student Association",
      role: "Vice President",
      period: "2026 – 2027",
      location: "Lincoln, Nebraska",
      bullets: [
        "Serve as Vice President of the African Student Association for the 2026–2027 term.",
      ],
    },
    {
      organization: "National Society of Black Engineers (NSBE)",
      role: "Senator",
      period: "Aug 2025 – Present",
      location: "Lincoln, Nebraska",
      bullets: [
        "Represented 50+ members in chapter and national-level discussions, shaping initiatives, events, and policy decisions.",
        "Collaborated with chapter leadership to plan 5+ events and drive member engagement across the chapter.",
        "Served as a liaison between chapter leadership and NSBE regional/national leadership to communicate updates and policies.",
      ],
    },
    {
      organization: "Management Leadership for Tomorrow (MLT)",
      role: "Career Preparation Fellow",
      period: "Jan 2025 – Present",
      location: "Virtual",
      bullets: [
        "Accepted into a selective 18-month professional development program that accelerates the career growth of emerging leaders through structured coaching, mentorship, and targeted skill-building.",
        "Completed the Dell Technologies x MLT Prompt Engineering Cohort, focused on practical LLM prompting and applied AI concepts.",
        "Engage with leading partner organizations (e.g., LinkedIn, Bloomberg, and Deloitte) to gain industry exposure and insight into tech-talent pathways.",
        "Applied feedback from mentors and coaches to continuously improve technical and interpersonal skills.",
      ],
    },
  ],
  leadershipOther: [
    "Honors Program",
    "NACME Scholar",
    "ColorStack Fellow",
    "Afrikan Peoples Union",
  ],
  terminal: {
    aboutProtocol: "Protocol // Systems & product delivery",
    aboutImpactLead: "I build software that",
    aboutImpactWord: "EARNS TRUST.",
    statusLine: "Current status: Operational // Lincoln, NE",
    systemLogLine: "Access_System_Logs // V.02",
    techStackEyebrow: "Tech stack",
    techStackTitle: "Operational Skills",
    techStackSub: "Development // Lincoln",
    operationalRegistry: "Operational Registry // 01",
    techIntro:
      "Languages, frameworks, and cloud skills that show up repeatedly across coursework, internships, and side projects.",
    contactChapter: "Final chapter: contact",
    contactSubtitle: "Honors CS · Math · Data Science @ UNL",
  },
};
