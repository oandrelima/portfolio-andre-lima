"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Layers } from "lucide-react";

const OTHER_WORKS_IMAGES = [
  "/images/outros/10.png",
  "/images/outros/13.png",
  "/images/outros/1920x1080v2.png",
  "/images/outros/1v1BheTheOne.png",
  "/images/outros/38.png",
  "/images/outros/44.png",
  "/images/outros/47.png",
  "/images/outros/4v2.png",
  "/images/outros/51.png",
  "/images/outros/54.png",
  "/images/outros/6.png",
  "/images/outros/7.png",
  "/images/outros/8.png",
  "/images/outros/92.png",
  "/images/outros/aaaaaaa.png",
  "/images/outros/CapaFinal.png",
  "/images/outros/EscondeEsconde3D.png",
  "/images/outros/LateGameFinal.png",
  "/images/outros/lengo.png",
  "/images/outros/receba.png",
  "/images/outros/receba2.png",
  "/images/outros/tengo.png",
  "/images/outros/ThePit.png",
  "/images/outros/V1.png",
  "/images/outros/V3.png",
  "/images/outros/ZoneFinal.png",
];

const row1 = OTHER_WORKS_IMAGES.slice(0, 9);
const row2 = OTHER_WORKS_IMAGES.slice(9, 18);
const row3 = OTHER_WORKS_IMAGES.slice(18, 26);

const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];
const marqueeRow3 = [...row3, ...row3, ...row3, ...row3];

export function OtherWorksSection() {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const openLightbox = (imgSrc: string) => {
    const idx = OTHER_WORKS_IMAGES.indexOf(imgSrc);
    if (idx !== -1) setSelectedImgIndex(idx);
  };

  const handlePrev = () => {
    if (selectedImgIndex === null) return;
    setSelectedImgIndex((prev) =>
      prev === 0 ? OTHER_WORKS_IMAGES.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedImgIndex === null) return;
    setSelectedImgIndex((prev) =>
      prev === OTHER_WORKS_IMAGES.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section id="outros-trabalhos" className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
      >
        <div>
          <div className="flex items-center gap-2 text-xs text-red-500 uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4 text-red-500" />
            <span>// PORTFOLIO DE THUMBNAILS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            OUTROS <span className="font-serif italic text-neutral-400 font-normal">trabalhos</span>
          </h2>
        </div>

        <p className="max-w-md text-xs text-neutral-400 leading-relaxed">
          Galeria de capas 3D e thumbnails de altíssima conversão.
        </p>
      </motion.div>

      {/* ── 3-ROW CAROUSEL MARQUEE GRID ── */}
      <div className="space-y-4 py-4 marquee-mask">
        
        {/* ROW 1: Scroll Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-4 w-max animate-marquee-slow hover:[animation-play-state:paused]">
            {marqueeRow1.map((imgSrc, i) => (
              <div
                key={`row1-${i}`}
                onClick={() => openLightbox(imgSrc)}
                className="group relative w-72 md:w-80 aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/80 transition-all duration-300 cursor-pointer shrink-0 shadow-lg hover:scale-105"
                data-cursor="AMPLIAR"
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scroll Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-4 w-max animate-marquee-slow-reverse hover:[animation-play-state:paused]">
            {marqueeRow2.map((imgSrc, i) => (
              <div
                key={`row2-${i}`}
                onClick={() => openLightbox(imgSrc)}
                className="group relative w-72 md:w-80 aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/80 transition-all duration-300 cursor-pointer shrink-0 shadow-lg hover:scale-105"
                data-cursor="AMPLIAR"
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: Scroll Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-4 w-max animate-marquee-slow hover:[animation-play-state:paused]">
            {marqueeRow3.map((imgSrc, i) => (
              <div
                key={`row3-${i}`}
                onClick={() => openLightbox(imgSrc)}
                className="group relative w-72 md:w-80 aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/80 transition-all duration-300 cursor-pointer shrink-0 shadow-lg hover:scale-105"
                data-cursor="AMPLIAR"
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImgIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-950 z-10 my-auto"
            >
              <Image
                src={OTHER_WORKS_IMAGES[selectedImgIndex]}
                alt="Thumbnail em tamanho real"
                fill
                className="object-contain"
                priority
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImgIndex(null)}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 transition-all hover:scale-110"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 transition-all hover:scale-110"
                title="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-red-600 text-white border border-white/20 transition-all hover:scale-110"
                title="Próxima"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter Indicator */}
              <div className="absolute bottom-4 left-6 z-20 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs text-neutral-300">
                {selectedImgIndex + 1} / {OTHER_WORKS_IMAGES.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
