export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  years: number;
  category: "frontend" | "backend" | "devops" | "tools" | "languages";
  currentlyLearning?: boolean;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", proficiency: 95, years: 4, category: "frontend" },
  { name: "Next.js", icon: "▲", proficiency: 93, years: 3, category: "frontend" },
  { name: "TypeScript", icon: "🔷", proficiency: 92, years: 3, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", proficiency: 90, years: 3, category: "frontend" },
  { name: "Framer Motion", icon: "🎞️", proficiency: 80, years: 2, category: "frontend" },
  { name: "Vue.js", icon: "💚", proficiency: 75, years: 2, category: "frontend" },
  { name: "React Native", icon: "📱", proficiency: 82, years: 2, category: "frontend" },
  { name: "Three.js", icon: "🌐", proficiency: 60, years: 1, category: "frontend", currentlyLearning: true },

  // Backend
  { name: "Node.js", icon: "🟢", proficiency: 93, years: 4, category: "backend" },
  { name: "Express.js", icon: "🚂", proficiency: 90, years: 4, category: "backend" },
  { name: "FastAPI", icon: "⚡", proficiency: 78, years: 2, category: "backend" },
  { name: "GraphQL", icon: "◈", proficiency: 85, years: 3, category: "backend" },
  { name: "PostgreSQL", icon: "🐘", proficiency: 88, years: 4, category: "backend" },
  { name: "MongoDB", icon: "🍃", proficiency: 55, years: 3, category: "backend" },
  { name: "Redis", icon: "🔴", proficiency: 80, years: 3, category: "backend" },
  { name: "Prisma", icon: "◇", proficiency: 85, years: 2, category: "backend" },

  // DevOps & Cloud
  { name: "Docker", icon: "🐳", proficiency: 85, years: 3, category: "devops" },
  { name: "Kubernetes", icon: "☸️", proficiency: 72, years: 2, category: "devops" },
  { name: "AWS", icon: "☁️", proficiency: 80, years: 3, category: "devops" },
  { name: "GitHub Actions", icon: "⚙️", proficiency: 88, years: 3, category: "devops" },
  { name: "Terraform", icon: "🏗️", proficiency: 68, years: 1, category: "devops" },
  { name: "Vercel", icon: "▲", proficiency: 92, years: 3, category: "devops" },
  { name: "Nginx", icon: "🌐", proficiency: 75, years: 3, category: "devops" },

  // Tools
  { name: "Git", icon: "🔀", proficiency: 95, years: 5, category: "tools" },
  { name: "VS Code", icon: "💻", proficiency: 98, years: 5, category: "tools" },
  { name: "Figma", icon: "🎭", proficiency: 72, years: 2, category: "tools" },
  { name: "Postman", icon: "📬", proficiency: 88, years: 4, category: "tools" },
  { name: "Storybook", icon: "📚", proficiency: 80, years: 2, category: "tools" },
  { name: "Jest", icon: "🃏", proficiency: 85, years: 3, category: "tools" },

  // Languages
  { name: "JavaScript", icon: "🟡", proficiency: 96, years: 5, category: "languages" },
  { name: "TypeScript", icon: "🔷", proficiency: 92, years: 3, category: "languages" },
  { name: "Python", icon: "🐍", proficiency: 80, years: 3, category: "languages" },
  { name: "Flutter", icon: "🚀", proficiency: 45, years: 1, category: "languages", currentlyLearning: true },
  { name: "MongoDB", icon: "🍃", proficiency: 55, years: 3, category: "languages", currentlyLearning: true },
  { name: "SQL", icon: "🗃️", proficiency: 88, years: 4, category: "languages" },
];
