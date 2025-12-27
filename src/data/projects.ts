// src/data/projects.ts

// Cada imagen es una entidad semántica completa.
// Imagen y descripción no pueden desincronizarse.

export interface ProjectImage {
  src: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Project 1",
    description:
      "A concise architectural proposal focused on intent, constraints, and outcome...",
    images: [
      {
        src: "/projects/project-01.jpg",
        description:
          "Primary volume: establishes the spatial language of the project through controlled proportions and a restrained geometry that anchors it to its context.",
      },
      {
        src: "/projects/project-01b.jpg",
        description:
          "Transition space: explores the threshold between interior and exterior, using material continuity and filtered natural light to guide movement.",
      },
      {
        src: "/projects/project-01c.jpg",
        description:
          "Facade study: modulation strategy balancing privacy and openness in response to environmental and programmatic constraints.",
      },
    ],
  },
  {
    id: "p2",
    title: "Project 2",
    description:
      "A visual-first project where spatial clarity replaces ornament as the main narrative device.",
    images: [
      {
        src: "/projects/project-02.jpg",
        description:
          "Overall massing: the composition prioritizes legibility and hierarchy over formal complexity.",
      },
      {
        src: "/projects/project-02b.jpg",
        description:
          "Interior perspective: structural rhythm defines circulation and frames the user’s experience.",
      },
      {
        src: "/projects/project-02c.jpg",
        description:
          "Detail view: material junctions reveal the project’s emphasis on precision and constructive logic.",
      },
    ],
  },
  {
    id: "p3",
    title: "Project 3",
    description:
      "Less decoration, more structure. An exercise in reduction and spatial discipline.",
    images: [
      {
        src: "/projects/project-03.jpg",
        description:
          "Exterior view: the building reads as a clear structural system rather than an object of spectacle.",
      },
      {
        src: "/projects/project-03b.jpg",
        description:
          "Sectional moment: vertical relationships clarify program distribution and scale.",
      },
      {
        src: "/projects/project-03c.jpg",
        description:
          "Interior detail: circulation is treated as an experiential sequence, not a leftover space.",
      },
    ],
  },
  {
    id: "p4",
    title: "Project 4",
    description:
      "A system-level solution developed as a coherent whole rather than a collection of isolated features.",
    images: [
      {
        src: "/projects/project-04.jpg",
        description:
          "Global view: the project operates as a unified system with consistent spatial rules.",
      },
      {
        src: "/projects/project-04b.jpg",
        description:
          "Intermediate scale: repetition and variation are used to maintain order without monotony.",
      },
      {
        src: "/projects/project-04c.jpg",
        description:
          "Human-scale moment: the system resolves into spaces that prioritize usability and comfort.",
      },
    ],
  },
];
