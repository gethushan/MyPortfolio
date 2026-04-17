"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { portfolioData } from "@/lib/portfolio"

export function WorkSection() {
  const projects = useMemo(
    () => portfolioData.work.items.map((project) => ({ ...project })),
    [],
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section id="work" className="py-8 md:py-12 relative">
      <div className="px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 md:mb-10"
        >
          <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm">{portfolioData.work.headerLabel}</span>
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
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#404040] via-[#2a2a2a] to-transparent hidden md:block" />

          <div className="md:pl-6">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <div className="group relative py-4 md:py-4 border-b border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-[#525252] transition-all duration-300 hidden md:block" />

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row md:items-center md:justify-between md:pl-4"
                  >
                    <div className="flex items-start gap-2 md:items-center md:gap-4 flex-wrap">
                      <span className="text-lg md:text-xl lg:text-2xl font-normal text-[#fafafa] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        {project.title}
                      </span>
                      {project.tag && (
                        <span className="text-mono text-[#525252] text-xs md:text-sm flex-shrink-0">[{project.tag}]</span>
                      )}
                      <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4 text-[#525252] group-hover:text-[#fafafa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 mt-2 md:mt-0 flex-wrap">
                      <span className="text-sm md:text-base text-[#737373] group-hover:text-[#a1a1a1] transition-colors duration-300">
                        {project.description}
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
