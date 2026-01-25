
import React from 'react';
import { Cpu, Zap, Trophy, MapPin, Code2, LineChart, Target, Binary, BrainCircuit } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Core Profile Card */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl p-10 md:p-12 border border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04]">
          <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Cpu className="w-64 h-64 text-cyan-400 rotate-12" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Dasari Bhanu Prasad</h3>
            
            <div className="space-y-8">
              <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl font-medium">
                CS Undergraduate at <span className="text-white font-bold underline decoration-cyan-500/50">Chandigarh University</span> with a core focus on Machine Learning and High-Performance Computing. I build systems where data precision meets real-time execution.
              </p>

              {/* Recruiter-Friendly Scannable List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">Predictive Modeling</h4>
                      <p className="text-neutral-500 text-sm">Deep expertise in XGBoost and ensemble methods for telemetry analysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <Binary className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">Algorithmic Efficiency</h4>
                      <p className="text-neutral-500 text-sm">Proficient in C++ and Python for low-latency data processing.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">Cloud Deployment</h4>
                      <p className="text-neutral-500 text-sm">Certified in Azure and OCI AI for production-scale deployments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-red-500/10 rounded-lg text-red-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">F1 & Gaming Logic</h4>
                      <p className="text-neutral-500 text-sm">Applying race-pace strategy and game theory to problem solving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/50 text-xs font-black uppercase tracking-widest hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Mohali, Punjab, India</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-xs font-black uppercase tracking-widest hover:text-purple-400 transition-colors">
                <Code2 className="w-4 h-4 text-purple-500" />
                <span>Python / C++ Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="md:col-span-4 grid grid-cols-1 gap-4">
          <StatBox icon={<Zap className="w-5 h-5 text-cyan-400" />} label="Specialization" value="Machine Learning" />
          <StatBox icon={<LineChart className="w-5 h-5 text-emerald-400" />} label="Objective" value="Model Optimization" />
          <StatBox icon={<Trophy className="w-5 h-5 text-amber-400" />} label="Status" value="Hackathon Lead" />
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-6 hover:bg-white/[0.07] transition-all group overflow-hidden flex flex-col justify-center">
    <div className="flex items-center gap-4 relative z-10">
      <div className="p-3 bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-1">{label}</p>
        <p className="text-white font-black text-lg tracking-tight">{value}</p>
      </div>
    </div>
  </div>
);

export default About;
