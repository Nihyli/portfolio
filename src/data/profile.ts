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
    "Full Stack Builder. Lifelong learner and problem solver. Obssesed with all things tech.",
  availability: "Open for Summer 2026/Fall 2026 SWE Internships.",
  heroStatusLabel: "Open for Summer & Fall 2026 internships",
  projectsTagline: "Shipped work, honest tradeoffs, and outcomes you can measure.",
  contactWatermark: "YH",
  heroGreeting: "Hello 👋",
  hashTags: ["#open_to_internships", "#full_stack", "#lincoln_NE", "#unl"],
  footerBuildLine: "Next.js · Tailwind · Geist Mono",
  focusAreas: ["Full Stack", "Data Analytics", "API Integration", "AI/ML"],
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
    "Relevant coursework: Data Structures and Algorithms, Software Engineering, Data Analysis, Computer Systems, Computer Science 1 and 2"
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "C#", "C++ (In progress)"],
    frameworks: ["React", "Next.js", "AWS Lambda", "AWS Microservices"],
    tools: [],
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
      detail: "Performance-sensitive coding and robotics systems.",
      icon: "cplusplus",
      tone: "accent",
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
      name: "AWS Lambda",
      detail: "Serverless functions and cloud event workflows.",
      icon: "lambda",
      tone: "accent",
    },
  ],
  experience: [
    {
      organization: "Lockheed Martin",
      role: "Incoming Software Engineering Intern",
      period: "Summer/Fall 2026",
      location: "Omaha, Nebraska",
      impact: "Preparing for mission-focused engineering work.",
      bullets: [
        "Preparing for software engineering work on mission-focused projects.",
        "Currently in process of obtaining TS clearance.",
      ],
    },
    {
      organization: "University of Nebraska-Lincoln",
      role: "Technology Support Intern",
      period: "Apr 2025 - Present",
      location: "Lincoln, Nebraska",
      impact: "Improved reliability across multi-department IT operations.",
      bullets: [
        "Maintain IT systems and troubleshoot software, operating systems, hardware, and network issues.",
        "Helped migrate school email domains and resolved software access issues across three departments.",
        "Support students and staff through tickets, phone, email, and in-person troubleshooting.",
      ],
    },
    {
      organization: "Aviture",
      role: "Software Engineering Intern",
      period: "May 2025 - Aug 2025",
      location: "Omaha, Nebraska",
      impact: "Delivered production features for a platform at national scale.",
      bullets: [
        "Built features for a United States Air Force recruitment platform with over 1M app downloads.",
        "Created optimized database lookup queries that improved data retrieval speed by 400x versus scans.",
        "Developed and fixed production website components using React, TypeScript, and AWS Lambda.",
      ],
    },
    {
      organization: "Headstarter AI",
      role: "Software Engineering Fellow",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      impact: "Built and shipped complete web products in rapid cycles.",
      bullets: [
        "Built three web applications with Next.js and Firebase.",
        "Integrated LLM APIs to parse website data and return structured responses.",
      ],
    },
  ],
  projects: [
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
        "Built augmented reality interfaces for telemetry in simulated mission environments.",
        "Iterated designs through user testing to improve usability in high-stakes scenarios.",
      ],
      tech: ["AR Interface Design", "Prototyping", "User Testing"],
      proposalUrl: "/nasa-suits-proposal-unl-vantage.pdf",
      proposalLabel: "View proposal: UNL VANTAGE (PDF)",
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
  leadership: [
    {
      organization: "National Society of Black Engineers (NSBE)",
      role: "Senator",
      period: "Aug 2025 – Present",
      location: "Lincoln, Nebraska",
      bullets: [
        "Represent 50+ member interests in chapter meetings and contribute to decisions on chapter initiatives, events, and policies.",
      ],
    },
    {
      organization: "Management Leadership for Tomorrow (MLT)",
      role: "Career Preparation Fellow",
      period: "Jan 2025 – Present",
      location: "Virtual",
      bullets: [
        "Accepted into a selective 18-month professional development program that accelerates the career growth of emerging leaders through structured coaching, mentorship, and targeted skill-building.",
      ],
    },
  ],
  leadershipOther: [
    "Honors Program",
    "NACME Scholar",
    "ColorStack Fellow",
    "Afrikan Peoples Union",
    "African Student Association",
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
