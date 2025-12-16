

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Project One",
    description:
      "A concise description focused on intent, constraints, and outcome.",
    image: "/projects/project-01.jpg",
    images: [
      "/projects/project-01.jpg",
      "/projects/project-01b.jpg",
      "/projects/project-01c.jpg"
    ],
  },
  {
    id: "p2",
    title: "Project Two",
    description:
      "Visual-first project. The image carries most of the narrative.",
    image: "/projects/project-02.jpg",
    images: [
      "/projects/project-02.jpg",
      "/projects/project-02b.jpg",
      "/projects/project-02c.jpg"
    ],
  },
  {
    id: "p3",
    title: "Project Three",
    description:
      "Less decoration, more structure. Clarity over spectacle.",
    image: "/projects/project-03.jpg",
    images: [
      "/projects/project-03.jpg",
      "/projects/project-03b.jpg",
      "/projects/project-03c.jpg"
    ],
  },
  {
    id: "p4",
    title: "Project Four",
    description:
      "A system-level solution, not a one-off feature.",
    image: "/projects/project-04.jpg",
    images: [
      "/projects/project-04.jpg",
      "/projects/project-04b.jpg",
      "/projects/project-04c.jpg"
    ],
  },
];
