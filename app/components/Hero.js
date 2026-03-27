"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Aspiring Developer",
    "MCA Student",
    "Frontend Developer",
    "Quick Learner",
    "Creative Thinker",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, mounted]);

  const handleType = () => {
    const i = loopNum % titles.length;
    const fullText = titles[i];

    if (!isDeleting) {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(100);

      if (text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause at end
      }
    } else {
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(50);

      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#020617]" />;

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden bg-[#000103] text-white"
    >
      {/* --- Quantum Grid Effect --- */}
      <div className="absolute inset-0 z-0">
        {/* Base Background */}
        <div className="absolute inset-0 bg-[#000103]" />
        
        {/* Animated Grid Container */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-around">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-[1px] h-full bg-cyan-500/30"
                style={{ 
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)',
                  filter: 'blur(0.5px)' 
                }} 
              />
            ))}
          </div>
          
          {/* Horizontal Lines with Perspective Animation */}
          <motion.div 
            initial={{ translateY: '0%' }}
            animate={{ translateY: '50px' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex flex-col justify-around"
          >
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="h-[1px] w-full bg-cyan-500/20"
                style={{ 
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.1)',
                  filter: 'blur(0.5px)' 
                }} 
              />
            ))}
          </motion.div>

          {/* Perspective Plane (Bottom half gradient) */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none"
            style={{ 
              transform: 'rotateX(60deg) translateY(100px)',
              transformOrigin: 'bottom center'
            }}
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse delay-1000" />

        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* --- Content --- */}
      <div className="content-container relative z-10 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-black mb-6 tracking-tighter leading-[0.9] font-heading"
          style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            background: 'linear-gradient(to bottom, #fff 40%, rgba(255,255,255,0.3))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(34, 211, 238, 0.3)'
          }}
        >
          Vedika Bisht
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 font-bold tracking-tight font-heading flex items-center justify-center gap-2"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
        >
          <span className="text-white/60">I am </span>
          <span className="text-cyan-400 relative">
            {text}
            <span className="absolute -right-1 top-0 bottom-0 w-1 bg-cyan-400 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 font-medium max-w-2xl mx-auto mb-12 leading-relaxed font-body"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
        >
          Passionate MCA student and frontend developer dedicated to crafting immersive, 
          high-performance digital experiences with a clean, modern aesthetic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-cyan-500 text-black font-black rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-bold">Explore Projects</span>
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-cyan-500/30 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          {[
            { href: "https://github.com/bisht-v-001", title: "GitHub", icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            )},
            { href: "https://www.linkedin.com/in/vedika-bisht-a8b2732a3/", title: "LinkedIn", icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            )},
            { href: "mailto:bishtvedika0@gmail.com", title: "Email", icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )},
            { href: "/Vedika_Bisht_Resume.pdf", title: "Download Resume", download:"Vedika_Bisht_Resume.pdf", icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            )}
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Futuristic Background Elements */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <Cpu size={100} className="text-cyan-500" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <Globe size={100} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;
