import React from 'react';
import { LayoutGrid, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onToggle }) => {
  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Concepts', href: '#concepts' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onToggle();
    // Small delay to allow menu closing animation to start before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[60] pointer-events-none">
        <div className="text-xl md:text-2xl font-black tracking-tighter pointer-events-auto">
          <span className="text-white">D</span>
          <span className="animate-gradient-text">B</span>
          <span className="text-white">P</span>
        </div>
        
        <button
          onClick={onToggle}
          className="p-3 md:p-4 pointer-events-auto backdrop-blur-xl rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all group shadow-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <LayoutGrid className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] bg-black/98 overflow-y-auto pt-32 pb-20 px-8 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 md:space-y-4 max-w-5xl mx-auto w-full">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="group relative w-full text-center py-1 md:py-2"
            >
              <span className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white/20 group-hover:text-white transition-all duration-500 block transform group-hover:scale-105">
                {item.label}
              </span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-white to-purple-500 transition-all duration-500 group-hover:w-32 opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-16 flex flex-col items-center gap-6">
          <div className="flex space-x-6 md:space-x-8">
            <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com/prazadcraftz" label="GitHub" />
            <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/dasaribhanuprasad/" label="LinkedIn" />
            <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:itsbhanudasari@gmail.com" label="Email" />
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10">
            Navigation Console v1.0
          </p>
        </div>
      </div>
    </>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string; label: string }> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-1.5 group"
    aria-label={label}
  >
    <div className="p-3.5 rounded-xl bg-white/5 text-white/30 border border-white/5 group-hover:bg-white/10 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all transform group-hover:-translate-y-1.5">
      {icon}
    </div>
    <span className="text-[8px] font-black uppercase tracking-widest text-white/10 group-hover:text-white transition-colors">{label}</span>
  </a>
);

export default Navbar;