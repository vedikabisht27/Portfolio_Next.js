"use client";

import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "-50px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    { 
      label: "Email", 
      value: "vedikabisht27@gmail.com", 
      icon: "📧",
      link: "mailto:vedikabisht27@gmail.com" 
    },
    { 
      label: "Phone", 
      value: "+91 9149203604", 
      icon: "📱",
      link: "tel:+919149203604" 
    },
    { 
      label: "LinkedIn", 
      value: "https://www.linkedin.com/in/Vedika-Bisht/", 
      icon: "🔗",
      link: "https://www.linkedin.com/in/Vedika-Bisht/" 
    },
    { 
      label: "GitHub", 
      value: "https://github.com/vedikabisht27", 
      icon: "💻",
      link: "https://github.com/vedikabisht27" 
    }
  ];

  return (
    <section ref={sectionRef} className="theme-transition flex flex-col items-center justify-center relative gap-16 md:gap-24">
      <div 
        id="contact"
        className="content-container relative z-10 text-center scroll-mt-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease'
        }}
      >
        <h2 className="text-foreground font-black text-4xl md:text-6xl mb-6 tracking-tighter uppercase font-sans">Get In <span className="text-primary italic font-serif">Touch</span></h2>
        <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="h-[1px] w-10 bg-primary/30"></div>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.4em] text-[10px]">
              LET'S COLLABORATE
            </p>
            <div className="h-[1px] w-10 bg-primary/30"></div>
        </div>

        {/* New Animated Subline */}
        <p 
          className="text-primary font-black uppercase tracking-[0.2em] text-[11px] md:text-sm bg-primary/5 py-2 px-4 rounded-[var(--radius)] inline-block font-mono"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '400ms'
          }}
        >
          Connect with me via email or phone
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease',
            transitionDelay: '600ms'
          }}
        >
          {contactInfo.map((info, idx) => (
            <a 
              key={idx} 
              href={info.link} 
              target={info.label === "Email" || info.label === "Phone" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center space-x-6 p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group shadow-2xl shadow-black/40"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform text-primary border border-primary/20">
                {info.icon}
              </div>
              <div className="overflow-hidden">
                <p className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 font-mono">{info.label}</p>
                <p className="text-foreground font-bold text-sm md:text-base leading-tight group-hover:text-primary transition-colors truncate">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="pb-10 text-center text-muted-foreground text-[9px] md:text-xs font-black tracking-tight font-sans"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease',
          transitionDelay: '800ms'
        }}
      >
        <div className="mb-4 flex justify-center items-center space-x-3">
            <div className="w-6 md:w-10 h-[1px] bg-border"></div>
            <p className="uppercase tracking-[0.2em] font-bold">© 2026 Vedika Bisht</p>
            <div className="w-6 md:w-10 h-[1px] bg-border"></div>
        </div>
        
      </footer>
    </section>
  );
};

export default Contact;
