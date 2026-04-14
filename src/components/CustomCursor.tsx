"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isInteractive = target.closest("a, button, [role='button'], .cursor-pointer, h1, h2, h3, h4, h5, h6") !== null;

      if (isInteractive) {
        setIsHovering(true);
        document.body.style.cursor = "pointer";
      } else {
        setIsHovering(false);
        document.body.style.cursor = "none";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Initial enforce
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        /* Hide all default cursors unless it's explicitly an interactive element we're hovering */
        *:not(:is(a, button, [role="button"], .cursor-pointer, h1, h2, h3, h4, h5, h6)) {
          cursor: none;
        }
        
        /* Ensure interactive elements ALWAYS display the classic hand pointer */
        :is(a, button, [role="button"], .cursor-pointer, h1, h2, h3, h4, h5, h6) {
          cursor: pointer !important;
        }
      `}</style>
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: isHovering ? "normal" : "difference",
          backdropFilter: isHovering ? "invert(0.9) hue-rotate(210deg)" : "none",
          WebkitBackdropFilter: isHovering ? "invert(0.9) hue-rotate(210deg)" : "none",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: "rgba(255, 255, 255, 0)",
          border: isHovering ? "0px solid rgba(255, 255, 255, 0)" : "1px solid rgba(255, 255, 255, 0.25)",
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 200, damping: 30 },
          border: { duration: 0.2 }
        }}
      />
    </>
  );
}
