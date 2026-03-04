"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Zap, ChevronRight, type LucideIcon } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[200vw] h-[100vh] opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
      }}
    >
      <motion.div 
        animate={{ backgroundPositionY: ['0px', '80px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      />
    </div>
  </div>
);

const TechCard = ({ icon: Icon, label, value, delay }: { icon: LucideIcon, label: string, value: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group relative overflow-hidden bg-slate-900/50 border border-slate-700/50 backdrop-blur-md p-4 rounded-lg hover:border-cyan-500/50 transition-colors"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    <div className="flex items-center gap-3">
      <div className="p-2 rounded bg-slate-800/50 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{label}</div>
        <div className="text-sm font-mono text-slate-200">{value}</div>
      </div>
    </div>
  </motion.div>
);

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX - innerWidth / 2) / 50,
      y: (clientY - innerHeight / 2) / 50,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 selection:bg-cyan-500/30"
    >
      <WavyBackground 
        containerClassName="h-full w-full"
        backgroundFill="#020617"
        waveOpacity={0.3}
        blur={15}
        speed="fast"
        colors={["#06b6d4", "#3b82f6", "#0ea5e9", "#22d3ee", "#0891b2"]}
      >
        <GridBackground />
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-800/20 rounded-full blur-[128px] pointer-events-none z-10" />

        <div className="relative z-30 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-screen max-w-7xl">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md">
                Octary Active
              </span>
            </motion.div>

            <div className="space-y-2" style={{ perspective: "1000px" }}>
              <motion.h1
                initial={{ opacity: 0, rotateX: -20, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter"
                style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
              >
                OCTARY
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-4"
                style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
              >
                <div className="h-[1px] w-12 bg-cyan-500/50" />
                <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 tracking-tight">
                  COMMUNITY
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-slate-700/50 pl-6"
            >
              Komunitas ramah dan berkembang, tempat belajar dan berbagi ilmu.
              Bergabunglah dengan ribuan pengembang dari Community, 
              saling bertukar ide, dan berkembang bersama.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/courses" className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold text-sm uppercase tracking-wider overflow-hidden rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                <span className="relative flex items-center gap-2">
                  Course <ChevronRight size={16} />
                </span>
              </a>
              <a href="/showcase" className="px-8 py-4 border border-slate-700/50 text-slate-300 font-mono text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors rounded-lg bg-slate-800/50 backdrop-blur-sm">
                Showcase
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-cyan-500/10 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
            <TechCard icon={Terminal} label="Core Stack" value="React / Next.js / TS" delay={0.8} />
            <TechCard icon={Cpu} label="Architecture" value="Server Components" delay={0.9} />
            <TechCard icon={Globe} label="Network" value="Edge Network Active" delay={1.0} />
            <TechCard icon={Zap} label="Performance" value="100/100 Lighthouse" delay={1.1} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-4 p-4 rounded-lg bg-slate-950/40 border border-slate-700/50 font-mono text-xs text-slate-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Cpu size={40} className="text-cyan-500/30" />
              </div>
              <p className="text-cyan-400">$ init octary-cli</p>
              <p className="text-slate-400">{`> Loading modules... [OK]`}</p>
              <p className="text-slate-400">{`> Optimizing assets... [OK]`}</p>
              <p className="text-slate-400">{`> Ready for deployment.`}</p>
              <motion.div 
                className="w-2 h-4 bg-cyan-500 mt-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}