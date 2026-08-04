"use client";

import { HeroSection } from "./_components/HeroSection";
import { ProjectGrid } from "./_components/ProjectGrid";
import { YouTubeMarquee } from "./_components/YouTubeMarquee";
import { OtherWorksSection } from "./_components/OtherWorksSection";
import { SkillsSection } from "./_components/SkillsSection";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-lightText selection:bg-accentRed selection:text-white">
      <HeroSection />
      <ProjectGrid />
      <YouTubeMarquee />
      <OtherWorksSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
