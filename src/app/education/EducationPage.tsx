"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Shield } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TimelineItem } from "@/components/shared/TimelineItem";
import { education, certifications } from "@/lib/data/education";

export function EducationPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="Education"
          title="Academic "
          highlight="Background"
          description="Where my engineering foundation was built — and the credentials that keep me sharp."
        />

        {/* Education Timeline */}
        <div className="mt-16 relative">
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.id}
              title={edu.degree}
              subtitle={`${edu.institution} · ${edu.location}`}
              dateRange={`${edu.startYear} – ${edu.endYear}`}
              description={`Major: ${edu.major} · GPA: ${edu.gpa ?? "N/A"}`}
              bullets={[
                ...edu.courses.slice(0, 4).map((c) => `Coursework: ${c}`),
                ...edu.projects.map((p) => `Project: ${p}`),
              ]}
              index={i}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <SectionHeading
            badge="Certifications"
            title="Professional "
            highlight="Credentials"
            description="Industry-recognized certifications from leading technology companies."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    {cert.verified ? (
                      <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground leading-tight">{cert.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.verified && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20 flex-shrink-0">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                  <p className="text-muted-foreground text-xs">
                    {new Date(cert.date + "-01").toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary text-xs font-medium hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
