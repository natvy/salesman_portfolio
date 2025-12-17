// src/components/ProjectDetail.tsx

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Project } from "../data/projects";
import React from "react";


interface ProjectDetailProps {
  initialId: string;
  projects: Project[];
}

export default function ProjectDetail({
  initialId,
  projects,
}: ProjectDetailProps) {
  const router = useRouter();

  const initialProjectIndex =
    projects.findIndex((p) => p.id === initialId) || 0;

  const [projectIndex, setProjectIndex] = useState(initialProjectIndex);
  const [imageIndex, setImageIndex] = useState(0);

  const wheelLock = useRef(false);
  const SCROLL_THRESHOLD = 80;

  const project = projects[projectIndex];
  const images = project.images;
  const activeImage = images[imageIndex];

  /* -----------------------------
     Scroll vertical → proyecto
  ------------------------------ */
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  if (wheelLock.current) return;
  if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

  wheelLock.current = true;
  setTimeout(() => (wheelLock.current = false), 350);

  if (e.deltaY > 0) {
    setProjectIndex((i) => (i + 1) % projects.length);
  } else {
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  }
};

  /* Reset imagen al cambiar proyecto */
  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  /* -----------------------------
     Swipe horizontal → imagen
  ------------------------------ */
  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -80 && imageIndex < images.length - 1) {
      setImageIndex((i) => i + 1);
    }
    if (info.offset.x > 80 && imageIndex > 0) {
      setImageIndex((i) => i - 1);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row px-6 py-10"
      onWheel={handleWheel}
    >
      {/* PANEL IZQUIERDO */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 font-semibold w-fit"
        >
          ← Back
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-gray-700">{project.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* MINI GALERÍA */}
        <div className="flex gap-4 overflow-x-auto pt-2">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setImageIndex(i)}
              className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border transition
                ${
                  i === imageIndex
                    ? "border-black"
                    : "border-transparent opacity-80"
                }`}
            >
              <Image
                src={img}
                alt={`${project.title} ${i}`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* PANEL DERECHO – VISOR */}
      <div className="lg:w-2/3 mt-8 lg:mt-0 lg:ml-8 flex justify-center items-center">
        <div className="w-full max-w-4xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${imageIndex}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="cursor-grab active:cursor-grabbing"
            >
              <Image
                src={activeImage}
                alt={project.title}
                width={1600}
                height={900}
                className="rounded-md object-cover w-full h-auto"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}