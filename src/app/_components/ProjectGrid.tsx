"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { trpc } from "~/utils/trpc";
import type { Project } from "~/server/data/projects";
import { ProjectModal } from "./ProjectModal";

export function ProjectGrid() {
  const { data: projects, isLoading } = trpc.getProjects.useQuery();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) {
    return (
      <section className="py-24 px-6 md:px-12 text-center text-xs text-neutral-500">
        CARREGANDO PROJETO DO BEHANCE...
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-neutral-950/60 border-t border-white/10 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10"
      >
        <div>
          <div className="flex items-center gap-2 text-xs text-red-500 uppercase tracking-widest mb-2">
            <span>// PROJETOS CONCLUÍDOS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            PROJETOS <span className="font-serif italic text-neutral-400 font-normal">&amp;</span> CASOS DE ESTUDO
          </h2>
        </div>

        <p className="max-w-md text-xs text-neutral-400 leading-relaxed">
          Estudos de caso e identidades visuais de alta performance.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {projects?.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-6"
          >
            {/* Image Container */}
            <div
              onClick={() => setSelectedProject(project)}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-red-500/40 transition-all duration-500 cursor-pointer shadow-2xl group-hover:shadow-[0_0_50px_rgba(226,36,39,0.12)]"
              data-cursor="EXPANDIR"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-white uppercase tracking-widest truncate">
                  {project.category}
                </span>

                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] uppercase tracking-widest shadow-lg transition-transform hover:scale-105 whitespace-nowrap shrink-0"
                  title="VER NO BEHANCE"
                  data-cursor="BEHANCE"
                >
                  <span>VER NO BEHANCE</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>

              {/* Bottom Quick Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {project.client}
                  </span>
                  <span className="text-2xl font-bold text-white uppercase">
                    {project.title}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Project Details Below Image */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-light text-neutral-300 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-end pt-2 border-t border-white/5 text-[11px] text-neutral-400">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-white hover:text-red-500 underline underline-offset-4 transition-colors"
                >
                  VER DETALHES +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="https://www.behance.net/andrelima07"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:border-red-500 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-md"
          data-cursor="BEHANCE"
        >
          <span>VER MAIS PROJETOS NO BEHANCE</span>
          <ExternalLink className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
