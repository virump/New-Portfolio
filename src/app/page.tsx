"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Download,
  ArrowRight,
  ChevronDown,
  Mail,
  ExternalLink,
  Zap,
  Code2,
  Globe,
  Star,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

const roles = [
  "Web Developer",
  "Python Developer",
  "Django Developer",
  "React Developer",
  "Problem Solver",
];

const stats = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "GitHub Repos", value: 10, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Lines of Code", value: 15, suffix: "K+" },
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const handleTyping = () => {
      if (!isDeleting && displayText === currentRole) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    };

    timeoutRef.current = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeoutRef.current!);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="gradient-text font-heading font-bold">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading font-bold text-3xl text-foreground">
      {count}{suffix}
    </span>
  );
}

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 dark:opacity-10 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Floating blobs */}
        <FloatingShape className="w-96 h-96 bg-indigo-500 -top-20 -left-20" delay={0} />
        <FloatingShape className="w-72 h-72 bg-violet-500 top-1/3 -right-20" delay={2} />
        <FloatingShape className="w-64 h-64 bg-indigo-400 bottom-20 left-1/4" delay={4} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4 leading-none tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text glow-text">Viru</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl mb-6 h-12 flex items-center justify-center"
          >
            <TypewriterText />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build things for the web —{" "}
            <span className="text-foreground font-medium">fast</span>,{" "}
            <span className="text-foreground font-medium">scalable</span>, and{" "}
            <span className="text-foreground font-medium">beautiful</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/projects"
              id="hero-view-work"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              id="hero-contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              Get In Touch
              <Mail className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {[
              { href: "https://github.com/virump", icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pathakvirru/", icon: LinkedinIcon, label: "LinkedIn" },
              { href: "https://x.com/PathakVirru", icon: TwitterIcon, label: "Twitter" },
              { href: "https://www.instagram.com/pathakvirru/", icon: InstagramIcon, label: "Instagram" },
              { href: "/viruresume.pdf", icon: Download, label: "Resume PDF", download: true },
            ].map(({ href, icon: Icon, label, download }) => (
              <a
                key={label}
                href={href}
                target={download ? "_blank" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-all duration-200 text-sm font-medium group"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-border/50 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Projects I'm "
          highlight="Proud Of"
          description="A selection of my best projects spanning full-stack development, mobile, cloud, and open source."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors duration-200"
          >
            See All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── WHAT I DO ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Expertise"
            title="What I "
            highlight="Do Best"
            description="I bring ideas to life with code — from pixel-perfect UIs to rock-solid backends and DevOps pipelines."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Code2, title: "Frontend Dev", desc: "React, Next.js, TypeScript, animations, and design systems that delight users.", color: "text-blue-400 bg-blue-500/10" },
              { icon: Globe, title: "Backend & APIs", desc: "Scalable Node.js/Python services, GraphQL, REST APIs, and database architecture.", color: "text-green-400 bg-green-500/10" },
              { icon: Zap, title: "DevOps & Cloud", desc: "Docker, Kubernetes, CI/CD pipelines, AWS, and infrastructure as code with Terraform.", color: "text-yellow-400 bg-yellow-500/10" },
              { icon: Star, title: "Open Source", desc: "Active contributor to major OSS projects with 2,800+ stars across my own libraries.", color: "text-violet-400 bg-violet-500/10" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl border border-border/50 hover:border-primary/30 p-6 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/skills"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors duration-200"
            >
              Full Skill Stack
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-border/50 p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-violet-500/5 to-transparent rounded-2xl" />
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium mb-4">
              🟢 Open to Work
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-text">amazing together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just say hi — my inbox is always open.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
