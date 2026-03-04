"use client";

import Home from "@/components/contananers/Hero";
import { FloatingDockDemo } from "@/components/ui/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px]" />
      </div>
      <div className="fixed bottom-8 left-0 w-full flex items-center justify-center z-50">
        <FloatingDockDemo />
      </div>
      <Home />
    </main>
    </>
  );
}