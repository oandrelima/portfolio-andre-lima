"use client";

import { useState, useRef } from "react";
import { Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { trpc } from "~/utils/trpc";

// Gradient colors per channel for avatar background fallback
const CHANNEL_COLORS: Record<string, { from: string; to: string }> = {
  herobase:         { from: "#b91c1c", to: "#7f1d1d" },
  herofortnite:     { from: "#1d4ed8", to: "#1e3a8a" },
  pulgaboy:         { from: "#c2410c", to: "#7c2d12" },
  nicksfps:         { from: "#7e22ce", to: "#4a044e" },
  blackoutzoficial: { from: "#374151", to: "#111827" },
  teuzz:            { from: "#0e7490", to: "#164e63" },
  jxnes7:           { from: "#15803d", to: "#14532d" },
  loud_diguera:     { from: "#b45309", to: "#78350f" },
  suetam:           { from: "#be123c", to: "#881337" },
  "916gon":         { from: "#4338ca", to: "#1e1b4b" },
};

function AvatarCircle({ id, name }: { id: string; name: string }) {
  const [imgError, setImgError] = useState(false);
  const colors = CHANNEL_COLORS[id] ?? { from: "#374151", to: "#111827" };
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (imgError) {
    return (
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-xl select-none shadow-lg"
        style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/avatars/${id}.jpg`}
      alt={name}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
      onError={() => setImgError(true)}
    />
  );
}

function ChannelCard({
  id, name, handle, url, subscribers,
}: {
  id: string;
  name: string;
  handle: string;
  url: string;
  subscribers: string;
  verified: boolean;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-3 shrink-0 w-40 select-none p-4 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-red-500/50 hover:bg-neutral-900 transition-all duration-300"
      data-cursor="YOUTUBE"
    >
      {/* Circular Avatar */}
      <div className="rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-500/70 transition-all duration-300 group-hover:scale-105 shadow-xl group-hover:shadow-[0_0_30px_rgba(226,36,39,0.2)]">
        <AvatarCircle id={id} name={name} />
      </div>

      {/* Name & Handle */}
      <div className="flex flex-col items-center text-center gap-0.5 w-full">
        <span className="text-white font-bold text-sm group-hover:text-red-400 transition-colors leading-tight truncate max-w-full">
          {name}
        </span>
        <span className="text-neutral-400 text-xs truncate max-w-full">{handle}</span>
        <span className="text-amber-400 text-xs font-semibold mt-0.5">{subscribers}</span>
      </div>
    </a>
  );
}

export function YouTubeMarquee() {
  const { data: channels, isLoading } = trpc.getYouTubeChannels.useQuery();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section className="py-24 px-6 md:px-12 text-center text-xs text-neutral-500">
        CARREGANDO CANAIS DO YOUTUBE...
      </section>
    );
  }

  return (
    <section id="youtube" className="py-24 bg-neutral-950 border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header with Arrow Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6"
      >
        <div>
          <div className="flex items-center gap-2 text-xs text-red-500 uppercase tracking-widest mb-2">
            <Youtube className="w-4 h-4 text-red-500" />
            <span>// CANAIS DO YOUTUBE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            CANAIS QUE <span className="font-serif italic text-neutral-400 font-normal">já</span> TRABALHEI
          </h2>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <p className="hidden md:block max-w-xs text-xs text-neutral-400 leading-relaxed">
            Parcerias com os maiores criadores e pro players do Brasil.
          </p>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-neutral-900 border border-white/20 text-white hover:bg-red-600 hover:border-red-500 transition-all hover:scale-110 shadow-lg active:scale-95"
              title="Anterior"
              aria-label="Canais Anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-neutral-900 border border-white/20 text-white hover:bg-red-600 hover:border-red-500 transition-all hover:scale-110 shadow-lg active:scale-95"
              title="Próximo"
              aria-label="Próximos Canais"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* MANUAL SLIDER CAROUSEL */}
      <div className="px-6 md:px-12">
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto scroll-smooth py-4 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {channels?.map((channel) => (
            <ChannelCard
              key={channel.id}
              id={channel.id}
              name={channel.name}
              handle={channel.handle}
              url={channel.url}
              subscribers={channel.subscribers}
              verified={channel.verified}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
