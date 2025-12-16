// src/components/ProjectDetail.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Project } from "../data/projects"; // Asegúrate de que Project esté tipado correctamente


interface ProjectDetailProps {
  projects: Project[];
  initialId: string;
}

export default function ProjectDetail({
  projects,
  initialId,
}: ProjectDetailProps) {
  const router = useRouter();

  // Estado del proyecto activo
  const initialIndex = projects.findIndex((p) => p.id === initialId);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const project = projects[currentIndex];

  // Estado de la imagen principal
  const [mainImage, setMainImage] = useState<string>(project.images[0]);

  // Para evitar cambios múltiples con un solo scroll rápido
  const scrollLocked = useRef(false);

  // Actualiza la imagen principal cuando cambie el proyecto
  useEffect(() => {
    setMainImage(project.images[0]);
  }, [currentIndex]);

  // Manejo del scroll vertical
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollLocked.current) return;
    if (e.deltaY > 100 && currentIndex < projects.length - 1) {
      scrollLocked.current = true;
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => (scrollLocked.current = false), 500); // lock para animación
    } else if (e.deltaY < -100 && currentIndex > 0) {
      scrollLocked.current = true;
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => (scrollLocked.current = false), 500);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row px-6 py-10 overflow-hidden"
      onWheel={handleScroll}
    >
      {/* Panel izquierdo */}
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/3 flex flex-col gap-6"
      >
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
      </motion.div>

      {/* Imagen principal */}
      <div className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-6 flex justify-center items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainImage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Image
              src={mainImage}
              alt={project.title}
              width={800}
              height={500}
              className="rounded-md object-cover w-full h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
