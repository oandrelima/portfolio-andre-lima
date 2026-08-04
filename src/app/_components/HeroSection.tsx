"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_PHOTOS = [
  "/images/hero/1.png",
  "/images/hero/106.png",
  "/images/hero/4v2.png",
  "/images/hero/5v2.png",
  "/images/hero/75.png",
  "/images/hero/86.png",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-between px-6 pt-24 pb-8 md:px-12 md:pb-10 overflow-hidden bg-black">

      {/* ── FULLSCREEN BACKGROUND PHOTOS ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HERO_PHOTOS[currentIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Subtle dark vignette top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        {/* ── LEFT FADE: solid black on left → transparent ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, #000000 28%, rgba(0,0,0,0.5) 48%, transparent 70%)",
          }}
        />
      </div>

      {/* ── SLIDE INDICATORS (MEIO À ESQUERDA) ── */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 z-30 flex flex-col gap-2 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
        {HERO_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            title={`Ver imagem ${i + 1}`}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "h-7 bg-red-500 shadow-lg shadow-red-500/50"
                : "h-2 bg-white/30 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col h-full justify-between flex-1 pl-6 md:pl-8">



        {/* Main Headline */}
        <div className="my-auto py-6 md:py-10 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white uppercase">
              <span className="inline-block pr-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-500">
                DESIGNER
              </span>{" "}
              <span className="font-serif italic font-normal text-neutral-300">&amp;</span>
              <br />
              <span className="text-white">
                3D <span className="text-red-500">ARTIST</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md pt-1"
          >
            <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed border-l-2 border-red-500 pl-4">
              Identidade de Marca e <span className="text-red-400 font-semibold">Thumbnails 3D de Alto Impacto</span> para os maiores criadores do Brasil.
            </p>
          </motion.div>
        </div>

        {/* Bottom scroll CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-neutral-400"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 text-white hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            <span>EXPLORAR TRABALHOS</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-600/10 transition-all">
              <ArrowDown className="w-4 h-4 animate-bounce text-red-500" />
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-8">
            <span className="text-white font-semibold">
              0{currentIndex + 1} / 0{HERO_PHOTOS.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
