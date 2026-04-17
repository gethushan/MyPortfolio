"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

//its a comment
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [overIframe, setOverIframe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const rafRef = useRef<number | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile || !isHydrated) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cache DOM queries - don't requery on every mutation
    let cachedLinks: Set<Element> = new Set();
    let cachedIframes: Set<Element> = new Set();

    const attachLinkListeners = (el: Element) => {
      el.addEventListener("mouseenter", () => setLinkHovered(true), {
        passive: true,
      });
      el.addEventListener("mouseleave", () => setLinkHovered(false), {
        passive: true,
      });
    };

    const attachIframeListeners = (el: Element) => {
      el.addEventListener("mouseenter", () => setOverIframe(true), {
        passive: true,
      });
      el.addEventListener("mouseleave", () => setOverIframe(false), {
        passive: true,
      });
    };

    const handleLinkHoverEvents = () => {
      const newLinks = document.querySelectorAll(
        "a, button, input, textarea, [role='button']",
      );
      newLinks.forEach((el) => {
        if (!cachedLinks.has(el)) {
          attachLinkListeners(el);
          cachedLinks.add(el);
        }
      });
    };

    const handleIframeHoverEvents = () => {
      const newIframes = document.querySelectorAll(".spotify-popup, iframe");
      newIframes.forEach((el) => {
        if (!cachedIframes.has(el)) {
          attachIframeListeners(el);
          cachedIframes.add(el);
        }
      });
    };

    handleLinkHoverEvents();
    handleIframeHoverEvents();

    observerRef.current = new MutationObserver(() => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        handleLinkHoverEvents();
        handleIframeHoverEvents();
      }, 500);
    });
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observerRef.current?.disconnect();
    };
  }, [isMobile, isHydrated]);

  if (!isHydrated || isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : linkHovered ? 2 : 1,
          opacity: hidden || overIframe ? 0 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.15,
          stiffness: 1000,
          damping: 35,
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.5 : linkHovered ? 1.5 : 1,
          opacity: hidden || overIframe ? 0 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 300,
          damping: 30,
        }}
      />
    </>
  );
}
