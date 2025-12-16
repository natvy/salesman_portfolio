// src/components/ProjectDetail.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Project } from "../data/projects"; // Asegúrate de que Project esté tipado correctamente

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  const [mainImage, setMainImage] = useState<string>(project.images[0]); // primera imagen

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-6 py-10">
      {/* Panel izquierdo */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 font-semibold"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-700">{project.description}</p>

        {/* Carrusel de imágenes secundarias */}
        <div className="flex gap-4 overflow-x-auto">
          {project.images.map((img: string, i: number) => (
            <div
              key={i}
              className="flex-shrink-0 w-24 h-24 cursor-pointer"
              onClick={() => setMainImage(img)}
            >
              <Image
                src={img}
                alt={`${project.title} ${i}`}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Imagen principal */}
      <div className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-6 flex justify-center items-start">
        <motion.div layoutId={`project-image-${project.id}`}>
          <Image
            src={mainImage}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-md object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
