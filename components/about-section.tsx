"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio"

export function AboutSection() {
  const about = portfolioData.about

  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">{about.headerLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="space-y-8">
            <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">{about.paragraphs[0]}</p>

            <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">
              Currently at{" "}
              {about.currentRoles.map((role, index) => (
                <span key={role.company}>
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fafafa] underline decoration-[#525252] hover:decoration-[#fafafa] transition-colors duration-300"
                  >
                    {role.company}
                  </a>{" "}
                  as {role.title}
                  {index < about.currentRoles.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">{about.paragraphs[1]}</p>
            <p className="text-base md:text-lg text-[#a1a1a1] leading-relaxed">{about.paragraphs[2]}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
