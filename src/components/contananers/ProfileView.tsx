 "use client";
 
 import React, { useState, useMemo, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { FloatingDockDemo } from "@/components/ui/Navbar";
 import { X, Github, Linkedin, Twitter, Mail, Globe, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
 import { teamMembers, TeamMember } from "@/config/team";
 import Image from "next/image";
 
 const SKEW = -18;
 const STRIP_W = 110;
 const STRIP_W_HOVER = 320;
 const STRIP_W_EXPANDED = 950;
 const STRIP_H = 600;
 const Y_ZIGZAG = 100;
 const OVERLAP = -5;
 
 const GlitchStyles = () => (
   <style jsx global>{`
     @keyframes dark-glitch {
       0% { clip-path: inset(10% 0 30% 0); transform: translate(-5px, -2px); opacity: 0.8; }
       20% { clip-path: inset(40% 0 10% 0); transform: translate(5px, 2px); opacity: 0.4; }
       40% { clip-path: inset(15% 0 50% 0); transform: translate(-2px, 5px); opacity: 0.9; }
       100% { clip-path: inset(10% 0 30% 0); transform: translate(0); opacity: 0.7; }
     }
     .glitch-bar-dynamic {
       position: absolute;
       background: rgba(8, 51, 68, 0.7); 
       border-top: 1px solid rgba(6, 182, 212, 0.4); 
       z-index: 60;
       pointer-events: none;
     }
     .custom-scrollbar::-webkit-scrollbar { width: 4px; }
     .custom-scrollbar::-webkit-scrollbar-thumb { background: #083344; border-radius: 10px; }
     
     @keyframes slide-up {
       from { transform: translateY(20px); opacity: 0; }
       to { transform: translateY(0); opacity: 1; }
     }
     .animate-slide-up {
       animation: slide-up 0.5s ease-out forwards;
     }
   `}</style>
 );
 
 function getSocialIcon(platform: string) {
   switch(platform) {
     case 'github': return <Github size={20} />;
     case 'linkedin': return <Linkedin size={20} />;
     case 'twitter': return <Twitter size={20} />;
     case 'email': return <Mail size={20} />;
     case 'website': return <Globe size={20} />;
     case 'instagram': return <Instagram size={20} />;
     default: return null;
   }
 }
 
 function DesktopTeamCard({ 
   member, 
   index, 
   isHovered, 
   isSelected, 
   onMouseEnter, 
   onMouseLeave, 
   onClick, 
   leftPosition, 
   onClose 
 }: {
   member: TeamMember;
   index: number;
   isHovered: boolean;
   isSelected: boolean;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   onClick: () => void;
   leftPosition: number;
   onClose: (e: React.MouseEvent) => void;
 }) {
   const [glitchActive, setGlitchActive] = useState(false);
 
   useEffect(() => {
     if (isSelected) {
       setGlitchActive(true);
       const timer = setTimeout(() => setGlitchActive(false), 500);
       return () => clearTimeout(timer);
     }
   }, [isSelected]);
 
   const isEven = index % 2 === 0;
   const zigzagTop = isEven ? 0 : Y_ZIGZAG;
 
   return (
     <motion.div
       className="absolute origin-left hidden lg:block"
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
       onClick={onClick}
       animate={{ 
         left: leftPosition, 
         width: isSelected ? STRIP_W_EXPANDED : (isHovered ? STRIP_W_HOVER : STRIP_W), 
         height: isSelected || isHovered ? STRIP_H + Y_ZIGZAG : STRIP_H,
         top: isSelected || isHovered ? 0 : zigzagTop,
         zIndex: isSelected ? 100 : (isHovered ? 50 : index)
       }}
       transition={{ type: "spring", stiffness: 140, damping: 20 }}
     >
       <div 
         className="relative w-full h-full cursor-pointer overflow-hidden bg-black border-r border-cyan-950/50"
         style={{ transform: `skewX(${SKEW}deg)` }}
       >
         {glitchActive && (
           <div className="absolute inset-0 z-50">
             {[...Array(12)].map((_, i) => (
               <div 
                 key={i} 
                 className="glitch-bar-dynamic" 
                 style={{ 
                   top: `${Math.random() * 100}%`,
                   left: `${Math.random() * 5}%`,
                   width: `${70 + Math.random() * 30}%`,
                   height: `${1 + Math.random() * 5}px`,
                   animation: `dark-glitch ${0.15 + Math.random() * 0.1}s infinite alternate` 
                 }} 
               />
             ))}
           </div>
         )}
 
         <div 
           className="relative h-full flex" 
           style={{ 
             transform: `skewX(${-SKEW}deg)`, 
             width: isSelected ? '112%' : '250%', 
             marginLeft: isSelected ? '-6%' : '-75%', 
             transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' 
           }}
         >
           <div className={`relative h-full overflow-hidden transition-all duration-700 ${isSelected ? 'w-[50%]' : 'w-full'}`}>
             <Image 
               src={member.bgImage} 
               className="absolute inset-0 w-full h-full object-cover" 
               style={{ 
                 filter: "brightness(0.15) blur(3px) grayscale(80%)",
                 transform: "scaleX(1.3) scaleY(1.0)"
               }}
               alt=""
               fill
             />
 
             <motion.div
               className="relative w-full h-full z-10"
               animate={{ 
                 filter: isSelected || isHovered ? "grayscale(0%) brightness(1.1)" : "grayscale(100%) brightness(0.4)",
                 scale: isSelected ? 1.0 : 1.1, 
                 y: isSelected ? "0%" : "0%"
               }}
               transition={{ duration: 0.6 }}
             >
               <Image 
                 src={member.image} 
                 className="w-full h-full object-cover object-top" 
                 alt={member.name}
                 fill
               />
             </motion.div>
 
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 z-20" />
             
             {!isSelected && isHovered && (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.3 }}
                 className="absolute bottom-0 left-0 right-0 p-6 z-30"
                 style={{ paddingLeft: '20%' }}
               >
                 <div className="space-y-2">
                   <h2 className="text-2xl font-black italic uppercase text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-tight leading-none">
                     {member.name}
                   </h2>
                   <div className="flex items-center gap-2">
                     <span className="h-px w-4 bg-cyan-500" />
                     <p className="text-[10px] text-cyan-600 font-bold uppercase tracking-[0.25em] italic">
                       {member.role}
                     </p>
                   </div>
                 </div>
               </motion.div>
             )}
 
             {!isSelected && !isHovered && (
               <div className="absolute bottom-6 left-0 right-0 z-30" style={{ paddingLeft: '35%' }}>
                 <h2 className="text-lg font-black italic uppercase text-zinc-700 tracking-tight">
                   {member.name}
                 </h2>
               </div>
             )}
           </div>
 
           <AnimatePresence>
             {isSelected && (
               <motion.div
                 initial={{ opacity: 0, x: 60 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="flex-1 p-12 overflow-y-auto custom-scrollbar bg-black/90 backdrop-blur-xl border-l border-cyan-950/30"
               >
                 <button onClick={onClose} className="absolute top-6 right-10 p-2 text-cyan-900 hover:text-cyan-500 transition-colors z-50">
                   <X size={28} />
                 </button>
                 
                 <div className="space-y-10 mt-2">
                   <div>
                     <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter leading-none">
                       {member.name}
                     </h1>
                     <div className="mt-4 flex items-center gap-3">
                       <span className="h-px w-8 bg-cyan-500" />
                       <div className="bg-cyan-950/50 text-cyan-400 border border-cyan-800/30 px-4 py-1 text-[11px] font-bold tracking-[0.3em] uppercase italic">
                         {member.role}
                       </div>
                     </div>
                   </div>
 
                   <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-cyan-900/40 pl-6 max-w-xl">
                     {member.bio}
                   </p>
 
                   <section className="space-y-4">
                     <h3 className="text-cyan-900 font-bold text-[10px] tracking-[0.5em] uppercase flex items-center gap-3">
                       <span className="h-px w-6 bg-cyan-900" />
                       CURRENT ROLE
                     </h3>
                     <div className="bg-gradient-to-r from-cyan-950/30 to-transparent border border-cyan-900/20 p-5 rounded-sm">
                       <p className="text-2xl font-black italic text-cyan-400 uppercase tracking-tight">
                         {member.role}
                       </p>
                       <p className="text-xs text-zinc-600 mt-2 font-mono">
                         Active • Full-time Position
                       </p>
                     </div>
                   </section>
 
                   <section className="space-y-4">
                     <h3 className="text-cyan-900 font-bold text-[10px] tracking-[0.5em] uppercase flex items-center gap-3">
                       <span className="h-px w-6 bg-cyan-900" />
                       CONNECT
                     </h3>
                     <div className="grid grid-cols-2 gap-3">
                       {Object.entries(member.socials).map(([platform, url]) => (
                         <a
                           key={platform}
                           href={url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group flex items-center gap-3 bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-sm hover:border-cyan-800 hover:bg-cyan-950/10 transition-all duration-300"
                           onClick={(e) => e.stopPropagation()}
                         >
                           <div className="text-zinc-600 group-hover:text-cyan-500 transition-colors">
                             {getSocialIcon(platform)}
                           </div>
                           <div className="flex-1">
                             <p className="text-[10px] text-zinc-600 uppercase tracking-wider font-bold">
                               {platform}
                             </p>
                             <p className="text-xs text-zinc-400 group-hover:text-cyan-400 transition-colors truncate">
                               {url?.replace('https://', '').split('/')[0]}
                             </p>
                           </div>
                         </a>
                       ))}
                     </div>
                   </section>
 
                   <div className="pt-8 border-t border-cyan-950/20">
                     <p className="text-[10px] text-zinc-700 font-mono tracking-wider">
                       PROFILE_ID: {String(index + 1).padStart(4, '0')} • STATUS: ACTIVE
                     </p>
                   </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
         </div>
       </div>
     </motion.div>
   );
 }
 
 function MobileCharacterView({ 
   member, 
   index, 
   onPrev, 
   onNext, 
   hasPrev, 
   hasNext 
 }: { 
   member: TeamMember; 
   index: number;
   onPrev: () => void;
   onNext: () => void;
   hasPrev: boolean;
   hasNext: boolean;
 }) {
   const [showDetail, setShowDetail] = useState(false);
 
   return (
     <div className="lg:hidden w-full max-w-md mx-auto">
       <div className="relative mb-4">
         <div className="flex items-center justify-between mb-2">
           <span className="text-[10px] text-cyan-600 font-bold tracking-[0.3em] uppercase">
             Team Member
           </span>
           <div className="flex items-center gap-2">
             <span className="h-px w-8 bg-cyan-900" />
             <span className="text-[10px] text-zinc-600 font-mono">
               {String(index + 1).padStart(2, '0')}/{String(teamMembers.length).padStart(2, '0')}
             </span>
           </div>
         </div>
         
         <div className="absolute -top-4 left-0 right-0 overflow-hidden pointer-events-none select-none">
           <h2 className="text-6xl font-black italic uppercase text-zinc-900/30 tracking-tighter leading-none whitespace-nowrap">
             {member.name.split(' ')[0]}
           </h2>
         </div>
         
         <h1 className="relative text-3xl font-black italic uppercase text-white tracking-tight leading-none drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
           {member.name}
         </h1>
         
         <div className="mt-3 flex items-center gap-2">
           <div className="bg-cyan-950/50 border border-cyan-800/30 px-3 py-1 rounded-sm">
             <span className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase">
               {member.role}
             </span>
           </div>
         </div>
       </div>
 
       <div className="relative bg-gradient-to-b from-zinc-900/50 to-black border border-cyan-950/30 rounded-lg overflow-hidden mb  -4">
         <div className="absolute inset-0 opacity-20">
           <img 
             src={member.bgImage} 
             className="w-full h-full object-cover filter blur-sm grayscale"
             alt=""
           />
         </div>
 
         <div className="relative aspect-[3/4] w-full">
           <motion.img
             key={member.name}
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             src={member.image}
             alt={member.name}
             className="w-full h-full object-cover object-top"
             style={{ filter: "grayscale(20%) brightness(1.05)" }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
           <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-lg" />
           <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 rounded-br-lg" />
         </div>
         <div className="relative bg-zinc-950/90 border-t border-cyan-950/30 p-4">
           <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
             {member.bio}
           </p>
         </div>
       </div>
       <button
         onClick={() => setShowDetail(!showDetail)}
         className="w-full mb-4 py-3 bg-cyan-950/30 border border-cyan-800/30 rounded-sm text-cyan-400 text-xs font-bold tracking-wider uppercase hover:bg-cyan-950/50 transition-colors flex items-center justify-center gap-2"
       >
         {showDetail ? 'Hide Details' : 'View Full Profile'}
         <motion.span
           animate={{ rotate: showDetail ? 180 : 0 }}
           transition={{ duration: 0.2 }}
         >
           ▼
         </motion.span>
       </button>
       <AnimatePresence>
         {showDetail && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.3 }}
             className="overflow-hidden mb-4"
           >
             <div className="bg-zinc-950/50 border border-cyan-950/30 rounded-lg p-4 space-y-4">
               <div>
                 <h3 className="text-[10px] text-cyan-900 font-bold tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-600 rounded-full" />
                   Biography
                 </h3>
                 <p className="text-sm text-zinc-300 leading-relaxed">
                   {member.bio}
                 </p>
               </div>
               <div className="bg-gradient-to-r from-cyan-950/20 to-transparent border-l-2 border-cyan-600 pl-4 py-2">
                 <p className="text-[10px] text-cyan-600 uppercase tracking-wider mb-1">Current Position</p>
                 <p className="text-lg font-black italic text-white uppercase">{member.role}</p>
                 <p className="text-[10px] text-zinc-600 mt-1 font-mono">Status: Active • Full-time</p>
               </div>
               <div>
                 <h3 className="text-[10px] text-cyan-900 font-bold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-600 rounded-full" />
                   Connect
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                   {Object.entries(member.socials).map(([platform, url]) => (
                     <a
                       key={platform}
                       href={url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-black/50 border border-zinc-800/50 p-3 rounded-sm hover:border-cyan-700 hover:bg-cyan-950/20 transition-all group"
                     >
                       <span className="text-zinc-600 group-hover:text-cyan-500 transition-colors">
                         {getSocialIcon(platform)}
                       </span>
                       <span className="text-[10px] text-zinc-400 group-hover:text-cyan-400 transition-colors capitalize">
                         {platform}
                       </span>
                     </a>
                   ))}
                 </div>
               </div>
               <div className="pt-3 border-t border-cyan-950/20">
                 <p className="text-[9px] text-zinc-700 font-mono tracking-wider text-center">
                   ID: {String(index + 1).padStart(4, '0')} • SECURE
                 </p>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
       <div className="flex items-center justify-center gap-3 mt-6">
         <button
           onClick={onPrev}
           disabled={!hasPrev}
           className={`p-2 rounded-full border transition-all ${
             hasPrev 
               ? 'border-cyan-800 text-cyan-500 hover:bg-cyan-950/30 hover:border-cyan-600' 
               : 'border-zinc-800 text-zinc-700 cursor-not-allowed'
           }`}
         >
           <ChevronLeft size={20} />
         </button>
 
         <div className="flex gap-2">
           {teamMembers.map((m, i) => (
             <div
               key={m.name}
               className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                 i === index 
                   ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                   : 'border-zinc-800 opacity-50 grayscale'
               }`}
             >
               <img
                 src={m.image}
                 alt={m.name}
                 className="w-full h-full object-cover"
               />
               {i === index && (
                 <div className="absolute inset-0 bg-cyan-500/10" />
               )}
             </div>
           ))}
         </div>
 
         <button
           onClick={onNext}
           disabled={!hasNext}
           className={`p-2 rounded-full border transition-all ${
             hasNext 
               ? 'border-cyan-800 text-cyan-500 hover:bg-cyan-950/30 hover:border-cyan-600' 
               : 'border-zinc-800 text-zinc-700 cursor-not-allowed'
           }`}
         >
           <ChevronRight size={20} />
         </button>
       </div>
     </div>
   );
 }
 
 export default function ProfileView() {
   const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
   const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
   const [mobileIndex, setMobileIndex] = useState(0);
 
   const basePos = useMemo(() => {
     const pos: number[] = [];
     let x = 0;
     teamMembers.forEach(() => {
       pos.push(x);
       x += STRIP_W - OVERLAP;
     });
     return pos;
   }, []);
 
   const positions = useMemo(() => {
     if (selectedIdx !== null) {
       return basePos.map((pos, i) => {
         if (i > selectedIdx) return pos + (STRIP_W_EXPANDED - STRIP_W);
         return pos;
       });
     }
     if (hoveredIdx !== null) {
       return basePos.map((pos, i) => {
         if (i > hoveredIdx) return pos + (STRIP_W_HOVER - STRIP_W);
         return pos;
       });
     }
     return basePos;
   }, [basePos, hoveredIdx, selectedIdx]);
 
   const lastIdx = teamMembers.length - 1;
   const currentLastWidth = selectedIdx === lastIdx ? STRIP_W_EXPANDED : (hoveredIdx === lastIdx ? STRIP_W_HOVER : STRIP_W);
   const skewComp = Math.tan((Math.abs(SKEW) * Math.PI) / 180) * (STRIP_H + Y_ZIGZAG);
 
   const handlePrev = () => setMobileIndex(prev => Math.max(0, prev - 1));
   const handleNext = () => setMobileIndex(prev => Math.min(teamMembers.length - 1, prev + 1));
 
   return (
     <main className="relative min-h-screen bg-black text-white overflow-x-hidden pb-32">
       <GlitchStyles />
       <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
 
       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-10 px-4 lg:px-0">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="hidden lg:block text-center mb-24"
         >
           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter">
             Profile Octary
           </h1>
           <p className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
             Eksplorasi karya terbaik dari ekosistem digital komunitas Octary.
           </p>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="lg:hidden text-center mb-8 mt-8"
         >
           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter">
             Team Profile
           </h1>
           <p className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
             Eksplorasi karya terbaik dari ekosistem digital komunitas Octary.
           </p>
         </motion.div>
         <div className="hidden lg:flex justify-center items-center w-full h-[650px] overflow-visible">
           <motion.div 
             className="relative" 
             animate={{ width: positions[lastIdx] + currentLastWidth + skewComp }} 
             style={{ height: STRIP_H + Y_ZIGZAG, translateX: -skewComp / 3 }}
           >
             {teamMembers.map((member, i) => (
               <DesktopTeamCard
                 key={i}
                 member={member}
                 index={i}
                 isHovered={hoveredIdx === i}
                 isSelected={selectedIdx === i}
                 onMouseEnter={() => selectedIdx === null && setHoveredIdx(i)}
                 onMouseLeave={() => setHoveredIdx(null)}
                 onClick={() => { setSelectedIdx(i); setHoveredIdx(null); }}
                 onClose={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedIdx(null); }}
                 leftPosition={positions[i]}
               />
             ))}
           </motion.div>
         </div>
         <div className="lg:hidden w-full pb-20">
           <MobileCharacterView
             member={teamMembers[mobileIndex]}
             index={mobileIndex}
             onPrev={handlePrev}
             onNext={handleNext}
             hasPrev={mobileIndex > 0}
             hasNext={mobileIndex < teamMembers.length - 1}
           />
         </div>
       </div>
 
       <div className="fixed bottom-8 left-0 w-full flex justify-center z-[110]">
         <FloatingDockDemo />
       </div>
     </main>
   );
 }
