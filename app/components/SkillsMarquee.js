"use client";
import { useState, useEffect, useRef } from "react";

const SkillIcon = ({ name, icon, color, style }) => (
  <div 
    className="absolute flex flex-col items-center justify-center min-w-[100px] md:min-w-[130px] p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 shrink-0 cursor-pointer group/icon backface-hidden"
    style={style}
  >
    <div className={`w-10 h-10 md:w-12 md:h-12 mb-3 flex items-center justify-center transition-all duration-500 group-hover/icon:scale-110 ${color || 'text-foreground group-hover/icon:text-primary'}`}>
      {icon}
    </div>
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover/icon:text-primary transition-colors text-center whitespace-nowrap font-mono">
      {name}
    </span>
  </div>
);

const Icons = {
  C: (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c2.36 0 4.5.99 6.02 2.57l-1.44 1.44A5.96 5.96 0 0012 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.16-.68 4.24-1.76l1.44 1.44A7.956 7.956 0 0112 20z"/>
    <text x="12" y="15.5" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor">C</text>
  </svg>
),
  Python: (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.034v-2.868s-.109-3.403 3.347-3.403h5.768s3.24.052 3.24-3.131V3.19S18.28 0 11.914 0zm-3.21 1.839a1.047 1.047 0 110 2.094 1.047 1.047 0 010-2.094z"/>
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.034v2.868s.109 3.403-3.347 3.403h-5.768s-3.24-.052-3.24 3.131v5.309S5.72 24 12.086 24zm3.21-1.839a1.047 1.047 0 110-2.094 1.047 1.047 0 010 2.094z"/>
  </svg>
),
  JS: (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <text x="2" y="19" fontSize="11" fontWeight="bold" fill="#000" fontFamily="Arial, sans-serif">JS</text>
  </svg>
),
  HTML: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.475.753-8.126H8.531z" fillOpacity="0.4" />
      <text x="12" y="16.5" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">5</text>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.475.753-8.126H8.531z" fillOpacity="0.4" />
      <text x="12" y="16.5" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">3</text>
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.18 5.79c-.58-.58-1.41-.85-2.28-.85H8.38c-.87 0-1.7.27-2.28.85-.58.58-.85 1.41-.85 2.28v7.86c0 .87.27 1.7.85 2.28s1.41.85 2.28.85h7.52c.87 0 1.7-.27 2.28-.85s.85-1.41.85-2.28V8.07c0-.87-.27-1.7-.85-2.28zM14.65 14.8c-.3.2-.7.3-1.1.3H9.9v-2.1h3.6c.4 0 .7.1 1 .2.3.1.5.3.6.5s.2.5.2.8c.1.4-.1.7-.2.9v-.6zm.5-4.2c-.2.2-.4.4-.7.5-.3.1-.6.1-1 .1H9.9V8.9h3.4c.4 0 .7.1 1 .2.3.1.5.3.6.5s.2.4.2.7c.1.3-.1.6-.3.8v-.5z"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.613 15.013 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.187 14.99 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.524 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.387 8.99 12 6.001 12z"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  MySQL: (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#4479A1"/>
    <text x="12" y="13" fontSize="5.5" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">My</text>
    <text x="12" y="19" fontSize="5.5" fontWeight="bold" fill="#F29111" textAnchor="middle" fontFamily="Arial, sans-serif">SQL</text>
  </svg>
),
  SQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 4 2 6.5s4.48 4.5 10 4.5 10-2 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2-10-4.5V18c0 2.5 4.48 4.5 10 4.5s10-2 10-4.5v-1.5c0 2.5-4.48 4.5-10 4.5zm0-9c-5.52 0-10-2-10-4.5V11c0 2.5 4.48 4.5 10 4.5s10-2 10-4.5V9c0 2.5-4.48 4.5-10 4.5z"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.9 2.433l2.557 2.557c.334-.117.726-.047 1.003.23.279.279.349.67.23 1.006l2.522 2.522c.337-.118.728-.048 1.006.23.391.391.391 1.023 0 1.414-.391.391-1.023.391-1.414 0-.278-.278-.348-.67-.23-1.006l-2.434-2.434V15.75c.118.337.048.728-.23 1.006-.391.391-1.023.391-1.414 0-.391-.391-.391-1.023 0-1.414.278-.278.67-.348 1.006-.23v-5.467l-2.522-2.522c-.337.118-.728.048-1.006-.23-.278-.278-.348-.67-.23-1.006l-2.557-2.557-5.06 5.061c-.604.603-.604 1.582 0 2.187l10.48 10.478c.604.604 1.582.604 2.187 0l10.478-10.48c.604-.603.604-1.582 0-2.187z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
),
  Canva: (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7B2FF7"/>
        <stop offset="100%" stopColor="#00C4CC"/>
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#canvaGrad)"/>
    <text x="12" y="15" fontSize="7" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Georgia, serif" fontStyle="italic">Canva</text>
  </svg>
),
  Word: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.189 4.314l-6.208 2.333V17.35l6.208 2.333V4.314z" />
      <path d="M0 6.784l6.208-1.4v13.232L0 17.216V6.784z" />
      <text x="3" y="14" fontSize="10" fontWeight="bold" fill="white">W</text>
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.189 4.314l-6.208 2.333V17.35l6.208 2.333V4.314z" />
      <path d="M0 6.784l6.208-1.4v13.232L0 17.216V6.784z" />
      <text x="3" y="14" fontSize="10" fontWeight="bold" fill="white">X</text>
    </svg>
  ),
  PPT: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.189 4.314l-6.208 2.333V17.35l6.208 2.333V4.314z" />
      <path d="M0 6.784l6.208-1.4v13.232L0 17.216V6.784z" />
      <text x="3" y="14" fontSize="10" fontWeight="bold" fill="white">P</text>
    </svg>
  ),
  GoogleSheets: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="20" rx="2" fill="#0F9D58"/>
      <path d="M14 2l6 6h-6V2z" fill="#B7E1CD"/>
      <rect x="7" y="11" width="10" height="2" fill="#FFFFFF"/>
      <rect x="7" y="15" width="10" height="2" fill="#FFFFFF"/>
    </svg>
  ),
};

const row1Skills = [
  { name: "C Language", icon: Icons.C, color: "text-[#A8B9CC]" },
  { name: "Python", icon: Icons.Python, color: "text-[#3776AB]" },
  { name: "JavaScript", icon: Icons.JS, color: "text-[#F7DF1E]" },
  { name: "HTML5", icon: Icons.HTML, color: "text-primary" },
  { name: "CSS3", icon: Icons.CSS, color: "text-secondary" },
  { name: "Bootstrap", icon: Icons.Bootstrap, color: "text-primary" },
  { name: "Tailwind CSS", icon: Icons.Tailwind, color: "text-secondary" },
  { name: "React.js", icon: Icons.React, color: "text-primary" },
  { name: "MySQL", icon: Icons.MySQL, color: "text-secondary" },
];

const row2Skills = [
  { name: "SQL", icon: Icons.SQL, color: "text-primary" },
  { name: "Git", icon: Icons.Git, color: "text-secondary" },
  { name: "GitHub", icon: Icons.GitHub, color: "text-primary" },
  { name: "Canva", icon: Icons.Canva, color: "text-secondary" },
  { name: "MS Word", icon: Icons.Word, color: "text-primary" },
  { name: "MS Excel", icon: Icons.Excel, color: "text-secondary" },
  { name: "MS PowerPoint", icon: Icons.PPT, color: "text-primary" },
  { name: "Google Sheets", icon: Icons.GoogleSheets, color: "text-secondary" },
];

const ThreeDRing = ({ skills, rotationSpeed, radius = 350, reverse = false }) => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused, rotationSpeed]);

  const itemCount = skills.length;

  return (
    <div 
      className="relative h-[280px] w-full flex items-center justify-center preserve-3d"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {skills.map((skill, idx) => {
        const angle = (idx / itemCount) * 360;
        const currentRotation = reverse ? (360 - rotation + angle) % 360 : (rotation + angle) % 360;
        
        const cos = Math.cos((currentRotation * Math.PI) / 180);
        const sin = Math.sin((currentRotation * Math.PI) / 180);
        
        return (
          <SkillIcon 
            key={idx} 
            {...skill} 
            style={{
              transform: `translate3d(${sin * radius}px, 0, ${cos * radius}px)`,
              opacity: cos > -0.5 ? 1 : 0.1,
              zIndex: Math.round(cos * 100),
              scale: 0.8 + (cos + 1) * 0.2,
              pointerEvents: cos > 0 ? "auto" : "none",
              transition: "opacity 0.5s ease, transform 0.1s linear, scale 0.5s ease"
            }}
          />
        );
      })}
    </div>
  );
};

const SkillsMarquee = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [radius, setRadius] = useState(260);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(140);
      else if (width < 768) setRadius(180);
      else if (width < 1024) setRadius(220);
      else setRadius(260);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="theme-transition overflow-hidden flex flex-col items-center justify-center relative perspective-2000 gap-12 md:gap-20">
      <div 
        id="skills"
        className="content-container relative z-10 text-center scroll-mt-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease'
        }}
      >
        <h2 className="text-heading font-black text-3xl md:text-5xl mb-6 tracking-tighter uppercase">Technical Expertise</h2>
        <div className="flex items-center justify-center space-x-3">
            <div className="h-[1px] w-8 bg-primary/30"></div>
            <p className="text-foreground/40 font-bold uppercase tracking-[0.4em] text-[9px]">
              TECHNOLOGIES I WORK WITH
            </p>
            <div className="h-[1px] w-8 bg-primary/30"></div>
        </div>
      </div>

      <div 
        className="flex flex-col gap-12 md:gap-16 items-center justify-center min-h-[400px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease',
          transitionDelay: '300ms'
        }}
      >
        {mounted && (
          <>
            {/* Row 1: Clockwise */}
            <ThreeDRing skills={row1Skills} rotationSpeed={0.3} radius={radius} />
            
            {/* Row 2: Counter-Clockwise */}
            <ThreeDRing skills={row2Skills} rotationSpeed={0.3} radius={radius * 0.85} reverse={true} />
          </>
        )}
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full -z-0 pointer-events-none animate-pulse"></div>
    </section>
  );
};

export default SkillsMarquee;
