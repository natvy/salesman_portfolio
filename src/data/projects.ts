// Cada imagen es una entidad semántica completa.
// Imagen y descripción no pueden desincronizarse.

export interface ProjectImage {
  src: string;
  description: string;
}

export type ProjectCategory =
  | "architecture"
  | "visual"
  | "experimental";

export type ProjectType =
  | "Casa habitación"
  | "Condominio"
  | "Comercial"
  | "Museo"
  | "Hotel"
  | "Urbanismo"
  | "Concurso";

export type ProjectStatus =
  | "Anteproyecto"
  | "Proyecto Ejecutivo"
  | "Construido";

export interface Project {

    id:string;

    title:string;

    subtitle:string;

    description:string;

    category:ProjectCategory;

    type:ProjectType;

    status:ProjectStatus;

    location:string;

    year:number;

    images:ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "casa-abuelos",

    title: "Casa Abuelos",

    subtitle: "Residencia unifamiliar",

    description:
      "Proyecto residencial concebido como una exploración de la relación entre paisaje, materialidad y proporción.",

    category: "architecture",

    type: "Casa habitación",

    status: "Anteproyecto",

    location: "Magdalena, Sonora, México",

    year: 2026,

    images: [
      {
        src: "/projects/project-01.jpg",
        description:
          "Vista principal del proyecto donde se aprecia la volumetría general."
      },
      {
        src: "/projects/project-01b.jpg",
        description:
          "Interior del área social mostrando la continuidad espacial."
      },
      {
        src: "/projects/project-01c.jpg",
        description:
          "Detalle de fachada y composición material."
      }
    ]
  },

  {
    id: "casa-lopez",

    title: "Casa López",

    subtitle: "Residencia con patio central",

    description:
      "Residencia desarrollada a partir de una composición lineal y patios interiores.",

    category: "architecture",

    type: "Casa habitación",

    status: "Proyecto Ejecutivo",

    location: "Hermosillo, Sonora, México",

    year: 2024,

    images: [
      {
        src: "/projects/project-02.jpg",
        description:
          "Vista exterior donde se aprecia la relación entre los volúmenes."
      },
      {
        src: "/projects/project-02b.jpg",
        description:
          "Área social abierta conectando el interior con el patio."
      },
      {
        src: "/projects/project-02c.jpg",
        description:
          "Estudio de iluminación natural en los espacios principales."
      }
    ]
  },

  {
    id: "casa-bosque",

    title: "Casa Bosque",

    subtitle: "Vivienda de descanso",

    description:
      "Una propuesta enfocada en la integración con el paisaje mediante materiales naturales y una implantación respetuosa.",

    category: "architecture",

    type: "Casa habitación",

    status: "Anteproyecto",

    location: "Arteaga, Coahuila, México",

    year: 2027,

    images: [
      {
        src: "/projects/project-03.jpg",
        description:
          "Perspectiva general mostrando la integración con el entorno."
      },
      {
        src: "/projects/project-04.jpg",
        description:
          "Interior donde predominan la madera y la iluminación natural."
      },
      {
        src: "/projects/project-04b.jpg",
        description:
          "Vista aérea explicando la implantación del proyecto."
      }
    ]
  }
];