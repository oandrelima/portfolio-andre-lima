export interface YouTubeChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  subscribers: string;
  category: string;
  verified: boolean;
}

export const YOUTUBE_CHANNELS_DATA: YouTubeChannel[] = [
  {
    id: "herobase",
    name: "Hero Base",
    handle: "@herobase",
    url: "https://www.youtube.com/@herobase",
    subscribers: "1.5M+",
    category: "Gaming & Esports Org",
    verified: true,
  },
  {
    id: "herofortnite",
    name: "Hero Fortnite",
    handle: "@herofortnite",
    url: "https://www.youtube.com/@herofortnite",
    subscribers: "500K+",
    category: "Fortnite Highlights",
    verified: true,
  },
  {
    id: "pulgaboy",
    name: "Pulga",
    handle: "@Pulgaboy",
    url: "https://www.youtube.com/@Pulgaboy",
    subscribers: "1.2M+",
    category: "Fortnite Pro Player",
    verified: true,
  },
  {
    id: "nicksfps",
    name: "Nicks",
    handle: "@Nicksfps",
    url: "https://www.youtube.com/@Nicksfps",
    subscribers: "1.8M+",
    category: "Fortnite & Gaming",
    verified: true,
  },
  {
    id: "blackoutzoficial",
    name: "Blackoutz",
    handle: "@blackoutzoficial",
    url: "https://www.youtube.com/@blackoutzoficial",
    subscribers: "900K+",
    category: "Esports & Entertainment",
    verified: true,
  },
  {
    id: "teuzz",
    name: "Teuzz",
    handle: "@Teuzz",
    url: "https://www.youtube.com/@Teuzz",
    subscribers: "300K+",
    category: "Fortnite Content",
    verified: true,
  },
  {
    id: "jxnes7",
    name: "Jxnes",
    handle: "@jxnes7",
    url: "https://www.youtube.com/@jxnes7",
    subscribers: "250K+",
    category: "Gaming & Highlights",
    verified: true,
  },
  {
    id: "loud_diguera",
    name: "LOUD Diguera",
    handle: "@loud_diguera",
    url: "https://www.youtube.com/@loud_diguera",
    subscribers: "1.1M+",
    category: "LOUD / Gaming",
    verified: true,
  },
  {
    id: "suetam",
    name: "Suetam",
    handle: "@Suetam",
    url: "https://www.youtube.com/@Suetam",
    subscribers: "700K+",
    category: "Fortnite Pro & Streamer",
    verified: true,
  },
  {
    id: "916gon",
    name: "916 Gon",
    handle: "@916Gon",
    url: "https://www.youtube.com/@916Gon",
    subscribers: "400K+",
    category: "Gaming & Competitive",
    verified: true,
  },
];
