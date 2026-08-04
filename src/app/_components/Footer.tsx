"use client";

import { useState } from "react";
import { Copy, Check, ArrowUp, ExternalLink } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "oandreluislima@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Top Big Call To Action */}
        <div className="flex flex-col gap-6">
          <span className="text-xs text-red-500 uppercase tracking-widest">
            // VAMOS TRABALHAR JUNTOS?
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
            VAMOS <span className="font-serif italic font-normal text-neutral-500">criar</span> <br />
            ALGO ÉPICO
          </h2>
        </div>

        {/* Email Copy Box & Direct Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={copyEmail}
              className="group relative flex items-center justify-between gap-6 px-8 py-5 rounded-full bg-neutral-900 border border-white/20 hover:border-red-500 transition-all text-left w-full sm:w-auto"
              data-cursor="COPIAR EMAIL"
            >
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase">
                  CLIQUE PARA COPIAR EMAIL
                </span>
                <span className="text-lg md:text-xl font-bold text-white">
                  {email}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-red-600 transition-colors shrink-0">
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </div>
            </button>

            {copied && (
              <span className="text-xs text-emerald-400 animate-fade-in">
                EMAIL COPIADO COM SUCESSO!
              </span>
            )}
          </div>

          <div className="md:col-span-4 flex flex-wrap items-center md:justify-end gap-3">
            <a
              href="https://www.behance.net/andrelima07"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/10 hover:border-red-500 bg-neutral-900 text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-all hover:scale-105 flex items-center gap-2 shadow-md"
            >
              <span>BEHANCE</span>
              <ExternalLink className="w-3.5 h-3.5 text-red-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/andr%C3%A9-oliveira-6785aa287/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/10 hover:border-blue-500 bg-neutral-900 text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-all hover:scale-105 flex items-center gap-2 shadow-md"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ANDRÉ LIMA. TODOS OS DIREITOS RESERVADOS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
