import type { Metadata } from "next";
import { BlogListPage } from "./BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and insights by Viru Pathak on React, Next.js, TypeScript, accessibility, and full-stack development.",
};

export default function Page() {
  return <BlogListPage />;
}
