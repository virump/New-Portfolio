export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "frontend" | "backend" | "fullstack" | "mobile" | "oss";
  status: "live" | "in-progress" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  coverImage: string;
  screenshots: string[];
  features: string[];
  challenges: string[];
  startDate: string;
  endDate?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "devflow-platform",
    title: "DevFlow Platform",
    description: "A collaborative developer workflow platform with real-time code review, CI/CD pipelines, and team analytics.",
    longDescription: "DevFlow is an all-in-one developer platform built to streamline software development workflows. It combines real-time collaborative code review, automated CI/CD pipelines, and deep team analytics into one cohesive experience. The platform integrates with GitHub, GitLab, and Bitbucket, providing webhooks-based automation and detailed sprint reporting.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "WebSockets", "Prisma", "TailwindCSS"],
    category: "fullstack",
    status: "live",
    githubUrl: "https://github.com/viru-pathak/devflow",
    liveUrl: "https://devflow.app",
    coverImage: "/images/projects/devflow.jpg",
    screenshots: [],
    features: [
      "Real-time collaborative code review with inline comments",
      "Automated CI/CD pipeline builder with drag-and-drop interface",
      "Team velocity and burndown chart analytics",
      "Webhook integrations with GitHub, GitLab, Bitbucket",
      "Role-based access control and audit logs",
      "Slack and email notifications",
    ],
    challenges: [
      "Implementing conflict-free real-time editing with operational transforms",
      "Scaling WebSocket connections to thousands of concurrent users with Redis pub/sub",
      "Optimizing database queries for large code diff rendering",
    ],
    startDate: "2023-06",
    endDate: "2024-01",
    featured: true,
  },
  {
    slug: "ai-content-studio",
    title: "AI Content Studio",
    description: "An AI-powered content creation tool with multi-model support, brand voice training, and collaborative editing.",
    longDescription: "AI Content Studio lets marketing teams generate, refine, and publish content at scale using multiple AI models. Users can train custom brand voice profiles, run A/B tests on AI-generated content, and collaborate in a Notion-like editor. Integrations include Wordpress, Webflow, and HubSpot.",
    techStack: ["React", "Node.js", "OpenAI API", "Anthropic", "MongoDB", "Express", "AWS S3", "Stripe"],
    category: "fullstack",
    status: "live",
    githubUrl: "https://github.com/viru-pathak/ai-content-studio",
    liveUrl: "https://aicontentstudio.io",
    coverImage: "/images/projects/ai-studio.jpg",
    screenshots: [],
    features: [
      "Multi-model AI writing (GPT-4, Claude, Gemini) with model comparison",
      "Brand voice training on existing content",
      "Rich text collaborative editor with real-time sync",
      "Content calendar and publishing workflow",
      "A/B testing for AI-generated variants",
      "Stripe billing with usage-based pricing",
    ],
    challenges: [
      "Fine-tuning prompts for consistent brand voice across different topics",
      "Building a CRDT-based collaborative editor from scratch",
      "Managing OpenAI token costs with intelligent caching",
    ],
    startDate: "2023-01",
    endDate: "2023-08",
    featured: true,
  },
  {
    slug: "ecommerce-engine",
    title: "NexCart Commerce",
    description: "A high-performance headless e-commerce engine with sub-100ms API responses and built-in analytics.",
    longDescription: "NexCart is a headless e-commerce backend engine designed for performance. It serves product catalogs, cart sessions, and checkout flows via a clean REST + GraphQL API, with Elasticsearch-powered search and Redis caching achieving sub-100ms p99 latency. Built for multi-tenant SaaS deployments.",
    techStack: ["Node.js", "GraphQL", "PostgreSQL", "Elasticsearch", "Redis", "Stripe", "Docker", "Kubernetes"],
    category: "backend",
    status: "live",
    githubUrl: "https://github.com/viru-pathak/nexcart",
    liveUrl: "https://nexcart.dev",
    coverImage: "/images/projects/nexcart.jpg",
    screenshots: [],
    features: [
      "REST + GraphQL dual API with auto-generated docs",
      "Elasticsearch product search with faceted filtering",
      "Redis-based cart sessions and inventory locking",
      "Stripe Checkout + Webhooks for payments",
      "Multi-tenant architecture with schema isolation",
      "Built-in analytics dashboard with Recharts",
    ],
    challenges: [
      "Achieving sub-100ms responses under high write concurrency",
      "Implementing optimistic inventory locking without deadlocks",
      "Designing a flexible product schema for diverse use cases",
    ],
    startDate: "2022-08",
    endDate: "2023-02",
    featured: true,
  },
  {
    slug: "taskify-mobile",
    title: "Taskify — Smart To-Do",
    description: "A React Native productivity app with AI-powered task prioritization, habit tracking, and weekly insights.",
    longDescription: "Taskify is a cross-platform mobile productivity app that uses machine learning to prioritize tasks based on deadlines, energy levels, and past completion patterns. Features include habit streaks, Pomodoro timer, weekly insights dashboard, and Google Calendar two-way sync.",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "TensorFlow.js", "Reanimated"],
    category: "mobile",
    status: "live",
    githubUrl: "https://github.com/viru-pathak/taskify",
    coverImage: "/images/projects/taskify.jpg",
    screenshots: [],
    features: [
      "AI task prioritization based on personal patterns",
      "Habit tracker with streaks and heatmaps",
      "Pomodoro timer with session analytics",
      "Google Calendar two-way sync",
      "Weekly review with insights and suggestions",
      "Offline-first with background sync",
    ],
    challenges: [
      "Running TensorFlow.js inference on mobile without performance degradation",
      "Implementing offline-first sync with conflict resolution",
      "Optimizing Reanimated gesture handlers for smooth 60fps UX",
    ],
    startDate: "2022-03",
    endDate: "2022-09",
    featured: false,
  },
  {
    slug: "open-ui-components",
    title: "OpenUI Components",
    description: "An open-source accessible React component library with 50+ components, full TypeScript support, and theming.",
    longDescription: "OpenUI is a community-driven, accessible React component library following WAI-ARIA standards. It ships 50+ components with full TypeScript typings, dark mode support, and a CSS variables-based theming system. Used by 300+ projects on GitHub.",
    techStack: ["React", "TypeScript", "Storybook", "Rollup", "CSS Variables", "Jest", "Playwright"],
    category: "oss",
    status: "live",
    githubUrl: "https://github.com/viru-pathak/open-ui",
    liveUrl: "https://openui.dev",
    coverImage: "/images/projects/openui.jpg",
    screenshots: [],
    features: [
      "50+ accessible React components (WAI-ARIA compliant)",
      "Full TypeScript types and IntelliSense support",
      "CSS variables theming system with dark mode",
      "Storybook documentation with interactive playground",
      "100% test coverage with Jest and Playwright",
      "Tree-shakeable ESM + CJS dual build",
    ],
    challenges: [
      "Ensuring WCAG 2.1 AA compliance for complex interactive components",
      "Building a theming system that works without a bundler",
      "Managing breaking changes and semver across a large API surface",
    ],
    startDate: "2021-06",
    featured: false,
  },
  {
    slug: "cloud-dashboard",
    title: "CloudVision Dashboard",
    description: "A multi-cloud infrastructure monitoring dashboard aggregating AWS, GCP, and Azure metrics in real-time.",
    longDescription: "CloudVision aggregates metrics from AWS CloudWatch, GCP Monitoring, and Azure Monitor into a single real-time dashboard. It supports custom alert rules, anomaly detection using statistical models, cost trend analysis, and Slack/PagerDuty notifications. Deployed as a self-hostable Docker Compose stack.",
    techStack: ["Vue.js", "Python", "FastAPI", "TimescaleDB", "Grafana", "Docker", "Terraform"],
    category: "frontend",
    status: "archived",
    githubUrl: "https://github.com/viru-pathak/cloudvision",
    coverImage: "/images/projects/cloudvision.jpg",
    screenshots: [],
    features: [
      "Multi-cloud metrics aggregation (AWS, GCP, Azure)",
      "Real-time charts with 1s refresh using WebSockets",
      "Custom alert rules with threshold and anomaly detection",
      "Cost analysis and trend forecasting",
      "Slack and PagerDuty integrations",
      "Self-hostable with Docker Compose",
    ],
    challenges: [
      "Normalizing inconsistent metric schemas across cloud providers",
      "Storing high-frequency time-series data efficiently with TimescaleDB",
      "Building a drag-and-drop dashboard layout with persistent state",
    ],
    startDate: "2021-01",
    endDate: "2022-01",
    featured: false,
  },
];
