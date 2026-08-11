export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  type: "award" | "oss" | "hackathon" | "publication";
}

export interface OSSContribution {
  id: string;
  repo: string;
  repoUrl: string;
  description: string;
  contribution: string;
  prUrl?: string;
  stars: number;
  language: string;
}

export interface HackathonWin {
  id: string;
  event: string;
  position: 1 | 2 | 3 | "finalist";
  projectName: string;
  description: string;
  date: string;
  prize?: string;
  teamSize: number;
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Best Developer Tool — Product Hunt",
    issuer: "Product Hunt",
    date: "2024-01",
    description: "OpenUI Components ranked #1 Product of the Day on Product Hunt, earning the Best Developer Tool award with 800+ upvotes.",
    icon: "🏆",
    type: "award",
  },
  {
    id: "ach-2",
    title: "GitHub Arctic Code Vault Contributor",
    issuer: "GitHub",
    date: "2020-02",
    description: "Code contributed to open source projects was preserved in the GitHub Arctic Code Vault for future generations.",
    icon: "🌐",
    type: "award",
  },
  {
    id: "ach-3",
    title: "Google Developer Expert Nominee",
    issuer: "Google",
    date: "2023-06",
    description: "Nominated for the Google Developer Expert program in Web Technologies for open-source contributions and technical writing.",
    icon: "⭐",
    type: "award",
  },
  {
    id: "ach-4",
    title: "\"Building Accessible React Apps\" — Medium",
    issuer: "Medium Publication",
    date: "2023-03",
    description: "Technical article on building WCAG-compliant React applications reached 45,000+ reads and was curated by Medium.",
    icon: "✍️",
    type: "publication",
  },
];

export const ossContributions: OSSContribution[] = [
  {
    id: "oss-1",
    repo: "vercel/next.js",
    repoUrl: "https://github.com/vercel/next.js",
    description: "The React framework for the web.",
    contribution: "Fixed a critical middleware rewrite bug causing incorrect redirects in production, affecting thousands of deployments.",
    prUrl: "https://github.com/vercel/next.js/pull/12345",
    stars: 128000,
    language: "TypeScript",
  },
  {
    id: "oss-2",
    repo: "shadcn-ui/ui",
    repoUrl: "https://github.com/shadcn-ui/ui",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    contribution: "Added keyboard navigation support to the Combobox component and fixed focus trap in Dialog on iOS Safari.",
    prUrl: "https://github.com/shadcn-ui/ui/pull/4567",
    stars: 78000,
    language: "TypeScript",
  },
  {
    id: "oss-3",
    repo: "prisma/prisma",
    repoUrl: "https://github.com/prisma/prisma",
    description: "Next-generation ORM for Node.js & TypeScript.",
    contribution: "Improved the query builder TypeScript inference for nested relation filters, reducing false type errors.",
    prUrl: "https://github.com/prisma/prisma/pull/8901",
    stars: 40000,
    language: "TypeScript",
  },
  {
    id: "oss-4",
    repo: "pmndrs/zustand",
    repoUrl: "https://github.com/pmndrs/zustand",
    description: "A small, fast and scalable bearbones state-management solution.",
    contribution: "Added DevTools middleware integration documentation and fixed serialization issue with Map/Set state.",
    prUrl: "https://github.com/pmndrs/zustand/pull/2345",
    stars: 47000,
    language: "TypeScript",
  },
];

export const hackathonWins: HackathonWin[] = [
  {
    id: "hack-1",
    event: "HackIndia 2023 — National Finals",
    position: 1,
    projectName: "MediLink AI",
    description: "AI-powered patient-doctor matching platform with real-time video consultations and smart prescription management. Built in 36 hours.",
    date: "2023-09",
    prize: "₹5,00,000 + AWS Credits",
    teamSize: 4,
  },
  {
    id: "hack-2",
    event: "ETHIndia 2022 — Hackathon",
    position: 2,
    projectName: "ChainPay",
    description: "Decentralized cross-border payment protocol using Layer 2 rollups for sub-cent transaction fees. Built on Polygon.",
    date: "2022-08",
    prize: "$10,000 in ETH",
    teamSize: 3,
  },
  {
    id: "hack-3",
    event: "Microsoft Imagine Cup — Asia Pacific",
    position: "finalist",
    projectName: "EduPath",
    description: "Adaptive learning platform using Azure Cognitive Services to personalize K-12 education content based on student performance.",
    date: "2021-04",
    teamSize: 4,
  },
];
