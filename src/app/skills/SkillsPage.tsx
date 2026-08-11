"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skills, Skill } from "@/lib/data/skills";

const categories = [
  { id: "frontend", label: "Frontend", emoji: "🎨" },
  { id: "backend", label: "Backend", emoji: "🔧" },
  { id: "devops", label: "DevOps & Cloud", emoji: "☁️" },
  { id: "tools", label: "Tools", emoji: "🛠️" },
  { id: "languages", label: "Languages", emoji: "💬" },
] as const;

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-xl border border-border/50 hover:border-primary/30 p-5 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{skill.icon}</span>
          <div>
            <p className="font-heading font-semibold text-foreground text-sm">{skill.name}</p>
            <p className="text-muted-foreground text-xs">{skill.years} yr{skill.years !== 1 ? "s" : ""}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {skill.currentlyLearning && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Learning
            </span>
          )}
          <span className="text-primary font-bold text-sm font-mono">{skill.proficiency}%</span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const filtered = skills.filter((s) => s.category === activeCategory);
  const currentlyLearning = skills.filter((s) => s.currentlyLearning);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="Tech Stack"
          title="Skills & "
          highlight="Expertise"
          description="A comprehensive look at my technical toolkit — from frontend frameworks to cloud infrastructure."
        />

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-primary/30"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/50"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Currently Learning */}
        {currentlyLearning.length > 0 && (
          <div className="mt-16">
            <SectionHeading
              badge="On My Radar"
              title="Currently "
              highlight="Learning"
              description="Technologies I'm actively exploring and building skills in."
            />
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {currentlyLearning.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl glass border border-amber-500/20 bg-amber-500/5"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{skill.name}</p>
                    <p className="text-amber-400 text-xs font-medium">In Progress · {skill.proficiency}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
