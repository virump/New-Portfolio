"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Download,
  Code2,
  Globe,
  Server,
  GitBranch,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCard } from "@/components/shared/AnimatedCard";

const values = [
  { icon: "🧹", title: "Clean Code", desc: "Code is written for humans first. I write self-documenting, testable, maintainable code." },
  { icon: "👤", title: "User First", desc: "Every technical decision is made through the lens of user experience and business impact." },
  { icon: "📚", title: "Continuous Learning", desc: "The tech world evolves fast. I invest daily in learning new tools, patterns, and paradigms." },
];

const whatIDo = [
  { icon: Code2, title: "Frontend Development", desc: "Crafting pixel-perfect, accessible, and performant interfaces using React, Next.js, and TypeScript.", color: "text-blue-400 bg-blue-500/10" },
  { icon: Server, title: "Backend Architecture", desc: "Designing scalable APIs, microservices, and data pipelines with Node.js, FastAPI, and PostgreSQL.", color: "text-green-400 bg-green-500/10" },
  { icon: Globe, title: "DevOps & Cloud", desc: "Building robust CI/CD pipelines, containerizing apps with Docker/Kubernetes, and deploying on AWS.", color: "text-orange-400 bg-orange-500/10" },
  { icon: GitBranch, title: "Open Source", desc: "Contributing to the OSS ecosystem and maintaining my own libraries used by hundreds of developers.", color: "text-violet-400 bg-violet-500/10" },
];

const hobbies = ["Gaming 🎮", "Reading 📖", "Hiking 🏔️", "Photography 📸", "Coffee ☕", "Open Source 💻", "Music 🎵", "Travel ✈️"];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="About Me"
          title="The Developer "
          highlight="Behind the Code"
          description="I'm a passionate Full-Stack Developer from India who loves turning complex problems into elegant, user-centric solutions."
        />

        {/* Split layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar frame */}
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-primary/30">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Open to Work</span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/10 -z-10" />
              <div className="absolute -inset-6 rounded-2xl border border-primary/5 -z-20" />
            </div>

            {/* Info sidebar */}
            <div className="w-full max-w-xs space-y-3">
              {[
                { icon: MapPin, label: "Location", value: "Thane, Maharashtra, India" },
                { icon: Calendar, label: "Experience", value: "5+ Years" },
                { icon: CheckCircle2, label: "Status", value: "Available for Hire ✅" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-xl border border-border/50 px-4 py-3 flex items-center gap-3">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
              <a
                href="/viruresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              "I\u2019m Viru Pathak, a dedicated programming enthusiast seeking to leverage my coding skills and passion for technology in a dynamic development environment. My goal is to contribute to innovative software solutions while continuously enhancing my expertise.",
              "My journey started with a Computer Engineering degree from MGM College of Engineering & Technology, Kamothe, Navi Mumbai. I specialize in Python, Django, React, Next.js, and modern web development technologies. From crafting efficient algorithms to developing user-centric web applications, I thrive on challenges that allow me to apply my diverse skill set.",
              "I aim to collaborate with talented teams to create impactful web applications that drive success. I\u2019m always exploring new tools and frameworks to stay at the cutting edge and build fast, reliable, and beautiful digital products.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Hobbies */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="px-3 py-1.5 rounded-full bg-muted/70 text-muted-foreground text-sm border border-border/50 hover:border-primary/30 hover:text-primary transition-colors duration-200">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do */}
        <div className="mt-24">
          <SectionHeading
            badge="Services"
            title="What I "
            highlight="Do"
            description="From frontend to DevOps, I cover the full development lifecycle."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatIDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedCard key={item.title} delay={i * 0.1} className="p-6 flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <SectionHeading
            badge="Values"
            title="What I "
            highlight="Stand For"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedCard key={v.title} delay={i * 0.15} className="p-8 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
