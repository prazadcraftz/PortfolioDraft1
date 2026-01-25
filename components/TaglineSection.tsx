
import React, { useEffect, useRef, useState } from 'react';

const TaglineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate overall progress through the container
      const startTrigger = windowHeight;
      const endTrigger = -rect.height;
      const currentPos = rect.top;
      
      let progress = (startTrigger - currentPos) / (startTrigger - endTrigger);
      
      // Reverted to 3.0 multiplier for smoother, more relaxed scroll speed
      const activeWindow = Math.max(0, Math.min(1, (progress - 0.15) * 3.0));
      setScrollProgress(activeWindow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phrases = [
    "TRAIN.",
    "TEST.",
    "TRANSFORM."
  ];

  // Helper to calculate staggered progress per line
  const getLineProgress = (index: number) => {
    const stagger = 0.15; 
    const duration = 0.4; 
    
    const start = index * stagger;
    const end = start + duration;
    
    const lineRaw = (scrollProgress - start) / (end - start);
    return Math.max(0, Math.min(1, lineRaw));
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[120vh] bg-[#0a0a0a] overflow-visible"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Environmental Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-red-900/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
          {phrases.map((phrase, idx) => {
            const lp = getLineProgress(idx);
            // Reverted to 0.8 power curve for smoother visual fill
            const easedLp = lp === 1 ? 1 : lp === 0 ? 0 : Math.pow(lp, 0.8);
            
            return (
              <div key={idx} className="relative mb-3 md:mb-5 group w-full flex justify-center">
                {/* Base Layer (Inactive - Deep Dark) */}
                <h2 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase text-[#121212] select-none whitespace-nowrap transition-colors duration-500">
                  {phrase}
                </h2>
                
                {/* Reveal Layer (Active - Vibrant White) */}
                <h2 
                  className="absolute top-0 text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase text-white select-none whitespace-nowrap"
                  style={{ 
                    clipPath: `inset(0 ${100 - (easedLp * 100)}% 0 0)`,
                    transition: 'clip-path 0.15s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                  }}
                >
                  {phrase}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Floating Tagline */}
        <div 
          className="mt-16 flex flex-col items-center gap-4 transition-all duration-500 ease-out"
          style={{ 
            opacity: scrollProgress > 0.85 ? 1 : 0,
            transform: `translateY(${scrollProgress > 0.85 ? 0 : 20}px)`
          }}
        >
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <p className="text-cyan-400 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs text-center">
            Evolution through Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
