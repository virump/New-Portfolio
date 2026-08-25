import { Metadata } from "next";
import { SnakeGame } from "@/components/shared/SnakeGame";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Play",
  description: "Take a break and play a quick game of classic Snake.",
};

export default function PlayPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[90vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mb-12">
        <SectionHeading
          badge="Easter Egg"
          title="Take a break,"
          highlight="play some Snake"
          description="A classic retro game built entirely with React hooks and Tailwind CSS."
        />
      </div>
      
      <div className="w-full">
        <SnakeGame />
      </div>
    </div>
  );
}
