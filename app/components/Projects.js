"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, details, tags, link, github, image, isVisible, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] w-full shadow-2xl shadow-black/50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: 'opacity 1.2s ease, transform 1.2s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms'
      }}
    >
      {/* Project Image */}
      <div className="relative h-32 sm:h-40 md:h-24 w-full overflow-hidden bg-background/5 p-4 md:p-2 border-b border-border/50">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-base md:text-lg font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors tracking-tight font-heading">{title}</h3>
        
        <div className="min-h-[60px] md:min-h-[48px] mb-4 md:mb-6">
          {showDetails ? (
            <p className="text-muted-foreground leading-relaxed text-xs md:text-sm animate-in fade-in slide-in-from-top-2 duration-300 font-medium">
              {details}
            </p>
          ) : (
            <p className="text-muted-foreground/80 leading-relaxed text-xs md:text-sm line-clamp-2 md:line-clamp-2 font-medium">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="px-2 py-0.5 bg-accent border border-border rounded-[var(--radius)] text-[8px] font-bold text-accent-foreground uppercase tracking-wider font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-border/50 pt-3">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center text-primary font-black text-xs hover:gap-1.5 transition-all uppercase tracking-widest font-sans"
          >
            {showDetails ? "Hide" : "Details"}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ml-1.5 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="flex items-center space-x-3">
            <a 
                href={link} 
                className="text-muted-foreground/60 hover:text-primary transition-colors"
                title="Live Preview"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-[var(--radius)] bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              title="GitHub Repository"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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

  const projectList = [
    {
      title: "Portfolio Website",
      description: "A premium, high-performance portfolio showcasing identity and skills with a unique hexagon grid.",
      details: "Built with Next.js and Tailwind CSS, this portfolio features a fully responsive design, dark/light mode, and smooth scroll animations. It uses the App Router and is optimized for performance and SEO.",
      tags: ["Html5", "CSS3", "Javascript"],
      link: "#",
      github: "https://github.com/vedikabisht27/portfolio",
      image: "/projects/portfolio.png",
    },
    {
      title: "Notes Saver App",
      description: "Secure and interactive cloud-based application for managing thoughts and daily tasks.",
      details: "A robust React application with multi-user support (context API), local storage persistence, and a beautiful grid layout. Features include searching, filtering by color, and rich text editing.",
      tags: ["React.js", "Context API"],
      link: "#",
      github: "https://github.com/vedikabisht27/Notes-app",
      image: "/projects/notes.png",
    },
    {
      title: "To-Do List App",
      description: "Minimalist task manager with persistent storage and dynamic filtering features.",
      details: "A clean and functional task manager built with vanilla JavaScript. It offers task persistence, drag-and-drop ordering, and category-based filtering to help you stay organized.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      link: "#",
      github: "https://github.com/vedikabisht27/To-Do-List",
      image: "/projects/todo.png",
    },
    {
      title: "Jarvis AI Assistant",
      description: "Sophisticated voice-activated AI utilizing advanced speech recognition and Python automation.",
      details: "A Python-powered desktop assistant that uses speech recognition and NLP to perform tasks like opening apps, searching the web, and controlling system settings via voice commands.",
      tags: ["Python", "PyAudio", "NLP"],
      link: "#",
      github: "https://github.com/vedikabisht27/jarvis-assistant",
      image: "/projects/jarvis.png",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="theme-transition flex flex-col items-center justify-center relative gap-12 md:gap-20"
    >
      <div 
        id="projects"
        className="content-container relative z-10 text-center scroll-mt-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease'
        }}
      >
        <h2 className="font-black text-3xl md:text-5xl mb-6 tracking-tighter uppercase font-heading">Featured <span className="text-primary italic">Work</span></h2>
        <div className="flex items-center justify-center space-x-3">
            <div className="h-[1px] w-8 bg-primary/30"></div>
            <p className="text-foreground/40 font-bold uppercase tracking-[0.4em] text-[9px] font-body">
              SHOWCASING CREATIVITY
            </p>
            <div className="h-[1px] w-8 bg-primary/30"></div>
        </div>
      </div>
      
      <div 
        className="content-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s ease',
          transitionDelay: '300ms'
        }}
      >
        {projectList.map((project, idx) => (
          <ProjectCard 
            key={idx} 
            index={idx}
            isVisible={isVisible}
            {...project} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
