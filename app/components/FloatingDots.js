"use client";
import { useEffect, useRef } from "react";

const FloatingDots = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { x, y } = mouse.current;
      if (x !== -1000) {
        const isDark = document.documentElement.classList.contains('dark');
        const glowColor = "34, 211, 238"; // --primary RGB (Cyan)
        
        // Create a large, soft radial gradient centered at the mouse
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 450);
        
        // "Remove the inner dot" - starting with a low alpha and tapering off
        gradient.addColorStop(0, `rgba(${glowColor}, 0.12)`);
        gradient.addColorStop(0.4, `rgba(${glowColor}, 0.04)`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = isDark ? "screen" : "multiply"; // Adjust blend mode for mode
        
        // We only draw the gradient area to be efficient, though fillRect(0,0,w,h) is fine too
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.globalCompositeOperation = "source-over"; // Reset
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 1 }}
    />
  );
};

export default FloatingDots;
