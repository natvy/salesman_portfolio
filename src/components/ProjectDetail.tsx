// src/components/ProjectDetail.tsx
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Project } from "../data/projects";

interface ProjectDetailProps {
  initialId: string;
  projects: Project[];
}

export default function ProjectDetail({ initialId, projects }: ProjectDetailProps) {
  const router = useRouter();

  const initialIndex = projects.findIndex((p) => p.id === initialId);
  const [activeProjectIndex, setActiveProjectIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const verticalRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const ITEM_HEIGHT = 500;
  const SCALE_MIN = 0.78;
  const rawScrollY = useSpring(0, { stiffness: 120, damping: 25, mass: 0.4 });

  const activeProject = projects[activeProjectIndex];
  const n = activeProject.images.length; // cantidad original

  // --- Construimos la lista extendida: [ cloneLastBlock, originalBlock, cloneFirstBlock ]
  // Esto permite el efecto visual de loop.
  const extendedImages = [
    ...activeProject.images.slice(-n), // última copia
    ...activeProject.images,           // original
    ...activeProject.images.slice(0, n) // primera copia
  ];

  const CLONE_OFFSET = n; // desplazamiento donde comienza el bloque 'real'

  const getCenterY = () => (verticalRef.current?.clientHeight || 0) / 2;

  // Al cambiar de proyecto, forzamos el scroll al bloque central (posición inicial)
  useEffect(() => {
    const container = verticalRef.current;
    if (!container) return;
    const startTop = CLONE_OFFSET * ITEM_HEIGHT;
    // posicion instantánea al cambiar de proyecto (sin animación extra)
    container.scrollTop = startTop;
    rawScrollY.set(startTop);
    setSelectedImageIndex(0);
  }, [activeProjectIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Actualiza selectedImageIndex en tiempo real durante el scroll (mapea extended -> original)
  useEffect(() => {
    const unsubscribe = rawScrollY.on("change", (value) => {
      const center = getCenterY();
      const extendedIndex = Math.round((value + center - ITEM_HEIGHT / 2) / ITEM_HEIGHT);
      // mapear a índice original (0..n-1)
      const orig = ((extendedIndex - CLONE_OFFSET) % n + n) % n;
      const clamped = Math.max(0, Math.min(n - 1, orig));
      setSelectedImageIndex(clamped);
    });
    return () => unsubscribe();
  }, [rawScrollY, n]); // eslint-disable-line react-hooks/exhaustive-deps

  // Manejo de scroll con snap al soltar (usa timeout debounce)
  const handleVerticalScroll = () => {
    const container = verticalRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    rawScrollY.set(scrollTop);

    // debounce para detectar fin de scroll
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const center = getCenterY();
      const extendedIndex = Math.round((scrollTop + center - ITEM_HEIGHT / 2) / ITEM_HEIGHT);

      // índice equivalente dentro del bloque central
      const origIndex = ((extendedIndex - CLONE_OFFSET) % n + n) % n;
      const targetExtendedIndex = CLONE_OFFSET + origIndex;

      // Snap suave hacia la posición en el bloque central
      container.scrollTo({
        top: targetExtendedIndex * ITEM_HEIGHT,
        behavior: "smooth",
      });

      setSelectedImageIndex(origIndex);
    }, 110); // 110ms tras el último evento de scroll
  };

  useEffect(() => {
    const container = verticalRef.current;
    container?.addEventListener("scroll", handleVerticalScroll, { passive: true });
    return () => {
      container?.removeEventListener("scroll", handleVerticalScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
    // dependemos de activeProjectIndex para rebind cuando cambiamos proyecto
  }, [activeProjectIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Helper para cuando se clickea una miniatura: navegar al bloque central y a la imagen deseada
  const scrollToImage = (index: number, smooth = true) => {
    const container = verticalRef.current;
    if (!container) return;
    const targetExtendedIndex = CLONE_OFFSET + index;
    container.scrollTo({
      top: targetExtendedIndex * ITEM_HEIGHT,
      behavior: smooth ? "smooth" : "auto",
    });
    rawScrollY.set(targetExtendedIndex * ITEM_HEIGHT);
    setSelectedImageIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-6 py-10">
      {/* Panel izquierdo */}
      <div className="lg:w-1/3 flex flex-col justify-start relative">
        <div className="mb-6">
          <motion.button
            onClick={() => router.push("/")}
            className="text-blue-600 font-semibold mb-4"
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ← Back
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-3xl font-bold">{activeProject.title}</h1>
              <p className="text-gray-700 mt-4">{activeProject.description}</p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeProject.id}-img-${selectedImageIndex}`}
                  className="text-gray-600 mt-6 leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {activeProject.images[selectedImageIndex]?.description}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mini-galería */}
        <div className="absolute bottom-20 left-0 flex gap-3">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              layoutId={`shared-image-${proj.id}`}
              className="flex-shrink-0 w-24 h-24 cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              }}
              onClick={() => {
                setActiveProjectIndex(i);
                // al cambiar de proyecto, scrolleamos a bloque central, imagen 0
                requestAnimationFrame(() => scrollToImage(0));
              }}
            >
              <Image
                src={proj.images[0].src}
                alt={proj.title}
                width={100}
                height={100}
                className="object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Panel derecho: contenedor con la lista extendida */}
      <div
        ref={verticalRef}
        className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-6 h-[80vh] overflow-y-scroll relative scroll-smooth"
      >
        <div className="relative">
          {extendedImages.map((imageObj, i) => {
            const itemCenter = i * ITEM_HEIGHT + ITEM_HEIGHT / 2;

            const scale = useTransform(rawScrollY, (value) => {
              const dist = Math.abs(itemCenter - value - getCenterY());
              return Math.max(SCALE_MIN, 1 - dist / 1100);
            });

            const opacity = useTransform(rawScrollY, (value) => {
              const dist = Math.abs(itemCenter - value - getCenterY());
              return Math.max(0.4, 1 - dist / 900);
            });

            // Si necesitas shared layout sólo para la primera imagen real:
            const isHeroExtended = i === CLONE_OFFSET; // primera real en bloque central

            return (
              <motion.div
                key={`${imageObj.src}-${i}`}
                layoutId={isHeroExtended ? `shared-image-${activeProject.id}` : undefined}
                style={{
                  height: ITEM_HEIGHT,
                  width: "100%",
                  scale,
                  opacity,
                  marginBottom: 20,
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                onDoubleClick={() => {
                  // ejemplo: doble click centra esta imagen (útil en pruebas)
                  const origIndex = ((i - CLONE_OFFSET) % n + n) % n;
                  scrollToImage(origIndex);
                }}
              >
                <Image
                  src={imageObj.src}
                  alt={`${activeProject.title}-${i}`}
                  width={800}
                  height={ITEM_HEIGHT}
                  className="object-cover w-full h-auto rounded-md"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
