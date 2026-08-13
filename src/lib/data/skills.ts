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
  { name: "React", icon: "⚛️", proficiency: 80, years: 2, category: "frontend" },
  { name: "Next.js", icon: "▲", proficiency: 75, years: 2, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", proficiency: 85, years: 2, category: "frontend" },
  { name: "HTML", icon: "🌐", proficiency: 95, years: 3, category: "frontend" },
  { name: "CSS", icon: "🎯", proficiency: 90, years: 3, category: "frontend" },
  { name: "EJS", icon: "📄", proficiency: 78, years: 1, category: "frontend" },

  // Backend
  { name: "Django", icon: "🟢", proficiency: 80, years: 2, category: "backend" },
  { name: "Node.js", icon: "🟩", proficiency: 70, years: 1, category: "backend", currentlyLearning: true },
  { name: "MySQL", icon: "🐬", proficiency: 80, years: 2, category: "backend" },
  { name: "MongoDB", icon: "🍃", proficiency: 75, years: 2, category: "backend" },

  // DevOps & Cloud
  { name: "Git", icon: "🔀", proficiency: 85, years: 3, category: "devops" },
  { name: "GitHub", icon: "🐙", proficiency: 88, years: 3, category: "devops" },

  // Tools
  { name: "VS Code", icon: "💻", proficiency: 95, years: 3, category: "tools" },
  { name: "Postman", icon: "📬", proficiency: 75, years: 2, category: "tools" },
  { name: "Leaflet.js", icon: "🗺️", proficiency: 72, years: 1, category: "tools" },

  // Languages
  { name: "JavaScript", icon: "🟡", proficiency: 88, years: 3, category: "languages" },
  { name: "Python", icon: "🐍", proficiency: 85, years: 3, category: "languages" },
  { name: "SQL", icon: "🗃️", proficiency: 80, years: 2, category: "languages" },
];
