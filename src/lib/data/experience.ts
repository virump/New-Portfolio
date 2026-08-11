export interface Experience {
  id: string;
  company: string;
  companyLogo: string;
  title: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  startDate: string;
  endDate?: string;
  location: string;
  remote: boolean;
  description: string;
  responsibilities: string[];
  techStack: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "TechNova Labs",
    companyLogo: "/images/companies/technova.svg",
    title: "Senior Full-Stack Engineer",
    type: "full-time",
    startDate: "2023-03",
    location: "Bangalore, India",
    remote: false,
    description: "Leading the development of a next-generation SaaS platform serving 50,000+ users, focusing on performance, scalability, and developer experience.",
    responsibilities: [
      "Architected and led development of the company's core product dashboard using Next.js 14 and TypeScript",
      "Reduced API response times by 60% through query optimization and Redis caching strategies",
      "Mentored a team of 4 junior engineers through weekly code reviews and pair programming sessions",
      "Introduced Storybook-driven component library that improved design-dev handoff by 40%",
      "Collaborated with product and design to ship 12 major features across 3 product lines",
      "Implemented comprehensive E2E testing with Playwright covering 85% of critical user flows",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "Prisma", "GraphQL"],
    highlights: ["Promoted to Senior Engineer within 8 months", "Led team that shipped product v2.0 on schedule"],
  },
  {
    id: "exp-2",
    company: "Freelance",
    companyLogo: "/images/companies/freelance.svg",
    title: "Full-Stack Developer",
    type: "freelance",
    startDate: "2022-01",
    endDate: "2023-02",
    location: "Remote",
    remote: true,
    description: "Delivered end-to-end web solutions for startups and scale-ups across India and Europe, specializing in React, Node.js, and cloud deployments.",
    responsibilities: [
      "Built 8 production web applications from concept to deployment for clients in fintech, edtech, and e-commerce",
      "Designed REST and GraphQL APIs consumed by web and mobile frontends",
      "Set up CI/CD pipelines on GitHub Actions with automated testing and deployment to AWS",
      "Integrated third-party services including Stripe, Twilio, SendGrid, and various OAuth providers",
      "Consistently delivered projects within deadline with 100% client satisfaction rating",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Stripe", "AWS", "Docker"],
    highlights: ["8 successful projects delivered", "100% client retention rate", "$80K+ in total project revenue"],
  },
  {
    id: "exp-3",
    company: "CodeCraft Solutions",
    companyLogo: "/images/companies/codecraft.svg",
    title: "Frontend Developer",
    type: "full-time",
    startDate: "2020-07",
    endDate: "2021-12",
    location: "Pune, India",
    remote: false,
    description: "Developed and maintained React-based web applications for enterprise clients in the manufacturing and logistics sectors.",
    responsibilities: [
      "Built interactive data visualization dashboards for logistics clients using Recharts and D3.js",
      "Migrated legacy jQuery codebase to React 17, improving performance by 3x",
      "Implemented responsive designs from Figma mockups with pixel-perfect accuracy",
      "Wrote unit tests with Jest and React Testing Library maintaining 80%+ coverage",
      "Participated in agile sprint planning, daily standups, and retrospectives",
    ],
    techStack: ["React", "JavaScript", "Redux", "D3.js", "Sass", "Jest", "Webpack"],
    highlights: ["Led jQuery-to-React migration", "3x performance improvement on main dashboard"],
  },
  {
    id: "exp-4",
    company: "StartupXYZ",
    companyLogo: "/images/companies/startupxyz.svg",
    title: "Software Engineering Intern",
    type: "internship",
    startDate: "2019-12",
    endDate: "2020-06",
    location: "Mumbai, India",
    remote: false,
    description: "Joined as an engineering intern to build internal tools and contribute to the main product codebase.",
    responsibilities: [
      "Developed an internal admin dashboard with CRUD operations for content management",
      "Contributed bug fixes and minor features to the main React Native mobile app",
      "Wrote API integrations for payment gateway and SMS providers",
      "Documented technical processes and onboarding guides for new engineers",
    ],
    techStack: ["React", "Node.js", "MySQL", "React Native", "REST APIs"],
    highlights: ["Received pre-placement offer", "Built internal tool used daily by 30+ team members"],
  },
];
