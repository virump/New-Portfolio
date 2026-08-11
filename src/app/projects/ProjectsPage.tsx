"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/lib/data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "oss", label: "Open Source" },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="Portfolio"
          title="My "
          highlight="Projects"
          description={`${projects.length} projects spanning full-stack, backend, mobile, and open source — each solving a real problem.`}
        />

        {/* Filter bar */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeFilter === f.id}
              onClick={() => setActiveFilter(f.id)}
              id={`filter-${f.id}`}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === f.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-primary/30"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/50"
              }`}
            >
              {f.label}
              {f.id !== "all" && (
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeFilter === f.id ? "bg-white/20" : "bg-muted text-muted-foreground"
                }`}>
                  {projects.filter((p) => p.category === f.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
