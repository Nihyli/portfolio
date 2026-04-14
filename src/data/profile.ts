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
};

export type StackItem = {
  name: string;
  detail: string;
  icon: string;
  tone: "accent" | "emerald" | "warm";
};

export type ProfileData = {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  intro: string;
  availability: string;
  focusAreas: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
  heroCtaLabel: string;
  projectsCtaLabel: string;
  photoPlaceholderLabel: string;
  education: string[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  stackShowcase: StackItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  leadership: string[];
};

export const profile: ProfileData = {
  name: "Yohannes Hailu",
  headline: "Software Engineer focused on reliable systems and practical impact.",
  subheadline:
    "Honors Computer Science, Mathematics, and Data Science student at UNL.",
  location: "Lincoln, Nebraska",
  intro:
    "I build full-stack products that are technically rigorous and easy to use. My strongest work blends backend performance thinking with clean frontend execution.",
  availability: "Seeking Summer 2027 software engineering internship opportunities.",
  focusAreas: ["Backend Systems", "API Design", "Cloud Applications", "Performance"],
  email: "yhailu006@gmail.com",
  phone: "402-905-5385",
  linkedin: "https://www.linkedin.com/in/yohanneshailu/",
  github: "https://github.com/yh4ilu",
  resumePath: "/resume.pdf",
  heroCtaLabel: "Download Resume",
  projectsCtaLabel: "Explore Projects",
  photoPlaceholderLabel: "Your portrait goes here",
  education: [
    "University of Nebraska-Lincoln - BS Honors Computer Science, BS Honors Math, BS Honors Data Science (May 2028)",
    "GPA: 3.95/4.00",
    "Relevant coursework: Data Structures and Algorithms, Software Engineering, Data Analysis, Computer Systems",
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "C#", "C++"],
    frameworks: ["React", "Next.js", "AWS Lambda", "DynamoDB", "MUI"],
    tools: ["Git", "VS Code", "Agile Methodology", "Microsoft Suite"],
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
      name: "TypeScript",
      detail: "Typed UI and API development for safer changes.",
      icon: "typescript",
      tone: "warm",
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
    {
      name: "DynamoDB",
      detail: "Fast key-value access patterns and schema design.",
      icon: "dynamodb",
      tone: "emerald",
    },
    {
      name: "Material UI (MUI)",
      detail: "Production UI component systems and theming.",
      icon: "mui",
      tone: "warm",
    },
    {
      name: "Git",
      detail: "Version control workflows and collaboration hygiene.",
      icon: "git",
      tone: "accent",
    },
    {
      name: "Visual Studio Code",
      detail: "Daily development tooling and debugging workflows.",
      icon: "vscode",
      tone: "emerald",
    },
    {
      name: "Agile Methodology",
      detail: "Iterative delivery, feedback loops, and sprint planning.",
      icon: "agile",
      tone: "warm",
    },
    {
      name: "Microsoft Suite",
      detail: "Documentation, communication, and project reporting.",
      icon: "microsoft",
      tone: "accent",
    },
  ],
  experience: [
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
        "Created DynamoDB lookup queries that improved data retrieval speed by 400x versus scans.",
        "Developed and fixed production website components using React, TypeScript, and AWS Lambda.",
      ],
    },
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
      organization: "Headstarter AI",
      role: "Software Engineering Fellow",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      impact: "Built and shipped complete web products in rapid cycles.",
      bullets: [
        "Built three web applications with Next.js, Firebase, and MUI.",
        "Integrated LLM APIs to parse website data and return structured responses.",
      ],
    },
  ],
  projects: [
    {
      name: "VEX U Robotics",
      role: "Programmer",
      period: "Aug 2024 - May 2025",
      bullets: [
        "Improved latency and synchronization by 15% using C++ and the VEX V5 API.",
        "Created daily technical reports to improve handoff and troubleshooting speed.",
      ],
      tech: ["C++", "VEX V5 API"],
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
    },
  ],
  leadership: [
    "National Society of Black Engineers (NSBE) - Senator",
    "Management Leadership for Tomorrow (MLT) - Career Preparation Fellow",
    "NACME Scholar, ColorStack Fellow, Afrikan Peoples Union, African Student Association",
  ],
};
