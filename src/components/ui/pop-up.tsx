"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  additionalDescription: string;
  technologies: string[];
  status: "Completed" | "In Progress";
  year?: string;
}

interface ProjectModalProps {
  project?: Project | null;
  onClose: () => void;
  isOpen?: boolean;
  children?: ReactNode;
  title?: string;
  maxWidth?: string;
  cardPosition?: { x: number; y: number; width: number; height: number } | null;
}

export default function ProjectModal({ 
  project, 
  onClose, 
  isOpen = false,
  cardPosition
}: ProjectModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />
          <motion.div
            initial={
              cardPosition 
                ? { 
                    opacity: 0, 
                    scale: 0.5, 
                    x: cardPosition.x - window.innerWidth / 2, 
                    y: cardPosition.y - window.innerHeight / 2 
                  } 
                : { opacity: 0, scale: 0.9, y: 20 }
            }
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0,
              transition: { type: "spring", damping: 25, stiffness: 300 } 
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-500/10 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-slate-900">
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent md:hidden" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border ${
                    project.status === "Completed" 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-slate-500 font-mono text-xs">{project.year}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tight">
                  {project.title}
                </h2>

                <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                  {project.additionalDescription || project.description}
                </p>
                <div className="mb-10">
                  <h4 className="text-slate-100 font-semibold mb-4 text-sm uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-white text-black font-bold rounded-2xl text-center hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/10 active:scale-[0.98]"
                  >
                    Visit Live Site
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all active:scale-[0.98]"
                  >
                    Back to Showcase
                  </button>
                </div>
              </motion.div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}