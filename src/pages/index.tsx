// src/pages/index.tsx
import { useState, useRef, useEffect } from "react";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; // Tus 4 imágenes y datos
import localFont from "next/font/local";
import { useRouter } from "next/router";
import intro from "@/components/intro";


const Code = localFont({
  src: "../../public/fonts/Code.otf",
  weight: "400",
  style: "normal",
  variable: "--font-audiowide",
});

const sections = ["Architectural projects", "Artistic projects"];

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("Architectural projects");
  const [showIntro, setShowIntro] = useState(true);

  

 

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

      <main className="pt-10">
        {/* ===================== HERO SECTION ===================== */}
        <motion.section
          exit={{ opacity: 0, y: 40 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-3 relative w-full max-w-[1100px] mx-auto overflow-hidden px-6"
          //tamano del hero acorde al viewport
        >
          {/* ---------- Fondo full width ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute inset-0 flex justify-center"
          >
            <Image
              src="/images/backgroundHome.jpg"
              alt="Home background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* ---------- Cortina roja ---------- */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-[#E5203A]/30 pointer-events-none"
          />

          {/* ---------- Contenido alineado con las cards ---------- */}
          <div className="relative z-100mx-auto max-w-6xl px-6 py-24 text-white">
            <div className="flex flex-col justify-center gap-3">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className={`${Code.className} text-4xl sm:text-6xl font-bold`}
              >
                Salesman - Portfolio
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl sm:text-4xl font-semibold"
              >
                Architecture
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-base sm:text-lg max-w-md"
              >
                Proyectos del lindote del Diego. Este sera tu rincon
                personalizado del internet, lindo, ayudame a volverlo cada vez
                mas de tu gusto.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Barra de navegación dentro del hero */}
        <div
          className="
            absolute inset-x-0 z-20 flex justify-center px-4
            top-[45%] sm:top-[55%] md:top-[50%] lg:top-[50%] slg:top-[40%]
          "
           >
          <div
            className="
            relative flex w-full max-w-5xl px-2 
            flex-wrap justify-center gap-6
            sm:gap-10 
            md:gap-40 
            lg:flex-nowrap lg:justify-between lg:gap-0
            "
          >
            {sections.map((sec) => {
              const isActive = activeSection === sec;
              return (
                <div key={sec} className="relative">
                  <button
                    onClick={() => setActiveSection(sec)}
                    className={`${
                      Code.className
                    } text-sm sm:text-xl transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white "
                    }`}
                  >
                    {sec}
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="about-hero-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Secciones dinámicas debajo del hero */}
        <div className="relative z-10 w-full  mt-24 sm:mt-5 md:mt-10 text-black">
          {activeSection === "Architectural projects" && (
            <motion.div
              key="architectural-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* ===================== PROJECTS GRID ===================== */}
              <section
                className="
                mt-10 w-full 
                grid gap-6 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                px-4 sm:px-6
                lg:max-w-6xl lg:mx-auto"
              >
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
                      images={project.images[0].src}
                      isActive={activeProject === project.id}
                      onSelect={handleSelect}
                    />
                  </div>
                ))}
              </section>
            </motion.div>
          )}

          {activeSection === "Artistic projects" && (
            <motion.div
              key="artistic-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3
                className={`${Code.className} text-3xl font-bold mb-4 max-w-[900px] mx-auto`}
              >
                Cuando las cards de esto esten listas...
              </h3>
              <p className="mb-6 max-w-[900px] mx-auto">
                Aqui mi tilin agrega todos sus proyectos artisticos qque no
                necesariamente tienen que ver con la carrera, si no con el
                preciso placer que crear por gusto, materializar lo abstracto y
                fascinante de las ideas en un solo lienzo.
              </p>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <footer className="w-full mt-32 py-10 text-center text-gray-500">
          © 2025 Salesman.
        </footer>
      </main>
    </Layout>
  );
}
