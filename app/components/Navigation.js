"use client";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark theme for Quantum Grid experience
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    // Theme is locked to dark/quantum for consistency as requested
    console.log("Quantum theme is active.");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
   
  ];

  if (!mounted) return null;

  const navbarStyles = {
    background: isScrolled ? "rgba(2, 6, 23, 0.8)" : "rgba(2, 6, 23, 0.4)",
    border: "1px solid rgba(34, 211, 238, 0.2)",
    boxShadow: isScrolled ? "0 8px 32px rgba(34, 211, 238, 0.1)" : "none",
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] transition-all duration-300">
      <div 
        style={navbarStyles}
        className="backdrop-blur-[20px] rounded-full px-6 py-3 flex items-center justify-between relative"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-tighter text-primary font-heading transition-transform group-hover:scale-110">
            VB
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-foreground hover:text-primary transition-colors font-body uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <a 
            href="#contact"
            className="hidden md:block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-widest hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.05)]"
          >
            Contact
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors text-primary"
            aria-label="Toggle Mobile Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div 
            style={navbarStyles}
            className="absolute top-full left-0 right-0 mt-4 backdrop-blur-[20px] rounded-3xl overflow-hidden flex flex-col p-4 space-y-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-foreground hover:text-primary transition-colors font-body uppercase tracking-widest px-4 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
