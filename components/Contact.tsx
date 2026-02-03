import React from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative group">
      <div className="relative bg-[#080808] rounded-[3rem] p-10 md:p-16 border border-white/5 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              Initiate <br />
              <span className="animate-gradient-text italic">Contact</span>
            </h2>
            <p className="text-neutral-500 text-lg max-w-sm mb-12 leading-relaxed font-medium">
              Available for <span className="text-white">ML Research</span>, Internships, and Technical Collaborations.
            </p>

            <div className="space-y-4">
              <ContactInfo icon={<Mail className="w-4 h-4" />} label="Email Address" value="itsbhanudasari@gmail.com" href="mailto:itsbhanudasari@gmail.com" />
              <ContactInfo icon={<Linkedin className="w-4 h-4" />} label="LinkedIn Profile" value="/in/dasaribhanuprasad" href="https://www.linkedin.com/in/dasaribhanuprasad/" />
              <ContactInfo icon={<Github className="w-4 h-4" />} label="Github Repository" value="/prazadcraftz" href="https://github.com/prazadcraftz" />
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Your Name" placeholder="Bhanu Prasad" />
              <Input label="Your Email" placeholder="bhanu@example.com" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-baseline gap-2 ml-2">
                <label className="text-[10px] font-black text-white uppercase tracking-widest">Purpose</label>
              </div>
              <select className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 text-neutral-400 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none cursor-pointer">
                <option value="recruitment">Recruitment / Internship</option>
                <option value="research">ML Research Collaboration</option>
                <option value="freelance">Project Inquiry</option>
                <option value="general">General Transmission</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2 ml-2">
                <label className="text-[10px] font-black text-white uppercase tracking-widest">Message</label>
              </div>
              <textarea 
                rows={4} 
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all focus:bg-white/[0.05] resize-none" 
                placeholder="Compose your transmission..."
              ></textarea>
            </div>

            <button className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all group relative overflow-hidden">
              <span className="relative z-10">Send Transmission</span>
              <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <a 
    href={href} 
    target={href?.startsWith('http') ? "_blank" : undefined} 
    rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
    className={`flex items-center gap-5 group ${href ? 'cursor-pointer' : 'cursor-default'}`}
  >
    <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-cyan-500/10 transition-all">
      <div className="text-neutral-500 group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
    </div>
    <div>
      <div className="flex items-center gap-2 mb-0.5">
        <p className="text-[10px] font-black text-white uppercase tracking-wider">{label}</p>
      </div>
      <p className="text-neutral-500 font-bold group-hover:text-white transition-colors text-sm">{value}</p>
    </div>
  </a>
);

const Input: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <div className="space-y-3">
    <div className="flex items-baseline gap-2 ml-2">
      <label className="text-[10px] font-black text-white uppercase tracking-widest">{label}</label>
    </div>
    <input 
      type="text" 
      className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all focus:bg-white/[0.05]" 
      placeholder={placeholder}
    />
  </div>
);

export default Contact;