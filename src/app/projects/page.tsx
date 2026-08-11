import type { Metadata } from "next";
import { ProjectsPage } from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of projects built by Viru Pathak — full-stack web apps, mobile apps, APIs, open-source libraries, and cloud dashboards.",
};

export default function Page() {
  return <ProjectsPage />;
}
