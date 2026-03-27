"use client";
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section ref={sectionRef} className="theme-transition flex flex-col items-center justify-center gap-16 md:gap-24">
      <div id="about" className="content-container scroll-mt-20">
        <h2 
          className="text-foreground font-black text-center uppercase tracking-tighter"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
            transition: 'opacity 1.2s ease, transform 1.2s ease'
          }}
        >
          About <span className="text-primary italic">My Journey</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div 
            className="order-2 lg:order-1 relative group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'opacity 1.2s ease, transform 1.2s ease',
              transitionDelay: '200ms'
            }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-card p-8 md:p-12 rounded-3xl border border-border transition-all duration-500 hover:border-primary/30 shadow-2xl shadow-primary/5">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                I am a <span className="text-primary font-bold underline decoration-primary/30 decoration-8 underline-offset-8">detail-oriented</span> and quick-learning MCA student with a deep passion for modern tech and immersive architecture.
              </p>
              <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed italic border-l-4 border-primary pl-6 font-medium">
                "Building solutions that don't just work, but excel in performance and user experience."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {[
              { title: "Rapid Growth", desc: "A fast learner capable of mastering new frameworks and languages in record time." },
              { title: "Precision Focus", desc: "Committed to clean code, semantic HTML, and high-performance applications." },
              { title: "Problem Solver", desc: "Approaching challenges with a logical mindset to deliver scalable solutions." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-start space-x-4 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'opacity 1s ease, transform 1s ease',
                  transitionDelay: `${400 + i * 200}ms`
                }}
              >
                <div className="mt-1 w-12 h-12 rounded-[var(--radius)] bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0 border border-border shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-black text-foreground mb-1 tracking-tight font-sans">{item.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
