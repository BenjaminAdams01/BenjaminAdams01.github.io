export interface Contribution {
  id: string;
  label: string;
  image?: string;
  imageAlt?: string;
  points: string[];
  text: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  contributions: Contribution[];
  featured: boolean;
  tags: string[];
  thumbnail: string;
  screenshots: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MAGE",
    description: "Magic 2D Projectile Fighter",
    longDescription:
      "MAGE: Mega Awesome Gregarious Encounters is an action-packed 2D projectile fighter. You can unlock and play 21 different Mages, each with their own unique mechanics. There are 10 different levels, each with 20 layouts, totalling to 200 completely unique playing fields.\nMAGE started as a fun concept with super basic mechanics in 2024. In 2025, Alex Weiswasser, Harry Tomasco, Max Totten, and I founded FunRug Studio and in 2026 we released MAGE onto Steam. I was super proud of being able to release a finished product onto Steam, and I learned so much from working on it for two years.",
    contributions: [
      {
        id: "design",
        label: "Design",
        points: ["AAA", "BBB"],
        image: "/projects/MAGE/MAGE16x9.webp",
        imageAlt: "MAGE Design Image",
        text: "AAAAAAAAAAAA",
      },
      {
        id: "programming",
        label: "Programming",
        points: [""],
        text: "",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [""],
        text: "",
      },
      {
        id: "art",
        label: "Pixel Art",
        points: [""],
        text: "",
      },
      {
        id: "steam",
        label: "Steamworks",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [""],
        text: "",
      },
    ],
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
