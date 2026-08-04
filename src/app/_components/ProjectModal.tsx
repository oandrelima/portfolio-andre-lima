"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Award } from "lucide-react";
import type { Project } from "~/server/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded text-[10px] tracking-widest uppercase bg-white/10 text-white border border-white/20">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8">
            {/* Title & Behance Link */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                  {project.title}
                </h2>
                <p className="text-lg text-neutral-400 font-light mt-2">
                  {project.subtitle}
                </p>
              </div>

              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-blue-600/30 self-start md:self-auto"
                data-cursor="BEHANCE"
              >
                <span>VER NO BEHANCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Main Cover Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description & Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="text-xs text-neutral-400 uppercase tracking-widest mb-3">
                  SOBRE O PROJETO
                </h3>
                <p className="text-neutral-300 font-light leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-4 space-y-4 md:pl-6 md:border-l md:border-white/10">
                <div>
                  <span className="block text-[11px] text-neutral-400 uppercase">
                    CLIENTE / PROJETO
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {project.client}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] text-neutral-400 uppercase">
                    MINHA FUNÇÃO
                  </span>
                  <span className="text-sm font-semibold text-neutral-200">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Direct Callout to Behance */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-neutral-900 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">
                    PROJETO PUBLICADO INTEGRALMENTE NO BEHANCE
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Acesse todas as pranchas, variações e estudos de caso completos.
                  </p>
                </div>
              </div>

              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0 text-center"
              >
                ABRIR GALERIA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

