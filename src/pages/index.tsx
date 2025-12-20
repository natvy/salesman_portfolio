// src/pages/index.tsx
import { useState, useRef, useEffect } from "react";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; // Tus 4 imágenes y datos

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animación inicial de entrada de las cards
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 150); // animación escalonada
      }
    });
  }, []);

  //detectar clicks afuera del contenedor:
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSelect = (id: string) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <Navbar visible={true} />

      <main className="min-h-screen pt-10">
        {/* ===================== HERO SECTION ===================== */}
        {/* Sección principal con fondo negro a todo lo ancho */}
        <motion.section
          exit={{ opacity: 0, y: 40 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-screen h-[40vh] min-h-[280px] overflow-hidden" // fondo horizontal completo + padding vertical
        >
          {/* Contenedor centrado que limita el ancho del contenido */}
              {/* ---------- Imagen de fondo animada ---------- */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute inset-0" // ocupa toda la caja del hero
              >
                <Image
                  src="/images/backgroundHome.jpg"
                  alt="Home background"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* ---------- Cortina roja desde la derecha ---------- */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 right-0 h-full w-[100%] bg-red-600/30 pointer-events-none"
              />

              {/* ---------- Contenedor del texto (sobre la imagen) ---------- */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-15 text-white gap-3">
                {/* Título principal */}
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-4xl sm:text-6xl font-bold max-w-xl"
                >
                  Salesman - Portfolio
                </motion.h1>

                {/* Subtítulo */}
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-2xl sm:text-4xl font-semibold"
                >
                  Architecture
                </motion.h2>

                {/* Descripción corta */}
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-base sm:text-lg max-w-md"
                >
                  Proyectos del lindote del Diego.
                </motion.p>
              </div>
        </motion.section>

        {/* ===================== PROJECTS GRID ===================== */}
        {/* Sección de tarjetas de proyectos debajo del hero */}
        <section className="mx-auto mt-12 max-w-6xl px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[i] = el; // referencia para animación inicial
              }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                images={project.images[0].src}
                isActive={activeProject === project.id}
                onSelect={handleSelect}
              />
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="w-full mt-32 py-10 text-center text-gray-500">
          © 2025 Salesman. Todos los derechos reservados.
        </footer>
      </main>
    </Layout>
  );
}
