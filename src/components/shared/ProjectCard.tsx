"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { TechBadge } from "./TechBadge";
import { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusStyles = {
  live: "bg-green-500/10 text-green-400 border-green-500/20",
  "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  archived: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const statusLabels = {
  live: "● Live",
  "in-progress": "● In Progress",
  archived: "○ Archived",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group glass rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Cover image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-40 group-hover:opacity-70 transition-opacity duration-300">
            {project.category === "fullstack" && "⚡"}
            {project.category === "frontend" && "🎨"}
            {project.category === "backend" && "🔧"}
            {project.category === "mobile" && "📱"}
            {project.category === "oss" && "🌍"}
          </span>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={cn(
            "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
            statusStyles[project.status]
          )}>
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.techStack.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md border text-xs font-medium bg-muted/50 text-muted-foreground border-border/50">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/50">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors duration-200 group/btn"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
