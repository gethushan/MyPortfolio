"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentSection?: string;
  navItems: Array<{ name: string; href: string; id: string }>;
}

export function MobileMenu({
  isOpen,
  onClose,
  currentSection = "featured",
  navItems,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] isolate">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
            onClick={onClose}
            style={{ zIndex: 1 }}
          />

          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-black border-l border-[#222] flex flex-col h-full"
            style={{ zIndex: 2, willChange: "transform" }}
          >
            <div className="flex justify-between items-center p-3 border-b border-[#222]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-px bg-[#333]" />
                <span className="text-mono text-[#444]">menu</span>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 flex items-center justify-center border border-[#222] hover:border-[#333] text-[#666] hover:text-[#ededed] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6">
              <nav className="flex flex-col px-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-3 py-3 border-b border-[#1a1a1a] ${
                      currentSection === item.id
                        ? "text-[#ededed]"
                        : "text-[#666] hover:text-[#ededed]"
                    } transition-colors duration-300`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="text-large">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-[#222] p-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#333] rounded-full" />
                <span className="text-mono text-[#444]">
                  &copy; {new Date().getFullYear()}
                </span>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
