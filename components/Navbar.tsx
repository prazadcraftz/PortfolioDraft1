
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Bento Trigger */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto">
          <span className="text-white">D</span>
          <span className="animate-gradient-text">B</span>
          <span className="text-white">P</span>
        </div>
        
        <button
          onClick={onToggle}
          className="p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all pointer-events-auto group"
          aria-label="Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
          ) : (
            <LayoutGrid className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 blur-2xl rounded-full transition-all duration-300"></span>
              {/* Dynamic Glow Line */}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-16 flex space-x-8">
          <SocialIcon icon={<Github />} href="https://github.com/prazadcraftz" />
          <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/dasaribhanuprasad/" />
          <SocialIcon icon={<Mail />} href="mailto:itsbhanudasari@gmail.com" />
        </div>
      </div>
    </>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-cyan-400 transition-all transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Navbar;
