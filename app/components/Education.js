"use client";

import { useEffect, useRef, useState } from 'react';

const EducationItem = ({ degree, school, year, cgpa, isVisible, index }) => {
  return (
    <div 
      className="relative pl-8 md:pl-10 pb-6 md:pb-8 last:pb-0 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        transition: 'opacity 1.2s ease, transform 1.2s ease',
        transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms'
      }}
    >
      <div className="absolute left-0 top-0 w-[2px] h-full bg-primary/20 group-last:h-0 shadow-[0_0_10px_rgba(34,211,238,0.1)]"></div>
      <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-125 transition-transform"></div>
      <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-2xl shadow-black/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2 md:mb-4">
          <span className="px-3 py-1 bg-accent rounded-full text-accent-foreground text-[9px] font-black uppercase tracking-widest border border-border inline-block font-mono">
            {year}
          </span>
          {cgpa && <div className="text-primary font-black text-sm md:text-base font-mono">CGPA: {cgpa}</div>}
        </div>
        <h3 className="text-lg md:text-xl font-black text-foreground mb-1 md:mb-2 tracking-tight font-sans">{degree}</h3>
        <p className="text-sm md:text-base text-muted-foreground font-medium">{school}</p>
      </div>
    </div>
  );
};

const Education = () => {
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

  const educationList = [
    {
      degree: "MCA (Master of Computer Applications)",
      school: "Amrapali University",
      year: "2024–PRESENT",
      cgpa: "8.71",
    },
    {
      degree: "B.Sc (Bachelor of Science)",
      school: "Kumaun University",
      year: "2020–2023",
      cgpa: "7.8",
    },
    {
      degree: "12th Science",
      school: "The Heritage School",
      year: "2019–2020",
      cgpa: "8.2",
    },
  ];

  return (
    <section ref={sectionRef} className="theme-transition flex flex-col items-center justify-center relative gap-16 md:gap-24">
      <div 
        id="education"
        className="content-container relative z-10 text-center scroll-mt-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease'
        }}
      >
        <h2 className="text-heading font-black text-3xl md:text-5xl mb-6 tracking-tighter uppercase">Academic <span className="text-primary italic">Background</span></h2>
        <div className="flex items-center justify-center space-x-3">
            <div className="h-[1px] w-8 bg-primary/30"></div>
            <p className="text-foreground/40 font-bold uppercase tracking-[0.4em] text-[9px]">
              EDUCATIONAL JOURNEY
            </p>
            <div className="h-[1px] w-8 bg-primary/30"></div>
        </div>
      </div>
      
      <div 
        className="max-w-3xl mx-auto px-6 w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease',
          transitionDelay: '300ms'
        }}
      >
        {educationList.map((edu, idx) => (
          <EducationItem 
            key={idx} 
            index={idx}
            isVisible={isVisible}
            {...edu} 
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
