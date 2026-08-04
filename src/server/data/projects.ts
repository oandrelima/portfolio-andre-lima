export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: "Branding / Visual Identity" | "3D Gaming Thumbnails" | "Art Direction";
  year: string;
  coverImage: string;
  behanceUrl: string;
  description: string;
  tags: string[];
  client: string;
  role: string;
  palette: { hex: string; name: string }[];
  deliverables: string[];
  gallery: string[];
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "lo-studio",
    title: "LO Studio",
    slug: "lo-studio",
    subtitle: "Complete Studio Identity & Minimalist Brand System",
    category: "Branding / Visual Identity",
    year: "2024",
    coverImage: "/images/lo-studio-cover.png",
    behanceUrl: "https://www.behance.net/gallery/253744297/LO-Studio",
    description: "Desenvolvimento completo da identidade visual e marca gráfica para o LO Studio. O projeto enfatiza geometria limpa, presença marcante e um sistema de logotipo isométrico versátil criado para mídias digitais e físicas.",
    tags: ["Visual Identity", "Logo Design", "Brand Guidelines", "Typography", "Studio Branding"],
    client: "LO Studio",
    role: "Lead Brand Designer & Visual Identity Artist",
    palette: [
      { hex: "#0066FF", name: "Electric Blue" },
      { hex: "#003399", name: "Deep Navy" },
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#111111", name: "Charcoal Dark" },
      { hex: "#888888", name: "Neutral Slate" }
    ],
    deliverables: [
      "Isometric Logo System",
      "Brand Style Guide & Standards",
      "Digital Asset Templates",
      "Social Media Branding Kit",
      "3D Brand Identity Mockups"
    ],
    gallery: [
      "/images/lo-studio-cover.png"
    ],
    featured: true
  },
  {
    id: "fortnite-thumbnails",
    title: "Fortnite Thumbnails",
    slug: "fortnite-thumbnails",
    subtitle: "High-CTR 3D Thumbnails & Dramatic Character Render Art",
    category: "3D Gaming Thumbnails",
    year: "2024",
    coverImage: "/images/fortnite-thumbnails-cover.jpg",
    behanceUrl: "https://www.behance.net/gallery/184058913/Fortnite-Thumbnails",
    description: "Coletânea de capas profissionais e thumbnails em 3D de alta conversão (High CTR) desenvolvidas para os maiores criadores e pro players de Fortnite do Brasil e do mundo. Design focado em composição épica, iluminação dramática e manipulação de imagem de nível de produção cinematográfica.",
    tags: ["3D Character Render", "YouTube Thumbnails", "Cinema 4D", "Blender", "Fortnite Gaming", "Photo Composition"],
    client: "Suetam & Top Gaming Creators",
    role: "Thumbnail Specialist & 3D Lighting Artist",
    palette: [
      { hex: "#D4AF37", name: "Royal Gold" },
      { hex: "#E22427", name: "Imperial Crimson" },
      { hex: "#C87D32", name: "Warm Amber" },
      { hex: "#221105", name: "Espresso Shadow" },
      { hex: "#FFF8E7", name: "Parchment Light" }
    ],
    deliverables: [
      "3D Lighting & Scene Setup",
      "High-CTR Layout Design",
      "Custom Typography & Emblem Renders",
      "Color Grading & Post-Processing",
      "A/B Testing Thumbnail Variations"
    ],
    gallery: [
      "/images/fortnite-thumbnails-cover.jpg"
    ],
    featured: true
  }
];
