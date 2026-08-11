import type { Metadata } from "next";
import { SkillsPage } from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills",
  description: "Explore Viru Pathak's technical skills: React, Next.js, TypeScript, Node.js, PostgreSQL, Docker, AWS, and more — with proficiency levels and years of experience.",
};

export default function Page() {
  return <SkillsPage />;
}
