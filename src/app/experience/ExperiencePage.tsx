"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { TimelineItem } from "@/components/shared/TimelineItem";
import { experience } from "@/lib/data/experience";

function formatDateRange(start: string, end?: string): string {
  const fmt = (d: string) => {
    const [y, m] = d.split("-");
    const date = new Date(parseInt(y), parseInt(m) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
}

export function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="Career"
          title="Work "
          highlight="Experience"
          description="My professional journey — building products, leading teams, and solving real-world problems at scale."
        />

        <div className="mt-16 relative">
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              subtitle={exp.company}
              dateRange={formatDateRange(exp.startDate, exp.endDate)}
              location={exp.location}
              remote={exp.remote}
              type={exp.type}
              description={exp.description}
              bullets={exp.responsibilities}
              techStack={exp.techStack}
              index={i}
            />
          ))}
        </div>

        {/* Highlights summary */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Companies Worked With", value: "4+" },
            { label: "Projects Delivered", value: "40+" },
            { label: "Team Members Mentored", value: "8+" },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-xl border border-border/50 p-5 text-center">
              <p className="font-heading font-bold text-2xl text-primary">{value}</p>
              <p className="text-muted-foreground text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
