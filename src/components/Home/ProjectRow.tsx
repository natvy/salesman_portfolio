// src/components/Projects/ProjectRow.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@/data/projects";
import ProjectExpanded from "./ProjectExpanded";

interface ProjectRowProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}

export default function ProjectRow({
  project,
  expanded,
  onToggle,
}: ProjectRowProps) {
  // Mientras la animación de alto corre, necesitamos overflow-hidden
  // (si no, el contenido se desborda de golpe en vez de "crecer").
  // Pero ya reposado y abierto, necesitamos overflow-visible para que
  // la galería pueda romper los límites horizontales del layout.
  const [allowOverflow, setAllowOverflow] = useState(false);

  return (
    <>
      {/* Fila principal */}

      <motion.div
        layout
        className="
          border-b
          border-black
          hover:bg-neutral-50
          transition-colors
        "
      >
        <div
          className="
    grid
    grid-cols-[1fr_1.3fr_1.2fr_1.6fr]
    gap-6
    sm:gap-10
    items-center

    px-4
    sm:px-6
    py-2
    sm:py-2.5
  "
        >
          {/* Botón + Proyecto (juntos) */}
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onToggle}
              className="
        flex
        items-center
        justify-center

        w-6
        h-6

        text-lg
        font-light

        transition-transform
        hover:scale-110
      "
            >
              {expanded ? "−" : "+"}
            </button>

            <h3 className="min-w-0 text-sm font-normal uppercase truncate">
              {project.title}
            </h3>
          </div>

          {/* Tipo */}
          <div className="min-w-0 text-sm text-neutral-700 truncate">
            {project.type}
          </div>

          {/* Estado */}
          <div className="min-w-0 text-sm text-neutral-700 truncate">
            {project.status}
          </div>

          {/* Ubicación + Año (juntos) */}
          <div className="flex items-center justify-end gap-3 min-w-0">
            <div className="min-w-0 text-sm text-neutral-700 truncate">
              {project.location}
            </div>
            <div className="text-sm text-neutral-700 shrink-0">
              {project.year}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Panel desplegable */}

      <AnimatePresence
        initial={false}
        onExitComplete={() => setAllowOverflow(false)}
      >
        {expanded && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            onAnimationStart={() => setAllowOverflow(false)}
            onAnimationComplete={() => setAllowOverflow(true)}
            style={{ overflow: allowOverflow ? "visible" : "hidden" }}
          >
            <ProjectExpanded project={project} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
