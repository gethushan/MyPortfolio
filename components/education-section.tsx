"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio"

const education = portfolioData.education.items

export function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.2, 0, 0.38, 0.9],
      },
    },
  }

  return (
    <section id="education" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">{portfolioData.education.headerLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a]"
        >
          {education.map((item) => (
            <motion.div
              key={`${item.degree}-${item.period}`}
              variants={itemVariants}
              className="bg-[#0d0d0d] p-6 md:p-8 flex flex-col gap-4 group hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-mono text-[#525252] text-xs">{item.period}</span>
                <div className="w-1.5 h-1.5 bg-[#363636] rounded-full mt-1 flex-shrink-0 group-hover:bg-[#525252] transition-colors duration-300" />
              </div>

              <div className="space-y-1">
                <h3 className="text-base md:text-lg text-[#fafafa] font-normal leading-snug">{item.degree}</h3>
                <p className="text-mono text-[#525252] text-xs md:text-sm">{item.institution}</p>
              </div>

              <p className="text-sm text-[#737373] leading-relaxed mt-auto">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-10 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
