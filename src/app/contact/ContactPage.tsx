"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";

const subjects = [
  "Job Opportunity",
  "Collaboration",
  "Freelance Project",
  "Just Saying Hi",
  "Other",
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailCopied, setEmailCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission (replace with Formspree/Resend endpoint)
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("pathakvirru@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 text-sm";

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="Get In Touch"
          title="Let's "
          highlight="Connect"
          description="Whether you have a project in mind, want to collaborate, or just say hi — I'd love to hear from you."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl border border-green-500/20 bg-green-500/5 p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">Open to full-time roles, freelance projects, and exciting collaborations.</p>
            </motion.div>

            {/* Email (copy) */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={copyEmail}
              className="w-full glass rounded-xl border border-border/50 hover:border-primary/30 p-5 text-left transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <p className="text-foreground text-sm font-medium">pathakvirru@gmail.com</p>
                  </div>
                </div>
                {emailCopied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
            </motion.button>

            {/* Social links */}
            {[
              { icon: GithubIcon, label: "GitHub", value: "/virump", href: "https://github.com/virump" },
              { icon: LinkedinIcon, label: "LinkedIn", value: "/in/pathakvirru", href: "https://www.linkedin.com/in/pathakvirru/" },
              { icon: TwitterIcon, label: "Twitter/X", value: "@PathakVirru", href: "https://x.com/PathakVirru" },
              { icon: InstagramIcon, label: "Instagram", value: "@pathakvirru", href: "https://www.instagram.com/pathakvirru/" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="flex items-center gap-3 glass rounded-xl border border-border/50 hover:border-primary/30 p-5 transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Meta */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-xl border border-border/50 p-4">
                <MapPin className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground mt-0.5">Thane, India</p>
              </div>
              <div className="glass rounded-xl border border-border/50 p-4">
                <Clock className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-xs text-muted-foreground">Response Time</p>
                <p className="text-sm font-medium text-foreground mt-0.5">Within 24 hrs</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="glass rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); setCharCount(0); }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl border border-border/50 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className={inputClass}>
                    <option value="">Select a subject…</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                    <span className={`text-xs ${charCount > 800 ? "text-red-400" : "text-muted-foreground"}`}>{charCount}/1000</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={1000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hello…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  id="contact-submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === "loading" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
