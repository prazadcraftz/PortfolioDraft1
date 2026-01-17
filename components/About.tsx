
import React from 'react';
import { BookOpen, MapPin, Gamepad2, Zap, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
          <span className="w-12 h-1 bg-white"></span>
          About Me
        </h2>
        
        <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
          <p>
            I'm a <span className="text-white font-bold">Computer Science Engineering student</span> at 
            <span className="text-cyan-400"> Chandigarh University</span> with a profound obsession 
            for Machine Learning and Data Science.
          </p>
          <p>
            My journey into tech is fueled by curiosity and a relentless drive to build intelligent systems. 
            When I'm not tweaking neural network parameters or competing in hackathons, you can find me 
            engrossed in the high-speed drama of <span className="text-white font-semibold italic">Formula 1</span> or 
            unraveling the multiversal theories of the <span className="text-white font-semibold">MCU</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <InfoCard icon={<BookOpen className="text-cyan-400" />} label="Education" value="B.E. CSE" />
          <InfoCard icon={<MapPin className="text-red-400" />} label="Location" value="Mohali, India" />
          <InfoCard icon={<Gamepad2 className="text-green-400" />} label="Interests" value="Gaming & F1" />
          <InfoCard icon={<Zap className="text-yellow-400" />} label="Focus" value="AI Research" />
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 flex flex-col p-8">
          {/* Abstract background element */}
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -mr-32 -mt-32 animate-[spin_20s_linear_infinite]"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Education</h3>
            </div>

            <div className="space-y-8">
              <EducationItem 
                school="Chandigarh University"
                degree="B.Tech in Computer Science Engineering (AI/ML)"
                period="2023 – 2027"
                score="CGPA: 7.07"
                isCurrent
              />
              <EducationItem 
                school="Sri Gayatri Junior College"
                degree="Intermediate (MPC)"
                period="2021 – 2023"
                score="Percentage: 95.8%"
              />
              <EducationItem 
                school="Narayana High School"
                degree="Secondary Education"
                period="2019 – 2021"
                score="Percentage: 73%"
              />
            </div>
          </div>
          
          {/* BP Branding in background */}
          <div className="absolute bottom-4 right-4 text-9xl font-black text-white/5 pointer-events-none select-none">
            BP
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationItem: React.FC<{ 
  school: string; 
  degree: string; 
  period: string; 
  score: string;
  isCurrent?: boolean;
}> = ({ school, degree, period, score, isCurrent }) => (
  <div className="relative pl-6 border-l border-white/10 group/item">
    <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border border-white/20 bg-neutral-900 transition-colors group-hover/item:bg-white ${isCurrent ? 'bg-cyan-400 border-cyan-400 ring-4 ring-cyan-400/20' : ''}`}></div>
    <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">{period}</p>
    <h4 className="text-lg font-bold text-white group-hover/item:text-cyan-400 transition-colors">{school}</h4>
    <p className="text-sm text-neutral-400 mb-1">{degree}</p>
    <p className="text-xs font-bold text-white/60">{score}</p>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
    <div className="mb-2">{icon}</div>
    <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{label}</p>
    <p className="text-white font-bold">{value}</p>
  </div>
);

export default About;
