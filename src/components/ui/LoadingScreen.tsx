"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showWipe, setShowWipe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4; 
      });
    }, 20);

    const checkProgress = setInterval(() => {
      if (progress >= 100) {
        clearInterval(checkProgress);
        
        setTimeout(() => {
          setShowWipe(true);
        }, 100);

        setTimeout(() => {
          setLoading(false);
        }, 1000); 
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(checkProgress);
    };
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <>
          <motion.div
            key="main-loading-bg"
            exit={{ opacity: 0, transition: { duration: 0 } }} 
            className="fixed inset-0 z-[9999] bg-slate-950 text-white overflow-hidden font-sans"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#06b6d410,transparent)]" />
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-slate-900 border-r border-slate-800 z-20">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                initial={{ height: "0%" }}
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-12 left-8 md:left-12 z-20"
            >
              <div className="absolute -left-4 top-2 bottom-2 w-0.5 bg-cyan-500/50" />
              
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-cyan-500 text-6xl md:text-8xl font-bold tracking-tighter tabular-nums leading-none drop-shadow-lg">
                    {progress}
                  </span>
                  <span className="text-cyan-500 text-2xl md:text-3xl font-bold">%</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 bg-cyan-500 shadow-[0_0_5px_#06b6d4]" 
                  />
                  <p className="text-cyan-500/80 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                    System Initialization...
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-32 pointer-events-none">
              <div className="relative text-right">
                <div className="absolute -top-12 right-0 flex gap-1 mb-4 opacity-50">
                   {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-cyan-900" />
                   ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                    Octary
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                      Community
                    </span>
                  </h1>
                  
                  <div className="flex items-center justify-end gap-4 mt-6">
                    <div className="h-[1px] w-12 bg-cyan-900" />
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-cyan-500 border-b-[6px] border-b-transparent" />
                    <p className="text-cyan-500/60 text-xs md:text-sm tracking-widest font-mono">
                      The best community for you
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-900/50 rounded-tr-3xl" />
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-cyan-500/50" />

          </motion.div>
          {showWipe && (
            <motion.div
              key="wipe-overlay"
              initial={{ x: "-100%" }}
              animate={{ 
                x: "0%",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1]
                }
              }}
              exit={{ 
                x: "0%",
                opacity: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
              className="fixed inset-0 z-[10000] bg-cyan-500"
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
}