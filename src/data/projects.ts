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
  // MARK:- MAGE
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
      "/projects/MAGE/mage_sc_01.webp",
      "/projects/MAGE/mage_sc_02.webp",
      "/projects/MAGE/mage_sc_03.webp",
      "/projects/MAGE/mage_sc_04.webp",
      "/projects/MAGE/mage_sc_05.webp",
      "/projects/MAGE/mage_sc_06.webp",
      "/projects/MAGE/mage_sc_07.webp",
      "/projects/MAGE/mage_sc_08.webp",
      "/projects/MAGE/mage_sc_09.webp",
    ],
    video: "https://www.youtube.com/embed/gURgiWKomqw",
  },
  // MARK:- Fish Party
  {
    id: 2,
    title: "Fish Party",
    description: "12 Player Party Game",
    longDescription:
      "Fish Party is a 12-Player Party game where everyone gets to play as fish in an ecosystem. It only takes one button for a player to join and play. So, even if you only have a few controllers, you can have people share a controller and get everyone in the game! The original design was made by Max Totten, and FunRug decided to take the prototype and build a full game out of it.",
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [
          "Refined existing fish concepts to fit the new project",
          "Iterated upon existing Tutorial and Teaching concepts",
          "Designed possible unlocking systems for the final product",
          "Researched specific fish species that best fit gameplay concepts",
        ],
        text: "Since the original concept for Fish Party already existed before we picked it up to work on, the design work that I have done for Fish Party is mostly on teaching the player and approving concepts from the other designers, Harry Tomasco and Max Totten. I have designed systems that deal with the player experience and polish, including the current Tutorial system.",
      },
      {
        id: "programming",
        label: "Programming",
        points: [
          "Assembled a unique Input System to allow for reliable player control",
          "Implemented a 12 player joining system with one-button renaming",
          "Upgraded my Options Menu and Save System from MAGE using Inheritance",
          "Improved my Button component with DOTween functionality",
          "Created Rule Tile swapping functionality for building Algae Walls",
        ],
        text: "I did a lot more backend programming for Fish Party than I did for MAGE. My job at the start of the project was to make a special input system for the game that just took in every input that the game registered and parse that into a joining system that worked with a player data class to manage players. I also worked on UI programming a lot, creating a really cool menu system.",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [
          "Created a seamless menu system using World Canvases",
          "Refined an old Tutorial to show live video of gameplay",
          "Implemented a tidy menu for players to join, rename, and leave",
          "Added a scalable options menu with Audio, Video, Gameplay, and Accessibility settings",
          "Tested with many playtesters to improve the Tutorial and UI",
        ],
        text: "From finishing MAGE to working on Fish Party, I realized that the majority of work that I had done for both games was on making sure everything around the gameplay works and is polished. Of course, I am a game designer at heart, but part of game design is making sure the players have the best version of the experience you want them to have. If no one else on my team is going to improve the UI/UX, then that will be my job.",
      },
      {
        id: "art",
        label: "Pixel Art",
        points: [
          "Illustrated over a dozen different fish species",
          "Created environment art for each location",
          "Instructed another pixel artist on tilemap specifics",
          "Concepted multiple iterations of the Fish Party Logo",
          "Worked with a specific palette for the project",
        ],
        text: "I expected to be working on a lot of pixel art for Fish Party after I worked on MAGE and Little Cowboy. It has been nice to know that the art that I create will not need to be redone later in development. I still think that I have a long way to go if I want to do pixel art commercially, but I think people can look at my projects and not be appalled by the art.",
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
      "/projects/FishParty/fish_sc_01.webp",
      "/projects/FishParty/fish_sc_02.webp",
      "/projects/FishParty/fish_sc_03.webp",
      "/projects/FishParty/fish_sc_04.webp",
      "/projects/FishParty/fish_sc_05.webp",
      "/projects/FishParty/fish_sc_06.webp",
    ],
    video: "https://www.youtube.com/embed/Wvt8fark2Hs?si=YedZEm02cCucZfD6",
  },
  // MARK:- Assist Mode
  {
    id: 3,
    title: "Assist Mode",
    description: "2D Point & Click Puzzle Platformer",
    longDescription:
      "Assist Mode is a single-player puzzle platformer where the player uses keyboard controls to move a platforming character and mouse controls to place platforms. There is a short narrative through a dialog and inspection system. The two characters, Alan and Eve, are set apart in a research facility with Alan’s goal being finding Eve’s location in the facility. Eve assists Alan through a drone which the player controls with the mouse. I made this game for a class project, with the design coming from a previous assignment which I chose to program for the final project.",
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [
          "Wrote an extensive Design Document covering all aspects of the game",
          "Illustrated multiple VDDs to explain various mechanics",
          "Constructed flowcharts to convey game loops and level maps",
          "Wrote over a hundred lines of dialog for the narrative",
          "Created dozens of puzzle screens for the player to solve",
        ],
        text: "Since I was the only developer on this project, I was in control of all of the design over the game. I got to write up all of the mechanics and story for the game prior to development as well as find the target audience and define the gameplay experience. Making VDDs was a nice experience and it came together to a nice big document I could show to explain my game. I spent a good amount of personal time developing this game while MAGE was still in early development (before FunRug even existed!).",
      },
      {
        id: "programming",
        label: "Programming",
        points: [
          "Implemented a physics-based 2D character controller",
          "Invented a system to place gameobjects on a grid and check for blockers",
          "Optimized rule tiles to batch to save load time",
        ],
        text: "Since I also had to program all of the gameplay systems myself, I had to look up a lot and learn how to do a bunch of different things. I learned about UnityEvents here, which later translated to event actions and event buses. That was critical for MAGE’s networking. I also learned that singletons are evil and static classes are beautiful.",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [
          "Created many onscreen popups to show how to play the game",
          "Implemented an easily modifiable dialog system for immersive dialog",
          "Designed an inspection system to let the players discover what they want",
        ],
        text: "I struggled a lot with how I should deliver the narrative to the player because my original system of having the player controllable while dialog plays was flawed. Solving puzzles and reading dialog does not work at the same time. I eventually settled on specific cutscenes with a system to let the player click on objects to get dialog. This was important to let players play how they wanted.",
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
      "/projects/AssistMode/assist_sc_01.webp",
      "/projects/AssistMode/assist_sc_02.webp",
      "/projects/AssistMode/assist_sc_03.webp",
      "/projects/AssistMode/assist_sc_04.webp",
      "/projects/AssistMode/assist_sc_05.webp",
      "/projects/AssistMode/assist_sc_06.webp",
      "/projects/AssistMode/assist_sc_07.webp",
      "/projects/AssistMode/assist_sc_08.webp",
      "/projects/AssistMode/assist_sc_09.webp",
      "/projects/AssistMode/assist_sc_10.webp",
    ],
  },
  // MARK:- Little Cowboy
  {
    id: 4,
    title: "GMTK 2026: Little Cowboy",
    description: "Top-Down Twin-Stick Roguelike",
    longDescription:
      "Little Cowboy is a mini roguelike twin-stick shooter where each chamber in your revolver can be modified to shoot a unique bullet. The game was made for the 2026 GMTK Game Jam, where we ended with 171 ratings and ranked 653 out of 10,000 entries on enjoyment. I mainly worked on the UI and Level Design for this game.",
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [
          "Concepted the original idea for the game",
          "Built 4 Unique semi-randomly generated levels with scaling difficulty",
          "Created a simple Tutorial for players to learn safely",
        ],
        text: "The level design for Little Cowboy involved the use of a grid-based structure where different level pieces could be slotted in to easily make unique levels. I spent a lot of time in-engine creating a ton of prefabs for the three sizes of level pieces that I decided on. I ended up not sticking strictly to a grid for placing the level pieces, which makes the levels feel a bit more natural.",
      },
      {
        id: "programming",
        label: "Programming",
        points: [
          "Programmed a system to place random level pieces in designated areas",
          "Implemented damage popups and health pickups",
          "Co-developed bullet management to work with UI",
        ],
        text: "This was a game jam where we did not really have a dedicated artist, so while I was not doing pixel art, I focused on my usual tasks of getting the UI working. I also was in charge of level design, so I programmed that whole system myself. I am pretty proud of the neat level piece idea we used because it is a very innovative way to use tilemaps.",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [
          "Created a customizable rotating bullet chamber display",
          "Implemented text explaining each bullet when they appear",
          "Formed the UI allowing players to swap out their bullets",
        ],
        text: "I am really proud of the rotating bullet chamber that I created, mostly because it took me forever to make the bullet items drag and drop properly to their correct locations. I also had to update the backend code with what bullet was placed where and make sure it was aligned to what the UI was displaying.",
      },
      {
        id: "art",
        label: "Pixel Art",
        points: [
          "Created the Little Cowboy character sprite",
          "Illustrated a dozen tiles to be used in level design",
          "Created two pieces of cover art for the game",
        ],
        text: "This was the first game where I actually used a palette for my art and it felt good to see everything come together. The game ended up much more colorful than if I had just used whatever color I thought would be best. I especially like how the main cover art came out and the logo, while simple, is something I am proud of.",
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
      "/projects/LittleCowboy/cowboy_sc_01.webp",
      "/projects/LittleCowboy/cowboy_sc_02.webp",
      "/projects/LittleCowboy/cowboy_sc_03.webp",
      "/projects/LittleCowboy/cowboy_sc_04.webp",
      "/projects/LittleCowboy/cowboy_sc_05.webp",
      "/projects/LittleCowboy/cowboy_sc_06.webp",
      "/projects/LittleCowboy/cowboy_sc_07.webp",
      "/projects/LittleCowboy/cowboy_sc_08.webp",
      "/projects/LittleCowboy/cowboy_sc_09.webp",
    ],
  },
  // MARK:- Perfect Princess
  {
    id: 5,
    title: "Perfect Princess Plan",
    description: "Grid-based Puzzle Game",
    longDescription:
      "Perfect Princess Plan is a singleplayer puzzle game where you must help a princess perform perfect pathing to her prince. The central mechanic revolves around dragging masks to dummies to set up a turn-based conveyor-like sequence. This game was made in 48 hours for the Global Game Jam 2026. You can play a version of the game on itch.io today! Just be warned: the puzzles get pretty preposterous!",
    contributions: [
      {
        id: "programming",
        label: "Programming",
        points: [
          "Programmed a data system to save and unlock levels",
          "Worked with imported art assets to apply them to gameobjects",
          "Modified gameplay code to be flexible with art assets",
        ],
        text: "I mostly worked on programming the UI and getting the different levels to load. I made an entire system for translating button clicks to load specific scenes based on unlock data. We ran into a lot of build issues at the end, which we managed to fix a bit after the deadline.",
      },
      {
        id: "ui",
        label: "UI",
        points: [
          "Implemented mask dragging from canvas to world sprites",
          "Created smooth transitions between levels with a curtain wipe",
          "Designed a map menu for choosing which levels to play",
        ],
        text: "The UI for this game ended up being pretty troublesome, as we had to resize the game space using a camera to render the grid spaces at a larger size. This meant that dragging the masks onto the pieces had to go through a render texture to work. Hopefully we never design a game to block ourselves like this again!",
      },
    ],
    featured: false,
    tags: ["Unity", "C#", "Programming", "UI", "Game Jam"],
    thumbnail: "/projects/PerfectPrincess/PerfectPrincessPlan16x9.webp",
    screenshots: [
      "/projects/PerfectPrincess/princess_sc_01.webp",
      "/projects/PerfectPrincess/princess_sc_02.webp",
      "/projects/PerfectPrincess/princess_sc_03.webp",
      "/projects/PerfectPrincess/princess_sc_04.webp",
      "/projects/PerfectPrincess/princess_sc_05.webp",
      "/projects/PerfectPrincess/princess_sc_06.webp",
      "/projects/PerfectPrincess/princess_sc_07.webp",
    ],
  },
  // MARK:- All Lawyers
  // {
  //   id: 6,
  //   title: "All Lawyers Go To Hell",
  //   description: "Narrative Case-building",
  //   longDescription:
  //     "This is a much longer Description for Project 3. It consists of multiple sentences",
  //   contributions: [
  //     {
  //       id: "design",
  //       label: "Design",
  //       points: [""],
  //       text: "",
  //     },
  //   ],
  //   featured: false,
  //   tags: ["Unity", "C#", "Programming", "UI", "Game Jam"],
  //   thumbnail: "/projects/AllLawyers/AllLawyers16x9.webp",
  //   screenshots: [
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //   ],
  // },
  // MARK:- Tom The Bomb
  {
    id: 7,
    title: "Tom the Bomb Gets a Haircut",
    description: "Sidescrolling Speedrun Platformer",
    longDescription:
      "Tom the Bomb Gets a Haircut is a 2D sidescrolling speedrun platformer where you play as a bomb with a lit fuse. The game includes a tutorial and three unique levels to play. This game was made as a class project in my Sophomore year. We were a team of 4 developers, with me as the designer. You can play the game on itch.io today!",
    contributions: [
      {
        id: "design",
        label: "Design",
        points: [
          "Produced an extensive design document covering Game Direction, Target Audience, and all Gameplay Systems",
          "Illustrated a full VDD displaying how all mechanics should function",
          "Built multiple levels balanced around player skill and a limited timer",
          "Adjusted game feel based on playtester feedback",
        ],
        text: "This is the first project where I made a GDD designed for a team to reference and read. I made sure to include my visual diagrams in the document itself so it was clearer what the programmer and artist should be doing their work based on. It ended up being pretty helpful to the team, based on the feedback that they gave me.",
      },
      {
        id: "programming",
        label: "Programming",
        points: [
          "Implemented a simple scene loading system",
          "Created a vertical parallax ocean background",
          "Optimized collision detection for player collision with crates",
          "Implemented peer-made art assets and sound assets",
        ],
        text: "My job for this project was not actually to be a programmer, but there are a lot of things I can do that can give time to a dedicated programmer. Most of my programming work was fixing bugs and adding polish.",
      },
      {
        id: "ui",
        label: "UI/UX",
        points: [
          "Implemented dynamic timer UI and a game over screen",
          "Created a simple Tutorial showcasing each of our mechanics",
          "Added effects for running out of time and breaking crates",
          "Built a rope as the fuse to follow the player character",
        ],
        text: "This was a relatively small project and it was not very UI heavy, so I focused more and got some polish in as well as cleaning up some art assets. I could not split my time so thin so I made some simple UI and worked on making more levels for the player to play through.",
      },
      {
        id: "production",
        label: "Production",
        points: [
          "Produced weekly slideshows to present in front of my peers",
          "Held weekly sprint meetings with my team to address workload and scope",
          "Managed tasks in Jira and configured our Confluence tree",
        ],
        text: "I am not a dedicated producer but we did not have one for this project so I made sure that we had the organization that we needed. I spent a lot of time gathering gifs for our slideshows so that our peers could see the progress that we were making. I found it kind of useful as a designer to be forced to explain our game to people who were unaware.",
      },
    ],
    featured: false,
    tags: ["Unity", "C#", "Design", "Programming", "UI", "UX", "Production"],
    thumbnail: "/projects/TomTheBomb/TomTheBomb16x9.webp",
    screenshots: [
      "/projects/TomTheBomb/bomb_sc_01.webp",
      "/projects/TomTheBomb/bomb_sc_02.webp",
      "/projects/TomTheBomb/bomb_sc_03.webp",
      "/projects/TomTheBomb/bomb_sc_04.webp",
      "/projects/TomTheBomb/bomb_sc_05.webp",
      "/projects/TomTheBomb/bomb_sc_06.webp",
      "/projects/TomTheBomb/bomb_sc_07.webp",
      "/projects/TomTheBomb/bomb_sc_08.webp",
      "/projects/TomTheBomb/bomb_sc_09.webp",
    ],
  },
  // MARK:- This Website
  // {
  //   id: 8,
  //   title: "This Website",
  //   description: "Meta Project",
  //   longDescription:
  //     "This is a much longer Description for Project 3. It consists of multiple sentences",
  //   contributions: [
  //     {
  //       id: "design",
  //       label: "Design",
  //       points: [""],
  //       text: "",
  //     },
  //   ],
  //   featured: true,
  //   tags: ["React", "JSX", "HTML", "Programming", "UI"],
  //   thumbnail: "/projects/MAGE/MageLogoHorizontalHQ.png",
  //   screenshots: [
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //     "/projects/MAGE/MageLogoHorizontalHQ.png",
  //   ],
  // },
];
