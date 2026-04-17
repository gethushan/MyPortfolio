"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio";

export const HeroSection = () => {
  const hero = portfolioData.hero;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.2, 0, 0.38, 0.9],
      },
    },
  };

  return (
    <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-20 relative">
      <div className="px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-normal text-[#fafafa] text-pretty">
              {hero.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <p className="text-base md:text-lg text-[#a1a1a1] max-w-2xl leading-relaxed text-balance">
              {hero.intro} {hero.rolesPrefix}{" "}
              {hero.roles.map((role, index) => (
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
                  {index < hero.roles.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.15,
            ease: [0.2, 0, 0.38, 0.9],
          }}
          className="mt-8 md:mt-12 flex items-center gap-3"
        >
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#636363] rounded-full" />
          <div className="w-16 md:w-20 h-px bg-[#333]" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#4a4a4a] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
