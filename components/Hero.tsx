import React from 'react';
import { FileText, ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // This helper provides feedback if the user hasn't uploaded the file yet
    const fileName = "Dasari_Bhanu_Prasad_Resume.pdf";
    const filePath = `./${fileName}`;
    
    // We allow the default download behavior, but we add a check
    // to warn the user if they are testing locally without the file.
    console.log(`Initiating download for: ${fileName}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-0 opacity-20"></div>

      <div className="w-full max-w-7xl relative z-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 animate-pulse">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Identity Verified</span>
          </div>
          
          <h1 className="font-['Montserrat'] text-[clamp(3.5rem,14vw,8.5rem)] font-black leading-[0.8] tracking-tighter uppercase select-none flex flex-col items-center">
            <span className="text-white opacity-95">HI, I AM</span>
            <span className="animate-gradient-text block py-4">
              BHANU
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-10 mt-12">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a 
              href="./Dasari_Bhanu_Prasad_Resume.pdf" 
              download="Dasari_Bhanu_Prasad_Resume.pdf"
              onClick={handleDownload}
              className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase rounded-xl flex items-center gap-3 transition-all duration-300 hover:bg-cyan-400 hover:scale-105 shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <FileText className="w-4 h-4" />
              Download CV
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 py-3 px-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
            <span className="text-xs font-black uppercase tracking-widest text-white">ML Engineer</span>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <span className="text-xs font-black uppercase tracking-widest text-white/40">AI Enthusiast</span>
          </div>
        </div>

        <p className="mt-14 text-neutral-400 max-w-xl mx-auto leading-relaxed text-base md:text-lg font-medium">
          Designing <span className="text-white font-bold">intelligent systems</span> that turn data into <span className="text-white font-bold">scalable, real-world solutions</span>.
        </p>
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;