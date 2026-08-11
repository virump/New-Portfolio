"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Zap,
  Calendar,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import { Project } from "@/lib/data/projects";
import { TechBadge } from "@/components/shared/TechBadge";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

const statusStyles = {
  live: "bg-green-500/10 text-green-400 border-green-500/30",
  "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  archived: "bg-gray-500/10 text-gray-400 border-gray-500/30",
};

export function ProjectDetailPage({ project }: { project: Project }) {
  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl border border-border/50 overflow-hidden mb-10"
        >
          {/* Cover */}
          <div className="relative h-64 bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl opacity-40">
                {project.category === "fullstack" && "⚡"}
                {project.category === "frontend" && "🎨"}
                {project.category === "backend" && "🔧"}
                {project.category === "mobile" && "📱"}
                {project.category === "oss" && "🌍"}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">{project.title}</h1>
                <p className="text-muted-foreground text-lg">{project.description}</p>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-sm font-medium border ${statusStyles[project.status]}`}>
                {project.status === "live" ? "● Live" : project.status === "in-progress" ? "● In Progress" : "○ Archived"}
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {project.startDate} – {project.endDate ?? "Present"}
              </span>
              <span className="capitalize flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                {project.category}
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors">
                  <GithubIcon className="w-4 h-4" /> View Source
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-xl border border-border/50 p-6 mb-6">
          <h2 className="font-heading font-bold text-lg text-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => <TechBadge key={tech} name={tech} size="md" />)}
          </div>
        </motion.div>

        {/* Long description */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-xl border border-border/50 p-6 mb-6">
          <h2 className="font-heading font-bold text-lg text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-xl border border-border/50 p-6 mb-6">
          <h2 className="font-heading font-bold text-lg text-foreground mb-4">Key Features</h2>
          <ul className="space-y-2.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-xl border border-border/50 p-6 mb-12">
          <h2 className="font-heading font-bold text-lg text-foreground mb-4">Challenges & Learnings</h2>
          <ul className="space-y-2.5">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0">⚡</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Related projects */}
        {related.length > 0 && (
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
