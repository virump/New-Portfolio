import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
}

const techColors: Record<string, string> = {
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-white/10 text-white border-white/20",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "JavaScript": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "Python": "bg-yellow-600/10 text-yellow-500 border-yellow-600/20",
  "PostgreSQL": "bg-blue-700/10 text-blue-400 border-blue-700/20",
  "MongoDB": "bg-green-600/10 text-green-400 border-green-600/20",
  "Redis": "bg-red-500/10 text-red-400 border-red-500/20",
  "Docker": "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "AWS": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "GraphQL": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Tailwind CSS": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "TailwindCSS": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Prisma": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Supabase": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Stripe": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Vue.js": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "React Native": "bg-cyan-600/10 text-cyan-300 border-cyan-600/20",
  "Kubernetes": "bg-blue-600/10 text-blue-400 border-blue-600/20",
  "default": "bg-primary/10 text-primary border-primary/20",
};

export function TechBadge({ name, className, size = "sm" }: TechBadgeProps) {
  const colorClass = techColors[name] || techColors["default"];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border font-medium",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        colorClass,
        className
      )}
    >
      {name}
    </span>
  );
}
