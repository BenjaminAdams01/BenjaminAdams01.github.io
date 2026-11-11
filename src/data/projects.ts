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
        points: [
          "Oversaw the design of each of the Mages",
          "Created each of the locations for the game",
          "Designed over 100 of the game’s maps",
        ],
        image: "/projects/MAGE/MAGE16x9.webp",
        imageAlt: "MAGE Design Image",
        text: "I was a part of the design for MAGE since the very beginning. Alex and I designed and programmed the original prototype for the game together. Since the start of development, I helped figure out each of the Mages and fully took on the role of creating maps for the game. I also suggested screenwrapping as a main focus for the maps, as we ran into an issue of players camping.",
      },
      {
        id: "programming",
        label: "Programming",
        points: [
          "Implemented a lot of polish, including particles, wand recoil, and hit effects",
          "Championed the creation of all UI based scenes",
          "Created stat trackers for player actions in the game",
          "Integrated the effects of an Options menu and a Modifier menu",
          "Constructed a control remapping system to work with most input devices",
        ],
        text: "A lot of my time spent working on MAGE was on programming the UI for the game. However, I did a good amount of backend stuff, working with Alex’s gameplay scripts to connect UI and Stat Tracking to his code. A lot of refactoring had to be done throughout the project, since this was our first game. I enjoyed learning a lot from working on MAGE and it has made my future game projects a lot easier.",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [
          "Created a custom Button component for complete control over UI states",
          "Applied Unity’s Animator component to all UI elements for smooth movements",
          "Implemented player health UI above the player and in the corners",
          "Iterated upon our Tutorial to make it clear, fast, and easy",
          "Streamlined player swapping through a UI based Mage swap system",
        ],
        text: "MAGE was the first game that I created UI for, and it took a long time to figure out how each screen should be done. The player setup screen took many iterations in order to properly convey the necessary information to the player. The in-game UI also took many iterations to get right since I was not sure what might get in the way. I also worked hard to make sure the experience felt smooth, so there are not any unnecessary screens in the game.",
      },
      {
        id: "art",
        label: "Pixel Art",
        points: [
          "Illustrated environment art for every level and screen in the game",
          "Created the sprites for the Mages as well as most of their hats",
          "Learned UV shaders for cool scrolling and wavy effects",
          "Designed my own custom pixel art fonts for the game",
          "Produced cover art and promotional art for marketing",
        ],
        text: "Before MAGE, I would not call myself a pixel artist. I had done a bit for some small projects but I was not good enough to use any of it for bigger projects. We had no artist for MAGE, and I decided that I needed to make the game look good so we could show it off to people in a more polished state. I started with tilesets and background art, which I slowly got better at over time. Eventually I tackled the Mages themselves and even figured out how to animate a character sprite so they would not be capsules. I also did all of the pixel art for the UI, and made a huge spritesheet for controller icons.",
      },
      {
        id: "steam",
        label: "Steamworks",
        points: [
          "Learned the interface of Steamworks to edit product settings",
          "Implemented Stats and 66 Achievements directly into the game",
          "Created art assets for all Achievements",
          "Worked with Steam’s server system to help implement online play",
        ],
        text: "This was another first for me, working directly with Steamworks to create features for players. It was very exciting for me since I have played a ton of games on Steam, and getting to create my very own achievements felt very special. Working to create online play was incredibly difficult. Alex and I worked on it day and night to get it ready before release. I mostly created events that could be shared across hosts and clients to send data.",
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
    video: "https://www.youtube.com/embed/gURgiWKomqw",
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
