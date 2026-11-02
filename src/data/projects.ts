export interface Project {
  id: number;
  title: string;
  description: string;
  featured: boolean;
  tags: string[];
  thumbnail: string;
  screenshots: string[];
  video?: string;
}

export const projects = [
  {
    id: 1,
    title: "MAGE",
    description: "Magic 2D Platform Fighter",
    longDescription:
      "This is a much longer Description for Project 1. It consists of multiple sentences",
    featured: true,
    tags: [
      "Unity",
      "C#",
      "Design",
      "Programming",
      "Pixel Art",
      "UI",
      "UX",
      "Steamworks",
      "Shipped",
    ],
    thumbnail: "/projects/MAGE/MAGE16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontal1.png",
      "/projects/MAGE/MageLogoHorizontal2.png",
      "/projects/MAGE/MageLogoHorizontal3.png",
      "/projects/MAGE/MAGEThumbsUp.png",
    ],
    video: "",
  },
  {
    id: 2,
    title: "Fish Party",
    description: "12 Player Party Game",
    longDescription:
      "This is a much longer Description for Project 2. It consists of multiple sentences",
    featured: true,
    tags: [
      "Unity",
      "C#",
      "Design",
      "Programming",
      "Pixel Art",
      "UI",
      "UX",
      "Accessibility",
    ],
    thumbnail: "/projects/FishParty/FishParty16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 3,
    title: "Assist Mode",
    description: "2D Point & Click Puzzle Platformer",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: true,
    tags: [
      "Unity",
      "C#",
      "Design",
      "Programming",
      "Pixel Art",
      "UI",
      "UX",
      "Documentation",
      "Solo",
    ],
    thumbnail: "/projects/AssistMode/AssistMode16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 4,
    title: "GMTK 2026: Little Cowboy",
    description: "Top-Down Gunner Roguelike",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: false,
    tags: [
      "Unity",
      "C#",
      "Design",
      "Programming",
      "Pixel Art",
      "UI",
      "UX",
      "Game Jam",
    ],
    thumbnail: "/projects/LittleCowboy/LittleCowboy16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 5,
    title: "Perfect Princess Plan",
    description: "Grid-based Puzzle Game",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: false,
    tags: ["Unity", "C#", "Programming", "UI", "Game Jam"],
    thumbnail: "/projects/PerfectPrincess/PerfectPrincessPlan16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 6,
    title: "All Lawyers Go To Hell",
    description: "Narrative Case-building",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: false,
    tags: ["Unity", "C#", "Programming", "UI", "Game Jam"],
    thumbnail: "/projects/AllLawyers/AllLawyers16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 7,
    title: "Tom the Bomb Gets a Haircut",
    description: "Sidescrolling Speedrun Platformer",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: false,
    tags: ["Unity", "C#", "Programming", "UI", "UX", "Production"],
    thumbnail: "/projects/TomTheBomb/TomTheBomb16x9.webp",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 8,
    title: "This Website",
    description: "Meta Project",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: true,
    tags: ["React", "JSX", "HTML", "Programming", "UI"],
    thumbnail: "/projects/MAGE/MageLogoHorizontalHQ.png",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
];
