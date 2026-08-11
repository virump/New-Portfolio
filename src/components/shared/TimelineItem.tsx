"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: string;
  location?: string;
  remote?: boolean;
  type?: string;
  description?: string;
  bullets?: string[];
  techStack?: string[];
  index: number;
  side?: "left" | "right";
  logo?: string;
}

export function TimelineItem({
  title,
  subtitle,
  dateRange,
  location,
  remote,
  type,
  description,
  bullets,
  techStack,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-primary bg-background z-10 relative">
          <div className="absolute inset-0.5 rounded-full bg-primary/60 animate-pulse-glow" />
        </div>
      </div>

      {/* Vertical line (not on last item) */}
      <div className="absolute left-[7px] top-5 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      {/* Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="glass rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-0.5">{title}</h3>
            <p className="font-semibold text-primary text-sm">{subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>{dateRange}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
                {remote && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Remote
                  </span>
                )}
              </div>
            )}
            {type && (
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border",
                type === "full-time" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                type === "freelance" ? "bg-violet-500/10 text-violet-400 border-violet-500/20" :
                type === "contract" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                "bg-gray-500/10 text-gray-400 border-gray-500/20"
              )}>
                {type}
              </span>
            )}
          </div>
        </div>

        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
        )}

        {bullets && bullets.length > 0 && (
          <ul className="space-y-1.5 mb-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
