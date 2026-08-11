import type { Metadata } from "next";
import { ExperiencePage } from "./ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description: "Viru Pathak's professional work experience — Senior Full-Stack Engineer, Freelance Developer, and more.",
};

export default function Page() {
  return <ExperiencePage />;
}
