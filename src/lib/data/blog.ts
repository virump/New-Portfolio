export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  coverImage: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-accessible-react-apps",
    title: "Building Accessible React Apps: A Practical Guide",
    excerpt: "Learn how to make your React applications inclusive for all users with WCAG 2.1 compliance, focus management, and screen reader optimization.",
    content: `# Building Accessible React Apps: A Practical Guide

Accessibility is not a feature — it's a fundamental requirement. In this guide, we'll cover practical techniques to make your React applications work for everyone.

## Why Accessibility Matters

Over 1 billion people worldwide live with some form of disability. When we build inaccessible web apps, we exclude a significant portion of our potential users.

## Semantic HTML is Your Foundation

Before reaching for ARIA attributes, always prefer semantic HTML elements...`,
    date: "2023-03-15",
    readTime: 12,
    tags: ["React", "Accessibility", "WCAG", "TypeScript"],
    coverImage: "/images/blog/accessibility.jpg",
    featured: true,
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js 14 Performance Optimization: From 60 to 98 Lighthouse Score",
    excerpt: "A deep-dive into real-world techniques that took our Next.js app from a Lighthouse score of 60 to 98 — covering images, fonts, code splitting, and Core Web Vitals.",
    content: `# Next.js 14 Performance Optimization

Performance directly impacts user experience and SEO. Here's how we achieved a 98 Lighthouse score...`,
    date: "2023-07-22",
    readTime: 15,
    tags: ["Next.js", "Performance", "Core Web Vitals", "Optimization"],
    coverImage: "/images/blog/performance.jpg",
    featured: true,
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Production Apps",
    excerpt: "Explore discriminated unions, template literal types, conditional types, and other advanced TypeScript patterns that make large codebases maintainable.",
    content: `# Advanced TypeScript Patterns for Production Apps

TypeScript's type system is powerful enough to model almost any runtime behavior...`,
    date: "2023-11-08",
    readTime: 18,
    tags: ["TypeScript", "Patterns", "Advanced", "JavaScript"],
    coverImage: "/images/blog/typescript.jpg",
    featured: false,
  },
  {
    slug: "building-design-systems",
    title: "Building a Design System from Scratch with React + Storybook",
    excerpt: "Step-by-step guide to creating a scalable design system: tokens, components, documentation, and the toolchain that powers it all.",
    content: `# Building a Design System from Scratch

A design system is an investment that pays dividends across every product you build...`,
    date: "2024-01-20",
    readTime: 20,
    tags: ["Design System", "React", "Storybook", "UI"],
    coverImage: "/images/blog/design-system.jpg",
    featured: false,
  },
];
