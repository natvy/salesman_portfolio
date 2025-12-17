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

export default function ProjectDetail({
  initialId,
  projects,
}: ProjectDetailProps) {
  const router = useRouter();
  const initialIndex = projects.findIndex((p) => p.id === initialId);
  const [activeProjectIndex, setActiveProjectIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const verticalRef = useRef<HTMLDivElement | null>(null);
  const ITEM_HEIGHT = 500;
  const SCALE_MIN = 0.7;
  const [scrollY, setScrollY] = useState(0);

  const activeProject = projects[activeProjectIndex];

  const getCenterY = () => (verticalRef.current?.clientHeight || 0) / 2;

  const handleVerticalScroll = () => {
    if (!verticalRef.current) return;
    const scrollTop = verticalRef.current.scrollTop;
    setScrollY(scrollTop);
  };

  const handleMiniClick = (index: number) => {
    setActiveProjectIndex(index);
    setSelectedImageIndex(0); // siempre mostrar la primera imagen al cambiar de proyecto
    verticalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const container = verticalRef.current;
    container?.addEventListener("scroll", handleVerticalScroll);
    return () => container?.removeEventListener("scroll", handleVerticalScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-6 py-10">
      {/* Panel izquierdo: info y mini-galería */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 font-semibold"
        >
          ← Back
        </button>

        <div className="flex gap-4 overflow-x-auto mt-4">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className="flex-shrink-0 w-24 h-24 cursor-pointer"
              onClick={() => {
                verticalRef.current?.scrollTo({
                  top: i * ITEM_HEIGHT,
                  behavior: "smooth",
                });
                setActiveProjectIndex(i); // actualizar proyecto activo
              }}
            >
              <motion.div layoutId={`project-${proj.id}`}>
                <Image
                  src={proj.images[0]}
                  alt={proj.title}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel derecho: scroll vertical */}
      <div
        ref={verticalRef}
        className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-6 h-[80vh] overflow-y-scroll relative scroll-smooth"
      >
        <div className="relative">
          {activeProject.images.map((img, i) => {
            const itemCenter = i * ITEM_HEIGHT + ITEM_HEIGHT / 2;
            const dist = Math.abs(itemCenter - scrollY - getCenterY());
            const scale = Math.max(SCALE_MIN, 1 - dist / 1000);

            return (
              <AnimatePresence key={img}>
                <motion.div
                  key={img}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "100%",
                    scale,
                    marginBottom: 16,
                  }}
                  layoutId={`project-${activeProject.id}`} // la misma id que en la miniatura
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={img}
                    alt={`${activeProject.title}-${i}`}
                    width={800}
                    height={ITEM_HEIGHT}
                    className="object-cover w-full h-auto rounded-md"
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </div>
  );
}
