import type { Metadata } from "next";
import { EducationPage } from "./EducationPage";

export const metadata: Metadata = {
  title: "Education",
  description: "Viru Pathak's academic background and professional certifications including AWS, Google Cloud, and more.",
};

export default function Page() {
  return <EducationPage />;
}
