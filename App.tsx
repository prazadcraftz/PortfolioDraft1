
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Certifications from './components/Certifications.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Concepts from './components/Concepts.tsx';
import Contact from './components/Contact.tsx';
import Background from './components/Background.tsx';
import TaglineSection from './components/TaglineSection.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen bg-[#121212] selection:bg-white/20">
      <Background />
      
      <Navbar isOpen={isMenuOpen} onToggle={toggleMenu} />

      <main className={`transition-all duration-500 ${isMenuOpen ? 'blur-md opacity-30 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <section id="hero">
          <Hero />
        </section>

        {/* High Impact Tagline Section */}
        <TaglineSection />
        
        <div className="max-w-6xl mx-auto px-6 space-y-32 pb-32 pt-32">
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="concepts">
            <Concepts />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <footer className="text-center py-8 text-neutral-500 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Dasari Bhanu Prasad. Built with Passion & Precision.</p>
      </footer>
    </div>
  );
};

export default App;
