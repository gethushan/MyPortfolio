"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { portfolioData } from "@/lib/portfolio"

export function Footer() {
  const [showProfilePreview, setShowProfilePreview] = useState(false)
  const githubProfile = portfolioData.contact.links.find(
    (link) => link.label === "GitHub"
  )
  const githubUsername =
    githubProfile?.value ||
    githubProfile?.href?.split("/").filter(Boolean).pop() ||
    "github"
  const githubAvatarUrl = `https://github.com/${githubUsername}.png?size=160`

  return (
    <motion.footer
      className="px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-6 md:pb-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
    >
      <div className="h-px bg-[#2a2a2a] mb-4 sm:mb-6 md:mb-8" />

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        <div
          className="flex justify-center items-center px-2"
          onMouseEnter={() => setShowProfilePreview(true)}
          onMouseLeave={() => setShowProfilePreview(false)}
        >
          <div className="text-[#a1a1a1] text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 md:gap-2.5 flex-wrap justify-center leading-relaxed">
            <span className="whitespace-nowrap">{portfolioData.footer.textPrefix}</span>
            <a
              href={githubProfile?.href ?? portfolioData.footer.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fafafa] hover:text-[#a1a1a1] transition-colors underline decoration-[#404040] hover:decoration-[#fafafa] shrink-0"
            >
              {portfolioData.footer.name}
            </a>

            <span className="relative inline-flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#a1a1a1] hover:text-[#fafafa] transition-colors shrink-0"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.11-.775.42-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 3.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.105.81 2.23 0 1.61-.015 2.91-.015 3.305 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>

              <AnimatePresence>
                {showProfilePreview && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 10,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: 5,
                      filter: "blur(2px)",
                    }}
                    transition={{
                      duration: 0.15,
                      ease: [0.2, 0, 0.38, 0.9],
                      scale: {
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      },
                    }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 sm:mb-3 md:mb-4 z-50 bg-[#121212] rounded-[28px] shadow-2xl border border-[#2a2a2a] overflow-hidden"
                  >
                    <motion.div
                      className="w-72 sm:w-80 md:w-96"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05, duration: 0.1 }}
                    >
                      <div className="p-4 sm:p-5 bg-[#0f0f0f] border border-[#2a2a2a] rounded-3xl">
                        <div className="flex items-center gap-4">
                          <img
                            src={githubAvatarUrl}
                            alt={`${githubUsername} avatar`}
                            className="w-16 h-16 rounded-2xl border border-[#2a2a2a] object-cover"
                          />
                          <div className="min-w-0">
                            <p className="text-base text-[#fafafa] font-semibold truncate">
                              {githubUsername}
                            </p>
                            <p className="text-xs uppercase tracking-[0.24em] text-[#525252]">
                              GitHub profile preview
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 grid gap-3">
                          <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-4">
                            <p className="text-xs uppercase text-[#525252] tracking-[0.24em] mb-2">
                              Profile URL
                            </p>
                            <p className="text-sm text-[#fafafa] wrap-break-word">
                              {githubProfile?.href ?? "https://github.com"}
                            </p>
                          </div>

                          <a
                            href={githubProfile?.href ?? "https://github.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#484848] bg-[#161616] px-4 py-2 text-sm text-[#fafafa] transition hover:bg-[#1f1f1f]"
                          >
                            View on GitHub
                            <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#2a2a2a]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-3">
          <div className="w-4 sm:w-6 md:w-8 h-px bg-[#2a2a2a]" />
          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-[#404040] rounded-full shrink-0" />
          <div className="w-4 sm:w-6 md:w-8 h-px bg-[#2a2a2a]" />
        </div>

        <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-3 left-2 sm:left-3 md:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-l border-b border-[#333]" />
        <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-3 right-2 sm:right-3 md:right-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-r border-b border-[#333]" />
      </div>
    </motion.footer>
  )
}
