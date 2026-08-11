"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitPullRequest } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import {
  achievements,
  ossContributions,
  hackathonWins,
} from "@/lib/data/achievements";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const positionEmoji: Record<number | string, string> = { 1: "🥇", 2: "🥈", 3: "🥉", finalist: "🏅" };

export function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* Animated Counters */}
        <section>
          <SectionHeading badge="By the Numbers" title="Impact in " highlight="Numbers" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "Total Projects", value: 40, suffix: "+" },
              { label: "GitHub Stars", value: 2800, suffix: "+" },
              { label: "OSS Contributions", value: 120, suffix: "+" },
              { label: "Years Experience", value: 5, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl border border-border/50 p-6 text-center"
              >
                <p className="font-heading font-bold text-4xl gradient-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <SectionHeading badge="Recognition" title="Awards & " highlight="Highlights" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((ach, i) => (
              <AnimatedCard key={ach.id} delay={i * 0.1} className="p-6" hover>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{ach.icon}</div>
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-foreground text-sm leading-tight">{ach.title}</h3>
                    </div>
                    <p className="text-primary text-xs font-medium mb-2">{ach.issuer} · {new Date(ach.date + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* OSS Contributions */}
        <section>
          <SectionHeading badge="Open Source" title="OSS " highlight="Contributions" description="Merged pull requests in projects used by millions of developers." />
          <div className="mt-10 space-y-4">
            {ossContributions.map((oss, i) => (
              <AnimatedCard key={oss.id} delay={i * 0.08} className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <a href={oss.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="font-heading font-bold text-primary hover:underline text-sm font-mono">
                        {oss.repo}
                      </a>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {oss.stars.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">{oss.description}</p>
                    <p className="text-foreground text-sm">{oss.contribution}</p>
                  </div>
                  {oss.prUrl && (
                    <a href={oss.prUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors flex-shrink-0">
                      <GitPullRequest className="w-3.5 h-3.5" />
                      View PR
                    </a>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Hackathons */}
        <section>
          <SectionHeading badge="Competitions" title="Hackathon " highlight="Wins" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hackathonWins.map((hack, i) => (
              <AnimatedCard key={hack.id} delay={i * 0.1} className="p-6">
                <div className="text-4xl mb-3">{positionEmoji[hack.position]}</div>
                <h3 className="font-heading font-bold text-foreground mb-1">{hack.projectName}</h3>
                <p className="text-primary text-xs font-semibold mb-2">{hack.event}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{hack.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground pt-3 border-t border-border/50">
                  <span>Team of {hack.teamSize}</span>
                  <span>·</span>
                  <span>{new Date(hack.date + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                  {hack.prize && <><span>·</span><span className="text-green-400">{hack.prize}</span></>}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        <section>
          <SectionHeading badge="GitHub Activity" title="GitHub " highlight="Stats" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatedCard className="p-4 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=viru-pathak&show_icons=true&theme=transparent&hide_border=true&text_color=a1a1aa&icon_color=6366f1&title_color=6366f1"
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </AnimatedCard>
            <AnimatedCard className="p-4 overflow-hidden" delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=viru-pathak&layout=compact&theme=transparent&hide_border=true&text_color=a1a1aa&title_color=6366f1"
                alt="Top Languages"
                className="w-full"
                loading="lazy"
              />
            </AnimatedCard>
          </div>
        </section>

      </div>
    </div>
  );
}
