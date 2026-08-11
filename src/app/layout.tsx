import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virupathak.dev"),
  title: {
    default: "Viru Pathak — Full-Stack Developer",
    template: "%s | Viru Pathak",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and cloud infrastructure. Building fast, scalable, and beautiful digital products.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Viru Pathak",
  ],
  authors: [{ name: "Viru Pathak" }],
  creator: "Viru Pathak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virupathak.dev",
    title: "Viru Pathak — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and cloud infrastructure.",
    siteName: "Viru Pathak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viru Pathak — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and cloud infrastructure.",
    creator: "@viru_pathak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
