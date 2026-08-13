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
    slug: "safe-her",
    title: "SAFE-HER",
    description: "A women's safety platform featuring live location tracking, emergency alerts, and quick response assistance.",
    longDescription: "SAFE-HER is a women's safety web application built with Django that features live location tracking, showing the user's current location on an interactive map. In emergencies, users can trigger an alert button that shares their real-time location with admins and trusted contacts. The platform ensures quick response and assistance, enhancing security in critical situations by integrating modern web technologies for instant support and protection.",
    techStack: ["Django", "Python", "HTML", "CSS", "Git", "GitHub", "JavaScript", "Google Maps API"],
    category: "fullstack",
    status: "live",
    githubUrl: "https://github.com/virump/SAFE-HER",
    coverImage: "/images/projects/safe-her.jpg",
    screenshots: [],
    features: [
      "Real-time live location tracking on interactive map",
      "Emergency SOS alert button with instant notification",
      "Admin dashboard to monitor and respond to alerts",
      "User authentication and profile management",
      "Location sharing with trusted contacts",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      "Implementing real-time geolocation tracking with high accuracy",
      "Building a reliable emergency alert system with minimal latency",
      "Designing an intuitive UI for high-stress emergency situations",
    ],
    startDate: "2024-10",
    endDate: "2024-10",
    featured: true,
  },
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    description: "A pixel-perfect clone of the Spotify landing page built with pure HTML, CSS, and JavaScript.",
    longDescription: "A front-end project that recreates the Spotify web player's landing page with high fidelity. Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks. The project demonstrates strong fundamentals in responsive web design, CSS layout techniques, and attention to UI/UX detail.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    status: "live",
    githubUrl: "https://github.com/virump/Spotify-clone",
    coverImage: "/images/projects/spotify-clone.jpg",
    screenshots: [],
    features: [
      "Pixel-perfect recreation of Spotify's landing page",
      "Fully responsive layout for all screen sizes",
      "Clean, semantic HTML structure",
      "CSS animations and hover effects",
      "Interactive navigation and UI elements",
    ],
    challenges: [
      "Matching Spotify's exact design without using any CSS framework",
      "Creating a fully responsive layout with pure CSS Flexbox and Grid",
    ],
    startDate: "2024-01",
    endDate: "2024-01",
    featured: true,
  },
  {
    slug: "chess-game",
    title: "Chess Game",
    description: "An interactive chess game built with EJS, Tailwind CSS, and JavaScript with full game logic.",
    longDescription: "A fully functional chess game implemented with JavaScript for game logic, EJS for templating, and Tailwind CSS for styling. Players can make moves following standard chess rules, with move validation, turn-based gameplay, and a clean modern UI.",
    techStack: ["EJS", "Tailwind CSS", "JavaScript", "Node.js"],
    category: "frontend",
    status: "live",
    githubUrl: "https://github.com/virump/Chess-Game",
    coverImage: "/images/projects/chess-game.jpg",
    screenshots: [],
    features: [
      "Full chess game logic with move validation",
      "Turn-based two-player gameplay",
      "Clean and modern UI with Tailwind CSS",
      "Interactive drag-and-drop or click-to-move pieces",
      "Game state tracking and move history",
    ],
    challenges: [
      "Implementing complete chess rules including castling and en passant",
      "Building an intuitive piece movement system",
    ],
    startDate: "2025-12",
    endDate: "2025-12",
    featured: false,
  },
  {
    slug: "realtime-tracker-map",
    title: "Realtime Tracker Map",
    description: "A real-time location tracker with interactive markers built using JavaScript and Leaflet.js.",
    longDescription: "A real-time tracker map application that displays live location markers on an interactive Leaflet.js map. The app uses geolocation APIs to track position and updates markers in real time. Built with EJS templating, Tailwind CSS for styling, and JavaScript for the core tracking logic.",
    techStack: ["EJS", "Tailwind CSS", "JavaScript", "Leaflet.js", "Node.js"],
    category: "fullstack",
    status: "live",
    githubUrl: "https://github.com/virump/Realtime-tracker-map",
    coverImage: "/images/projects/tracker-map.jpg",
    screenshots: [],
    features: [
      "Real-time location tracking with live map markers",
      "Interactive Leaflet.js map with zoom and pan",
      "Geolocation API integration for position tracking",
      "Responsive map interface for mobile and desktop",
      "Custom marker styling and popups",
    ],
    challenges: [
      "Handling real-time geolocation updates efficiently",
      "Optimizing map rendering performance with multiple markers",
    ],
    startDate: "2025-02",
    endDate: "2025-02",
    featured: true,
  },
];
