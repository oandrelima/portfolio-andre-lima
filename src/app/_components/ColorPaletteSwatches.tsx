"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ColorSwatch {
  hex: string;
  name: string;
}

export function ColorPaletteSwatches({ palette }: { palette: ColorSwatch[] }) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-[11px] tracking-widest text-neutral-400 uppercase">
        PALETA DE CORES DO PROJETO
      </span>
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {palette.map((color) => (
          <button
            key={color.hex}
            onClick={() => copyToClipboard(color.hex)}
            className="group relative flex flex-col gap-2 text-left"
            title={`Copiar ${color.hex}`}
            data-cursor="COPIAR"
          >
            <div
              className="w-full h-12 sm:h-16 rounded border border-white/10 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] group-hover:border-white/40 shadow-lg"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                {copiedHex === color.hex ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white uppercase truncate">
                {color.hex}
              </span>
              <span className="text-[10px] text-neutral-400 truncate">
                {color.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

