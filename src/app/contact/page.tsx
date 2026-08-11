import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Viru Pathak for job opportunities, collaborations, or just to say hello.",
};

export default function Page() {
  return <ContactPage />;
}
