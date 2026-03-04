"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectModal from "./pop-up";
import Image from "next/image";

type CardPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  technologies: string[];
  status: "Completed" | "In Progress";
  year: string;
};

export function Card({ title, description, imageUrl, link = "#", technologies, status, year }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cardPosition, setCardPosition] = useState<CardPosition | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      });
    }
    setIsOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            ref={cardRef}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            whileHover={{ y: -5 }}
          >
            <CardContainer className="inter-var">
              <CardBody
                onClick={handleCardClick}
                className="bg-slate-900/40 backdrop-blur-md relative group/card border-slate-800 hover:border-cyan-500/40 w-auto sm:w-[28rem] h-auto rounded-3xl p-6 border transition-all duration-300 cursor-pointer shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute top-5 right-5 z-10">
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${
                    status === "Completed" 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                  }`}>
                    {status}
                  </span>
                </div>

                <CardItem translateZ="50" className="text-2xl font-bold text-slate-100">
                  {title}
                </CardItem>

                <CardItem translateZ="60" className="text-slate-400 text-sm mt-2 line-clamp-2">
                  {description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-6">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800">
                    <Image 
                      src={imageUrl} 
                      className="h-56 w-full object-cover group-hover/card:scale-105 transition-transform duration-500" 
                      alt={title}
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                  </div>
                </CardItem>

                <div className="flex justify-between items-center mt-8">
                  <CardItem translateZ={20} className="text-xs font-mono text-slate-500">
                    {year}
                  </CardItem>
                  <CardItem
                    as="button"
                    translateZ={20}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    View Project
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <ProjectModal
          project={{ title, description, image: imageUrl, link, additionalDescription: description, technologies, status, year }}
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          cardPosition={cardPosition}
        />
      )}
    </>
  );
}