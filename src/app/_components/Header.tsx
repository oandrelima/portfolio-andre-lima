"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex items-center justify-between bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center bg-white text-black font-black text-xs tracking-tighter rounded-sm transition-transform duration-300 group-hover:rotate-180">
            AL
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-bold text-sm tracking-wider text-white uppercase">
              André Lima&apos;s Portfolio
            </span>
          </div>
        </Link>

        {/* Right Menu Controls */}
        <div className="flex items-center gap-4">
          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-neutral-800 text-xs uppercase tracking-widest text-white transition-all hover:scale-105"
            data-cursor="MENU"
          >
            {menuOpen ? (
              <>
                <span>FECHAR</span>
                <X className="w-4 h-4 text-red-500" />
              </>
            ) : (
              <>
                <span>MENU</span>
                <Menu className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:px-20 md:py-32"
          >
            {/* Background Accent Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Menu Links */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
              <span className="text-xs text-red-500 tracking-widest uppercase">
                // NAVEGAÇÃO PRINCIPAL
              </span>

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between text-4xl md:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                <span>INÍCIO</span>
                <span className="text-sm text-neutral-500 group-hover:text-red-500 transition-colors">01</span>
              </Link>

              <Link
                href="/#projects"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between text-4xl md:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                <span>PROJETOS</span>
                <span className="text-sm text-neutral-500 group-hover:text-red-500 transition-colors">02</span>
              </Link>

              <Link
                href="/#youtube"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between text-4xl md:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                <span>CANAIS DO YOUTUBE</span>
                <span className="text-sm text-neutral-500 group-hover:text-red-500 transition-colors">03</span>
              </Link>

              <Link
                href="/#outros-trabalhos"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between text-4xl md:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                <span>OUTROS TRABALHOS</span>
                <span className="text-sm text-neutral-500 group-hover:text-red-500 transition-colors">04</span>
              </Link>

              <Link
                href="/#skills"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between text-4xl md:text-7xl font-bold tracking-tight text-white/80 hover:text-white transition-colors"
              >
                <span>SOFTWARES &amp; SKILLS</span>
                <span className="text-sm text-neutral-500 group-hover:text-red-500 transition-colors">05</span>
              </Link>
            </div>

            {/* Footer Metadata in Overlay */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-xs text-neutral-400">
              <div>
                <span className="block text-white mb-2 uppercase">PERFIL NO BEHANCE</span>
                <a
                  href="https://www.behance.net/andrelima07"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 mb-1 font-semibold"
                >
                  behance.net/andrelima07 <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="block text-white mb-2 uppercase">ESPECIALIDADES</span>
                <p>Identidade Visual • Branding • 3D Renders • Thumbnails de Alta Conversão</p>
              </div>

              <div className="md:text-right">
                <span className="block text-white mb-2 uppercase">CONTATO DIRETO</span>
                <p className="text-neutral-200 font-semibold">contato@designer.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

