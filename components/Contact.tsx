
import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-16 border border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Let's Start a <br />
            <span className="animate-gradient-text">Conversation</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-md mb-12 leading-relaxed">
            Whether you want to talk about Machine Learning, the MCU's future, or 
            why McLaren is the team to watch in F1 — I'm all ears.
          </p>

          <div className="space-y-6">
            <ContactInfo icon={<Mail />} label="Email" value="itsbhanudasari@gmail.com" />
            <ContactInfo icon={<Phone />} label="Phone" value="+91 XXXXXXXXXX" />
            <ContactInfo icon={<MapPin />} label="Based in" value="Punjab, India" />
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Your Name" placeholder="Bhanu Prasad" />
            <Input label="Email Address" placeholder="bhanu@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Subject</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
              placeholder="Collaboration / MCU Theory / Hello"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Message</label>
            <textarea 
              rows={4} 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
              placeholder="Tell me something interesting..."
            ></textarea>
          </div>
          <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors group">
            Send Transmission
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group">
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">{label}</p>
      <p className="text-white font-bold">{value}</p>
    </div>
  </div>
);

const Input: React.FC<{ label: string; placeholder: string }> = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase tracking-widest text-neutral-500">{label}</label>
    <input 
      type="text" 
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
