
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="max-w-5xl">
        {/* Main Branding Header */}
        <h1 className="font-['Montserrat'] text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter text-white mb-8 uppercase select-none">
          HI, I AM <br />
          <span className="animate-gradient-text inline-block">
            BHANU
          </span>
        </h1>

        {/* Roles / Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <div className="px-8 py-3 bg-white text-black font-black text-sm uppercase rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            ML Engineer
          </div>
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
          <div className="px-8 py-3 border border-white/20 text-white font-bold text-sm uppercase rounded-full backdrop-blur-sm hover:bg-white/5 transition-colors">
            Gamer
          </div>
        </div>

        {/* Sub-headline */}
        <p className="mt-14 text-neutral-400 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
          Merging the world of Machine Learning with high-performance computing. 
          Driven by data, inspired by gaming tech.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-white via-white/20 to-transparent rounded-full overflow-hidden">
          <div className="w-full h-full bg-white animate-[scroll-reveal_2s_ease-in-out_infinite] origin-top"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
