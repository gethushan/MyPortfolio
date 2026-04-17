"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"

export function WorkbenchEmbed() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // DNS prefetch and preconnect for faster iframe loading
    const prefetch = document.createElement("link")
    prefetch.rel = "dns-prefetch"
    prefetch.href = "https://nacre-quake-50137672.figma.site"
    
    const preconnect = document.createElement("link")
    preconnect.rel = "preconnect"
    preconnect.href = "https://nacre-quake-50137672.figma.site"
    
    document.head.appendChild(prefetch)
    document.head.appendChild(preconnect)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.section
      className="py-12 md:py-16 relative"
      initial={{ opacity: 0.98 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
    >
      <div className="px-6 md:px-8">
        {/* Section Header - Minimalist */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="relative mb-10 md:mb-12"
        >
          <div className="h-px bg-[#2a2a2a] mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-4 md:w-6 h-px bg-[#404040]" />
              <span className="text-mono text-[#737373] text-xs md:text-sm font-medium">workbench</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
              <div className="w-6 md:w-8 h-px bg-[#2a2a2a]" />
            </div>
          </div>
        </motion.div>

        {/* Canvas Container - Optimized for all devices */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
          className="relative group"
        >
          {/* Minimal loading indicator - Static state only, no animation */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 bg-[#404040] rounded-full opacity-50" />
            </div>
          )}

          <div 
            className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden group-hover:border-[#404040] transition-colors duration-300 will-change-colors"
            style={{ 
              height: isMobile ? "auto" : "100%",
              aspectRatio: isMobile ? "16 / 10" : "16 / 9",
              minHeight: isMobile ? "400px" : undefined,
              WebkitOverflowScrolling: "touch",
              touchAction: "manipulation",
            }}
          >
            <iframe
              src="https://nacre-quake-50137672.figma.site"
              title="WorkBench - Interactive Design Canvas"
              className="w-full h-full border-0"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen"
              loading="eager"
              style={{
                backgroundColor: "#1a1a1a",
                opacity: isLoaded ? 1 : 0.1,
                transition: "opacity 0.2s ease-out",
                pointerEvents: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            />
          </div>

          {/* Subtle hover indicator for desktop */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-2.5 h-px bg-[#525252] transition-all duration-300 ease-out hidden md:block will-change-transform" />
        </motion.div>

        {/* Premium Fullscreen CTA - Primary interaction */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0.38, 0.9] }}
          className="mt-6 md:mt-8"
        >
          <a
            href="https://nacre-quake-50137672.figma.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[#fafafa] hover:text-white transition-all duration-300 ease-out hover:gap-3.5 active:scale-95 md:active:scale-100"
          >
            <span>Explore fullscreen</span>
            <ExternalLink className="w-4 h-4 text-[#737373] group-hover/cta:text-white group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all duration-300 ease-out will-change-transform" />
          </a>
        </motion.div>

        {/* Decorative separator - elegant spacing */}
        <motion.div
          initial={{ opacity: 0.98 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#525252] rounded-full" />
          <div className="w-12 md:w-16 h-px bg-[#2a2a2a]" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#363636] rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  )
}
