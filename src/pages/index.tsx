// src/pages/index.tsx
import { useState, useRef, useEffect } from "react";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // Tus 4 imágenes y datos

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const handleSelect = (id: string) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <Navbar visible={true} />

      <main className="min-h-screen px-6 pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-4xl text-center py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Salesman - Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Proyectos del lindote del Diego
          </p>
        </section>

        {/* Grid de proyectos con ProjectCard */}
        <section className="mx-auto max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                isActive={activeProject === project.id}
                onSelect={handleSelect}
              />
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="w-full py-10 text-center text-gray-500">
          © 2025 Salesman. Todos los derechos reservados.
        </footer>
      </main>
    </Layout>
  );
}
