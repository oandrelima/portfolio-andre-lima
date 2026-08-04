"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement;

      if (cursorTarget) {
        setIsHovered(true);
        setHoverText(cursorTarget.getAttribute("data-cursor") || "VIEW");
      } else if (target.closest("a, button, [role='button']")) {
        setIsHovered(true);
        setHoverText("");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? 0.4 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Trailing Ring / Expandable Bubble */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center text-[10px] font-bold tracking-widest text-white uppercase border border-white/30 backdrop-blur-[2px]"
        animate={{
          x: position.x - (isHovered ? 40 : 18),
          y: position.y - (isHovered ? 40 : 18),
          width: isHovered ? 80 : 36,
          height: isHovered ? 80 : 36,
          backgroundColor: isHovered ? "rgba(226, 36, 39, 0.85)" : "rgba(255, 255, 255, 0.05)",
          borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-1 font-semibold"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

