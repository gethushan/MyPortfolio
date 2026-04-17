"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProject } from "@/components/featured-project-section";
import { AboutSection } from "@/components/about-section";
import { WorkSection } from "@/components/work-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  SmoothScrollProvider,
  SectionTransition,
} from "@/components/smooth-scroll-provider";

export default function Home() {
  const featuredRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  return (
    <>
      <Navbar />
      <SmoothScrollProvider>
        <motion.main
          className="min-h-screen relative w-full overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }}
        >
          {/* Spacer for fixed navbar */}
          <div className="h-14 md:h-16" />

          {/* Full-width container with centered content and side lines */}
          <div className="relative w-full">
            {/* Left border line */}
            <div
              className="absolute left-[calc(50%-300px)] sm:left-[calc(50%-350px)] md:left-[calc(50%-450px)] top-0 w-px bg-[#2a2a2a] hidden md:block pointer-events-none"
              aria-hidden="true"
              style={{ height: "100%" }}
            />
            {/* Right border line */}
            <div
              className="absolute left-[calc(50%+300px)] sm:left-[calc(50%+350px)] md:left-[calc(50%+450px)] top-0 w-px bg-[#2a2a2a] hidden md:block pointer-events-none"
              aria-hidden="true"
              style={{ height: "100%" }}
            />

            {/* Centered content container with scroll preview effect */}
            <div className="grid-container scroll-preview-container">
              <section
                id="hero"
                aria-label="Hero section"
                className="scroll-section"
              >
                <SectionTransition id="hero">
                  <HeroSection />
                </SectionTransition>
              </section>

              <section id="about" aria-label="About" className="scroll-section">
                <SectionTransition id="about">
                  <AboutSection />
                </SectionTransition>
              </section>

              <section
                id="featured"
                ref={featuredRef}
                aria-label="Featured project"
                className="scroll-section"
              >
                <SectionTransition id="featured">
                  <FeaturedProject />
                </SectionTransition>
              </section>

              <section
                id="work"
                ref={workRef}
                aria-label="Work and experiments"
                className="scroll-section"
              >
                <SectionTransition id="work">
                  <WorkSection />
                </SectionTransition>
              </section>

              <section
                id="education"
                aria-label="Education"
                className="scroll-section"
              >
                <SectionTransition id="education">
                  <EducationSection />
                </SectionTransition>
              </section>

              <section
                id="across-the-web"
                ref={contactRef}
                aria-label="Elsewhere and contact"
                className="scroll-section"
              >
                <SectionTransition id="across-the-web">
                  <ContactSection />
                </SectionTransition>
              </section>

              <footer ref={footerRef} className="scroll-section">
                <Footer />
              </footer>
            </div>
          </div>
        </motion.main>
      </SmoothScrollProvider>
    </>
  );
}
