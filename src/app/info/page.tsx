"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Mail, Award, Layers } from "lucide-react";
import Link from "next/link";
import { Footer } from "../_components/Footer";

export default function InfoPage() {
  const tools = [
    { name: "Cinema 4D", category: "3D Render & Lighting", level: "Avançado" },
    { name: "Blender", category: "3D Character Posing & Clay", level: "Avançado" },
    { name: "Adobe Photoshop", category: "Composição & Post-Processing", level: "Especialista" },
    { name: "Adobe Illustrator", category: "Design Vetorial & Logotipos", level: "Especialista" },
    { name: "After Effects", category: "Motion Graphics & VFX", level: "Intermediário" },
  ];

  return (
    <div className="w-full min-h-screen bg-background text-lightText pt-32">
      <div className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VOLTAR PARA A PÁGINA INICIAL</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-6 mb-16 pb-8 border-b border-white/10">
          <span className="text-xs text-red-500 uppercase tracking-widest">
            // BIOGRAFIA &amp; ESPECIFICAÇÕES TÉCNICAS
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white">
            SOBRE MIM <span className="font-serif italic font-normal text-neutral-500">&amp;</span> SERVIÇOS
          </h1>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed">
              Sou um <span className="text-white font-semibold underline decoration-red-500">Visual Designer e 3D Artist</span> apaixonado por transformar conceitos em experiências visuais memoráveis e capas de alto impacto.
            </p>
            <p className="text-base text-neutral-400 font-light leading-relaxed">
              Minha trajetória combina o design gráfico tradicional e desenvolvimento de identidade de marcas (como o projeto <span className="text-white font-medium">LO Studio</span>) com a criação acelerada de arte 3D e thumbnails para os maiores influenciadores de gaming e pro players do ecossistema do YouTube.
            </p>
            <p className="text-base text-neutral-400 font-light leading-relaxed">
              Ao longo dos últimos anos, desenvolvi peças visuais que acumularam centenas de milhões de visualizações em canais renomados como <span className="text-white font-medium">Hero Base, Hero Fortnite, Pulga, Nicks, Blackoutz, LOUD Diguera, Suetam</span> entre outros.
            </p>
          </div>

          <div className="md:col-span-5 space-y-8 md:pl-8 md:border-l md:border-white/10">
            <div>
              <h3 className="text-xs text-neutral-400 uppercase tracking-widest mb-4">
                PILARES DE ATUAÇÃO
              </h3>
              <ul className="space-y-3 text-sm text-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  Identidade Visual &amp; Logo Systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Thumbnails 3D para YouTube (High CTR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Renderização e Iluminação em Cinema 4D / Blender
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Tratamento de Imagem &amp; Pós-Produção
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs text-neutral-400 uppercase tracking-widest mb-4">
                PROJETOS DESTAQUE NO BEHANCE
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.behance.net/gallery/253744297/LO-Studio"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-white/40 flex items-center justify-between text-xs text-white transition-colors"
                >
                  <span>1. LO Studio (Branding)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>
                <a
                  href="https://www.behance.net/gallery/184058913/Fortnite-Thumbnails"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-white/40 flex items-center justify-between text-xs text-white transition-colors"
                >
                  <span>2. Fortnite Thumbnails (Capas 3D)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Software Stack */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
              FERRAMENTAS &amp; SOFTWARE STACK
            </h2>
            <span className="text-xs text-neutral-400">05 SOFTWARES PRINCIPAIS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className="p-5 rounded-xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between gap-4"
              >
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-base">{t.name}</h4>
                  <p className="text-xs text-neutral-400 mt-1">{t.category}</p>
                </div>
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest">
                  {t.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

