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
    description: "This is Project 1",
    longDescription:
      "This is a much longer Description for Project 1. It consists of multiple sentences",
    featured: true,
    tags: ["Tag1", "Tag++"],
    thumbnail: "/projects/MAGE/MageLogoHorizontal.png",
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
    title: "Project 2",
    description: "This is Project 2",
    longDescription:
      "This is a much longer Description for Project 2. It consists of multiple sentences",
    featured: true,
    tags: ["Tag2", "Tag+-"],
    thumbnail: "/projects/MAGE/MageLogoHorizontalHQ.png",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is Project 3",
    longDescription:
      "This is a much longer Description for Project 3. It consists of multiple sentences",
    featured: false,
    tags: ["Tag3", "Tag#"],
    thumbnail: "/projects/MAGE/MageLogoHorizontalHQ.png",
    screenshots: [
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
      "/projects/MAGE/MageLogoHorizontalHQ.png",
    ],
  },
];
