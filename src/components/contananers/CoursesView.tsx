 "use client";
 
 import { motion, AnimatePresence } from 'framer-motion';
 import { BookOpen, ExternalLink, ChevronLeft, ChevronRight, X, Code, Brain, Smartphone, Database, Shield, Gamepad2 } from 'lucide-react';
 import { FloatingDockDemo } from "@/components/ui/Navbar";
 import { useState } from 'react';
 import { babInfo } from '@/config/courses';
 
 export default function CoursesView() {
   const [isOpen, setIsOpen] = useState(false);
   const [currentBab, setCurrentBab] = useState(1);
   const [selectedTopic, setSelectedTopic] = useState(0);
   const [isFlipping, setIsFlipping] = useState(false);
 
   const cards = [
     {
       title: 'Website Development',
       desc: 'HTML, CSS, JS, React, Next.js',
       icon: Code,
       color: 'from-cyan-500 to-blue-500',
       bgGradient: 'from-cyan-500/5 via-blue-500/5 to-cyan-500/5'
     },
     {
       title: 'Artificial Intelligence',
       desc: 'Machine Learning & Deep Learning',
       icon: Brain,
       color: 'from-blue-500 to-cyan-500',
       bgGradient: 'from-blue-500/5 via-cyan-500/5 to-blue-500/5'
     },
     {
       title: 'Flutter Mobile',
       desc: 'Aplikasi Android & iOS',
       icon: Smartphone,
       color: 'from-cyan-400 to-blue-400',
       bgGradient: 'from-cyan-400/5 via-blue-400/5 to-cyan-400/5'
     },
     {
       title: 'Database Mastery',
       desc: 'SQL, NoSQL, dan Cloud',
       icon: Database,
       color: 'from-blue-400 to-cyan-400',
       bgGradient: 'from-blue-400/5 via-cyan-400/5 to-blue-400/5'
     },
     {
       title: 'Cyber Security',
       desc: 'Keamanan & Proteksi',
       icon: Shield,
       color: 'from-blue-600 to-cyan-600',
       bgGradient: 'from-blue-600/5 via-cyan-600/5 to-blue-600/5'
     },
     {
       title: 'Game Development',
       desc: 'Unity, Godot, Unreal',
       icon: Gamepad2,
       color: 'from-cyan-600 to-blue-600',
       bgGradient: 'from-cyan-600/5 via-blue-600/5 to-blue-600/5'
     },
   ];
 
   const handleNext = () => {
     if (currentBab < cards.length && !isFlipping) {
       setIsFlipping(true);
       setTimeout(() => {
         setCurrentBab(currentBab + 1);
         setSelectedTopic(0);
         setIsFlipping(false);
       }, 400);
     }
   };
 
   const handlePrev = () => {
     if (currentBab > 1 && !isFlipping) {
       setIsFlipping(true);
       setTimeout(() => {
         setCurrentBab(currentBab - 1);
         setSelectedTopic(0);
         setIsFlipping(false);
       }, 400);
     }
   };
 
   return (
     <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
       <div className="fixed bottom-0 left-0 w-full flex items-center justify-center z-50">
         <FloatingDockDemo />
       </div>
 
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px]" />
       </div>
       <section className="relative pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-5xl mx-auto"
         >
           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter">
             Learning Courses
           </h1>
           <p className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
             Jelajahi berbagai materi pembelajaran interaktif dengan pengalaman membaca buku digital yang immersive
           </p>
         </motion.div>
       </section>
       {!isOpen && (
         <section className="relative px-4 md:px-6 pb-32 md:pb-20">
           <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               {cards.map((card, idx) => {
                 const Icon = card.icon;
                 return (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1, duration: 0.4 }}
                     whileHover={{ y: -4 }}
                     className="group relative"
                   >
                     <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 md:p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
                       <div className="flex items-start justify-between mb-3 md:mb-4">
                         <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${card.color}`}>
                           <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                         </div>
                         <div className="px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700">
                           <span className="text-xs font-medium text-slate-400">Bab {idx + 1}</span>
                         </div>
                       </div>
 
                       <div className="mb-3 md:mb-4">
                         <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                           {card.title}
                         </h3>
                         <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                       </div>
 
                       <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-3 md:mb-4"></div>
 
                       <div className="flex items-center justify-between mb-3 md:mb-4 text-xs text-slate-500">
                         <span>{babInfo[idx]?.topics.length || 6} Topics</span>
                         <span>Interactive Learning</span>
                       </div>
 
                       <motion.button
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={() => {
                           setCurrentBab(idx + 1);
                           setIsOpen(true);
                           setSelectedTopic(0);
                         }}
                         className="w-full py-2 md:py-2.5 px-4 rounded-lg bg-slate-800/50 border border-slate-700 text-white text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
                       >
                         <BookOpen className="w-4 h-4" />
                         Open Book
                       </motion.button>
                     </div>
                   </motion.div>
                 );
               })}
             </div>
           </div>
         </section>
       )}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-auto"
             onClick={() => setIsOpen(false)}
           >
             <div
               className="relative min-h-screen p-4 md:p-8 flex items-center justify-center"
               onClick={(e) => e.stopPropagation()}
             >
               <div className="w-full max-w-6xl relative">
                 <motion.button
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.2 }}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   onClick={() => setIsOpen(false)}
                   className="absolute top-3 right-3 z-50 w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 shadow-2xl flex items-center justify-center"
                   aria-label="Close"
                 >
                   <X className="w-5 h-5 md:w-6 md:h-6" />
                 </motion.button>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:auto-rows-fr">
                   <motion.div
                     key={`left-${currentBab}`}
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl flex flex-col"
                   >
                     {(() => {
                       const idx = currentBab - 1;
                       const info = babInfo[idx];
                       const card = cards[idx];
                       const topics = info?.topics ?? [];
                       return (
                         <>
                           <div className="mb-6">
                             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                               {info?.title ?? card?.title ?? `Bab ${currentBab}`}
                             </h2>
                             <p className="text-base md:text-lg text-slate-400">
                               {info?.subtitle ?? card?.desc ?? ''}
                             </p>
                           </div>
 
                           <div className="space-y-2 flex-grow">
                             {topics.length > 0 ? (
                               topics.map((t, tIdx) => (
                                 <motion.div
                                   key={`${currentBab}-${tIdx}`}
                                   initial={{ opacity: 0, x: -20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: 0.1 + tIdx * 0.05 }}
                                 >
                                   <button
                                     onClick={() => setSelectedTopic(tIdx)}
                                     className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${selectedTopic === tIdx
                                       ? 'bg-cyan-500/10 border-cyan-500/30 text-white shadow-lg'
                                       : 'bg-transparent border-slate-700/50 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                                       }`}
                                   >
                                     <span className="text-sm md:text-base font-medium">
                                       {t.label}
                                     </span>
                                   </button>
                                 </motion.div>
                               ))
                             ) : (
                               <div className="px-4 py-6 rounded-lg border border-slate-700/50 text-slate-400">
                                 Materi untuk bab ini akan segera tersedia.
                               </div>
                             )}
                           </div>
                           <div className="flex gap-3 mt-6 lg:hidden">
                             <button
                               onClick={handlePrev}
                               disabled={currentBab <= 1}
                               className="flex-1 py-3 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                             >
                               <ChevronLeft className="w-5 h-5" />
                               Previous
                             </button>
                             <button
                               onClick={handleNext}
                               disabled={currentBab >= cards.length}
                               className="flex-1 py-3 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                             >
                               Next
                               <ChevronRight className="w-5 h-5" />
                             </button>
                           </div>
                         </>
                       );
                     })()}
                   </motion.div>
                   <motion.div
                     key={`right-${currentBab}-${selectedTopic}`}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col"
                   >
                     {(() => {
                       const idx = currentBab - 1;
                       const info = babInfo[idx];
                       const topics = info?.topics ?? [];
                       const topic = topics[selectedTopic];
                       if (!topic) {
                         return (
                           <div className="text-slate-400">
                             Konten belum tersedia untuk bab ini.
                           </div>
                         );
                       }
                       return (
                         <>
                           <div className="mb-4 pb-4 border-b border-slate-700/50">
                             <h3 className="text-xl md:text-2xl font-semibold text-white">
                               {topic.label}
                             </h3>
                           </div>
                           <div className="prose prose-invert max-w-none flex-grow">
                             {topic.content}
                           </div>
                           <motion.a
                             whileHover={{ scale: 1.02 }}
                             whileTap={{ scale: 0.98 }}
                             className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors w-fit"
                             href={topic.topicLink}
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             Baca Dokumentasi
                             <ExternalLink className="w-4 h-4" />
                           </motion.a>
                         </>
                       );
                     })()}
                   </motion.div>
                 </div>
                 <div className="hidden lg:flex justify-between mt-6">
                   <motion.button
                     whileHover={{ scale: 1.1, x: -4 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={handlePrev}
                     disabled={currentBab <= 1 || isFlipping}
                     className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                   >
                     <ChevronLeft className="w-6 h-6" />
                   </motion.button>
 
                   <motion.button
                     whileHover={{ scale: 1.1, x: 4 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={handleNext}
                     disabled={currentBab >= cards.length || isFlipping}
                     className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                   >
                     <ChevronRight className="w-6 h-6" />
                   </motion.button>
                 </div>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
       <style jsx global>{`
         .custom-scrollbar::-webkit-scrollbar {
           width: 6px;
         }
         .custom-scrollbar::-webkit-scrollbar-track {
           background: rgb(15 23 42 / 0.5);
           border-radius: 4px;
         }
         .custom-scrollbar::-webkit-scrollbar-thumb {
           background: rgb(6 182 212 / 0.4);
           border-radius: 4px;
         }
         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
           background: rgb(6 182 212 / 0.6);
         }
       `}</style>
     </main>
   );
 }
