"use client";

import { useEffect, useRef, useState } from 'react';

const CertificateCard = ({ title, issuer, skills, isVisible, index }) => {
  return (
    <div 
      className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center group shadow-2xl shadow-black/30 relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1.2s ease, transform 1.2s ease',
        transitionDelay: isVisible ? `${300 + index * 150}ms` : '0ms'
      }}
    >
      <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-[var(--radius)] flex items-center justify-center mb-3 md:mb-5 text-accent-foreground border border-border group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3 className="font-bold text-foreground text-base md:text-lg mb-1 md:mb-2 tracking-tight font-sans">{title}</h3>
      <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-widest leading-loose font-mono">
        {issuer}
      </p>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-xl flex flex-col items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-primary/20">
        <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4 font-sans">Skills Gained</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {skills && skills.map((skill, sIdx) => (
            <span key={sIdx} className="px-3 py-1 bg-accent rounded-[var(--radius)] text-[9px] font-bold text-accent-foreground border border-border uppercase tracking-widest font-mono">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    { title: "Web Development", issuer: "Alison (CPD Certified)", skills: ["HTML", "CSS", "JavaScript"] },
    { title: "Programming with Python", issuer: "Simplilearn SkillUp", skills: ["Python 3.X", "Functions", "OOP", "File Handling", "Exception Handling", "Modules"] },
    { title: "Git & GitHub Bootcamp", issuer: "LetsUpgrade × NSDC", skills: ["Git", "GitHub", "Version Control", "Branching"] },
    { title: "Introduction to Generative AI", issuer: "Google Cloud × Simplilearn SkillUp", skills: ["Generative AI", "LLMs", "Prompt Engineering", "Google AI"] },
  ];

  return (
    <section ref={sectionRef} className="theme-transition flex flex-col items-center justify-center gap-16 md:gap-24">
      <div className="content-container">
        <div 
          id="certificates"
          className="text-center scroll-mt-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease'
          }}
        >
          <h2 className="text-heading font-black text-3xl md:text-5xl mb-6 tracking-tighter uppercase">Professional <span className="text-primary italic">Certifications</span></h2>
          <div className="flex items-center justify-center space-x-3">
            <div className="h-[1px] w-8 bg-primary/30"></div>
            <p className="text-foreground/40 font-bold uppercase tracking-[0.4em] text-[9px]">
              VALIDATED SKILLS
            </p>
            <div className="h-[1px] w-8 bg-primary/30"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, idx) => (
            <CertificateCard key={idx} index={idx} isVisible={isVisible} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
