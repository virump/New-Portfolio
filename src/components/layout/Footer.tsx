"use client";

import Link from "next/link";
import Image from "next/image";
import { Code2, Mail, Rocket } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/shared/SocialIcons";

const footerPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/virump", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/pathakvirru/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://x.com/PathakVirru", label: "Twitter/X", icon: TwitterIcon },
  { href: "https://www.instagram.com/pathakvirru/", label: "Instagram", icon: InstagramIcon },
  { href: "mailto:pathakvirru@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-primary/20">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Viru<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building fast, scalable, and beautiful digital experiences. Open to exciting opportunities.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Available for hire</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Pages</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-200 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-3 pt-8 border-t border-border/50">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <Image src="/favicon-32x32.png" alt="Viru Pathak Logo" width={16} height={16} className="rounded-sm -mt-[2px]" />
            <span className="leading-none">© {year} Viru Pathak. All rights reserved.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
