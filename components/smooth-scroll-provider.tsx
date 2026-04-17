"use client"

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

type ScrollContextType = {
  currentSection: string
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider")
  }
  return context
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState("hero")
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastSectionRef = useRef("hero")

  useEffect(() => {
    const sections = ["hero", "work", "across-the-web"]

    const observer = new IntersectionObserver(
      (entries) => {
        let newSection = lastSectionRef.current

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            const id = entry.target.id
            if (sections.includes(id)) {
              newSection = id
            }
          }
        })

        if (newSection !== lastSectionRef.current) {
          if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current)
          }

          debounceTimerRef.current = setTimeout(() => {
            lastSectionRef.current = newSection
            setCurrentSection(newSection)
          }, 150)
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0.1, 0.2, 0.5],
      },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return <ScrollContext.Provider value={{ currentSection }}>{children}</ScrollContext.Provider>
}

export function SectionTransition({ children, id }: { children: ReactNode; id: string }) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener("resize", checkMobile)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    mediaQuery.addEventListener("change", checkReducedMotion)
    
    return () => {
      window.removeEventListener("resize", checkMobile)
      mediaQuery.removeEventListener("change", checkReducedMotion)
    }
  }, [])

  const isInView = useInView(ref, {
    margin: "0px 0px -20% 0px",
    once: true,
    amount: 0.05,
  })

  // Snappy easing curve - unified approach, no competing animations
  const easing = [0.2, 0, 0.38, 0.9]
  
  if (prefersReducedMotion) {
    return (
      <div ref={ref} style={{ opacity: 1 }}>
        {children}
      </div>
    )
  }

  // Simple, unified animation - no competing transitions or useSpring
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.98 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: isMobile ? 0.12 : 0.15, 
        ease: easing 
      }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  )
}
