"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/portfolio";

export function FeaturedProject() {
  const projects = portfolioData.featured.items;

  return (
    <section id="featured" className="py-12 md:py-16 relative">
      <div className="px-6 md:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.98 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
            className={`${index > 0 ? "mt-16 md:mt-20" : ""}`}
          >
            {index === 0 && (
              <div className="relative mb-8 md:mb-10">
                <div className="h-px bg-[#2a2a2a] mb-6 md:mb-6" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 md:w-6 h-px bg-[#404040]" />
                    <span className="font-mono text-[#737373] text-xs md:text-sm font-medium">
                      {portfolioData.featured.headerLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
                    <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
                  </div>
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0.98 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
              className="relative"
            >
              <div className="md:pl-6">
                <div className="group relative mb-8 md:mb-12 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#404040] transition-all duration-300">
                  <div className="relative w-full aspect-video md:aspect-[16/9]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-3 h-px bg-[#525252] transition-all duration-300 hidden md:block" />
                </div>

                <div className="space-y-6 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-[#fafafa] text-pretty">
                      {project.title}
                      {project.funding && (
                        <span className="text-[#737373]">
                          {" "}
                          ({project.funding})
                        </span>
                      )}
                    </h3>

                    <div className="space-y-4 text-base md:text-lg text-[#a1a1a1] leading-relaxed">
                      <p>{project.description}</p>

                      <div className="space-y-3 pt-2">
                        {project.sections.map((section) => (
                          <div key={`${project.id}-${section.title}`}>
                            <h4 className="text-[#fafafa] font-medium mb-2">
                              {section.title}
                            </h4>
                            <p className="text-sm md:text-base">
                              {section.content}
                            </p>
                          </div>
                        ))}

                        <div className="pt-2">
                          <p className="text-sm text-[#737373]">
                            <span className="text-[#fafafa] font-medium">
                              Role:
                            </span>{" "}
                            {project.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-4 flex items-center gap-4 flex-wrap"
                  >
                    {project.links.map((link) => (
                      <a
                        key={`${project.id}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#fafafa] hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {index < projects.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 md:mt-16 flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
                <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
              </motion.div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
