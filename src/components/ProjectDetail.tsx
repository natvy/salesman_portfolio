// src/components/ProjectDetail.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Project } from "../data/projects";

interface ProjectDetailProps {
  initialId: string;
  projects: Project[];
}

const WHEEL_THRESHOLD = 300; //valor para sensibilidad del scroll

export default function ProjectDetail({ initialId, projects }: ProjectDetailProps) {
  const router = useRouter();

  const initialIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === initialId)
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const wheelAccumulator = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const project = projects[currentIndex];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  // Captura de wheel: NO scroll real
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelAccumulator.current += e.deltaY;

      if (wheelAccumulator.current > WHEEL_THRESHOLD) {
        setCurrentIndex((i) => (i + 1) % projects.length);
        wheelAccumulator.current = 0;
      }

      if (wheelAccumulator.current < -WHEEL_THRESHOLD) {
        setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
        wheelAccumulator.current = 0;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [projects.length]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-6 py-10">
      {/* PANEL IZQUIERDO */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 font-semibold"
        >
          ← Back
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-gray-700 mt-4">{project.description}</p>

            {/* Mini-galería secundaria */}
            <div className="flex gap-4 overflow-x-auto mt-6">
              {project.images.map((img, i) => (
                <div key={i} className="w-24 h-24 flex-shrink-0">
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
        </AnimatePresence>
      </div>

      {/* PANEL DERECHO — CARRUSEL CONTROLADO */}
      <div
        ref={containerRef}
        className="lg:w-2/3 mt-10 lg:mt-0 lg:ml-6 flex flex-col items-center justify-center relative h-[70vh] select-none"
      >
        {/* Proyecto anterior */}
        <motion.div
          key={`prev-${prevProject.id}`}
          className="absolute"
          animate={{ y: -260, scale: 0.75 }}
          transition={{ duration: 0.7 }} //velocidad de trancision, preguntar a diego
        >
          <Image
            src={prevProject.image}
            alt={prevProject.title}
            width={700}
            height={450}
            className="rounded-md object-cover"
          />
        </motion.div>

        {/* Proyecto actual — EL ÚNICO REAL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            layoutId={`project-image-${project.id}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="z-10"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={550}
              className="rounded-md object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Proyecto siguiente */}
        <motion.div
          key={`next-${nextProject.id}`}
          className="absolute"
          animate={{ y: 260, scale: 0.75 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src={nextProject.image}
            alt={nextProject.title}
            width={700}
            height={450}
            className="rounded-md object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
