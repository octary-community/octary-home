 "use client";
 
 import React from "react";
 import { motion } from "framer-motion";
 import { Card } from "@/components/ui/ProjectCard";
 import { FloatingDockDemo } from "@/components/ui/Navbar";
 import { BoxesCore } from "@/components/ui/background-boxes";
 import { PROJECTS } from "@/config/projectlist";
 
 export default function ShowcaseView() {
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: { staggerChildren: 0.15, delayChildren: 0.2 }
     }
   };
 
   const itemVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
     }
   };
 
   return (
     <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
       <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20">
         <BoxesCore />
       </div>
 
       <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
       
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px]" />
 
       <div className="relative z-10 pt-24 pb-32 px-6">
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-20"
         >
           <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tighter">
             Project Showcase
           </h1>
           <p className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
             Eksplorasi karya terbaik dari ekosistem digital komunitas Octary.
           </p>
         </motion.div>
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
         >
           {PROJECTS.map((project, index) => (
             <motion.div key={index} variants={itemVariants}>
               <Card
                 title={project.title}
                 description={project.description}
                 imageUrl={project.imageUrl}
                 status={project.status}
                 year={project.year}
                 technologies={project.technologies}
                 link={project.link}
               />
             </motion.div>
           ))}
         </motion.div>
       </div>
 
       <div className="fixed bottom-8 left-0 w-full flex items-center justify-center z-50">
         <FloatingDockDemo />
       </div>
 
       <style jsx global>{`
         ::-webkit-scrollbar { width: 5px; }
         ::-webkit-scrollbar-track { background: transparent; }
         ::-webkit-scrollbar-thumb {
           background: rgba(34, 211, 238, 0.2);
           border-radius: 10px;
         }
         ::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.4); }
       `}</style>
     </main>
   );
 }
