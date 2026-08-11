import type { Metadata } from "next";
import { AchievementsPage } from "./AchievementsPage";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, open-source contributions, hackathon wins, and GitHub stats for Viru Pathak — Full-Stack Developer.",
};

export default function Page() {
  return <AchievementsPage />;
}
