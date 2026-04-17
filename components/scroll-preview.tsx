"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ScrollPreviewProps {
  children: React.ReactNode
  nextSectionRef?: React.RefObject<HTMLElement>
  sectionId?: string
}

export function ScrollPreview({ children, nextSectionRef, sectionId }: ScrollPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !nextSectionRef?.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const nextRect = nextSectionRef.current.getBoundingClientRect()

      // Calculate how much of the next section is visible
      const windowHeight = window.innerHeight
      const containerBottom = containerRect.bottom
      const nextTop = nextRect.top

      // Progress from 0 to 1 as next section enters viewport
      const distanceToNext = nextTop - containerBottom
      const maxDistance = windowHeight
      
      const progress = Math.max(0, Math.min(1, 1 - distanceToNext / maxDistance))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [nextSectionRef])

  return (
    <motion.div
      ref={containerRef}
      id={sectionId}
      className="relative"
      style={{
        opacity: motion.useMotionValue(1 - scrollProgress * 0.02),
      }}
    >
      {children}
      
      {/* Scroll peek indicator - very subtle */}
      {scrollProgress > 0 && nextSectionRef?.current && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#525252] to-transparent"
          animate={{
            opacity: scrollProgress * 0.5,
            scaleX: scrollProgress,
          }}
          transition={{ duration: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </motion.div>
  )
}
