"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface SoftwareSkill {
  name: string;
  category: string;
  level: "Avançado" | "Intermediário" | "Básico";
  description: string;
  badgeBg: string;
  badgeText: string;
}

const SKILLS_DATA: SoftwareSkill[] = [
  {
    name: "Photoshop",
    category: "Edição 2D & Thumbnails",
    level: "Avançado",
    description:
      "Composição 2D avançada, manipulação avançada de imagem, fusão de cores e criação de thumbnails 3D de alta conversão e alto impacto visual.",
    badgeBg: "bg-red-500/20 border-red-500/50",
    badgeText: "text-red-400 font-bold",
  },
  {
    name: "Illustrator",
    category: "Vetor & Identidade Visual",
    level: "Intermediário",
    description:
      "Design vetorial, desenvolvimento de logotipos, manual de marca, tipografia e criação de elementos gráficos escaláveis com precisão.",
    badgeBg: "bg-blue-500/20 border-blue-500/50",
    badgeText: "text-blue-400 font-semibold",
  },
  {
    name: "Figma",
    category: "UI & Layout Design",
    level: "Intermediário",
    description:
      "Prototipagem de interfaces de usuário (UI/UX), estruturação de layouts modernos, design systems e apresentações visuais de projetos.",
    badgeBg: "bg-blue-500/20 border-blue-500/50",
    badgeText: "text-blue-400 font-semibold",
  },
  {
    name: "Blender",
    category: "Modelagem & Renders 3D",
    level: "Básico",
    description:
      "Criação e manipulação de objetos 3D, iluminação de cenas, enquadramento de câmera e geração de renders 3D para capas e artes.",
    badgeBg: "bg-amber-500/20 border-amber-500/50",
    badgeText: "text-amber-400 font-semibold",
  },
  {
    name: "After Effects",
    category: "Motion & Efeitos Visuais",
    level: "Básico",
    description:
      "Animações dinâmicas em motion graphics, vinhetas, efeitos visuais (VFX) e pós-produção de elementos em movimento.",
    badgeBg: "bg-amber-500/20 border-amber-500/50",
    badgeText: "text-amber-400 font-semibold",
  },
  {
    name: "Premiere Pro",
    category: "Edição de Vídeo",
    level: "Básico",
    description:
      "Edição e montagem audiovisual, cortes dinâmicos, tratamento de áudio e finalização de vídeos para redes sociais e YouTube.",
    badgeBg: "bg-amber-500/20 border-amber-500/50",
    badgeText: "text-amber-400 font-semibold",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-neutral-950/80 border-t border-white/10 relative">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header (Matches ProjectGrid & YouTubeMarquee) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs text-red-500 uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4 text-red-500" />
            <span>// FERRAMENTAS &amp; DOMÍNIO TÉCNICO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            SOFTWARES <span className="font-serif italic text-neutral-400 font-normal">&amp;</span> SKILLS
          </h2>
        </div>

        <p className="max-w-md text-xs text-neutral-400 leading-relaxed">
          Especialização e nível de domínio técnico nas principais ferramentas do ecossistema de design, 3D e vídeo.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-red-500/60 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between gap-6 shadow-2xl"
          >
            <div className="space-y-4">
              {/* Header line with Name & Badge */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <h3 className="text-3xl font-black text-white uppercase group-hover:text-red-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Level Badge */}
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${skill.badgeBg} ${skill.badgeText} shrink-0 shadow-md`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Category Subtitle */}
              <span className="text-xs text-red-400 font-semibold uppercase tracking-widest block">
                {skill.category}
              </span>

              {/* Detailed Description */}
              <p className="text-sm text-neutral-300 font-light leading-relaxed pt-1">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
