// src/components/AboutMe.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const Scrambled = localFont({
  src: "../../public/fonts/Code.otf",
  weight: "400",
  style: "normal",
  variable: "--font-scrambled",
});

const sections = ["About", "CV", "Servicios", "Campos", "Alcances"];

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <motion.div
      exit={{ opacity: 0, y: 40 }}
      className="min-h-screen py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contenedor centrado como en el index */}
      <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden px-6">
        {/* Imagen central */}
        <div className="relative w-full h-[70vh] overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src="/images/background5.png"
              alt="About me background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Cortina ajustada al contenedor */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full w-[40%] bg-[#E5203A]/50 pointer-events-none"
          />
        </div>

        {/* iconos */}
        <div
          className={`${Scrambled.className} absolute left-[10%] top-5 -translate-y-1/2 text-4xl sm:text-6xl font-bold`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-white text-7xl font-bold">
              \\\\\\\\\\\\\\\\\\
            </h1>
          </motion.div>
        </div>

        {/* Nombre */}
        <div
          className={`${Scrambled.className} absolute left-[10%] top-1/3 -translate-y-1/2 text-4xl sm:text-6xl font-light`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-white text-7x1 font-bold">DIEGO LOPEZ</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-white text-7x1 font-bold">RODRIGUEZ</h1>
          </motion.div>
        </div>

        {/* Profesión + descripción */}
        <div className="absolute left-[10%] bottom-[25%] text-left max-w-sm">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">
              Arquitecto
            </h2>

            <p className="text-white text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
              Disfruto enfocandome en el diseño de espacios inspiradores y
              funcionales, donde la estructura y la luz definen la experiencia
              del habitar.
            </p>
          </motion.div>
        </div>

        {/* Barra de navegación dentro del hero */}
        <div className="absolute inset-x-0 top-[90%] z-20 flex justify-center px-4">
          <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-40 px-2 w-full max-w-6xl">
            {sections.map((sec) => {
              const isActive = activeSection === sec;
              return (
                <div key={sec} className="relative">
                  <button
                    onClick={() => setActiveSection(sec)}
                    className={`${
                      Scrambled.className
                    } text-lg sm:text-xl transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
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
      </div>

      {/* Secciones dinámicas debajo del hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-12 mt-24 sm:mt-5 md:mt-20 text-black">
        {activeSection === "About" && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3
              className={`${Scrambled.className} text-3xl font-bold mb-4 max-w-[900px] mx-auto`}
            >
              Sobre mí
            </h3>
            <p className="mb-6 max-w-[900px] mx-auto">
              Desde que tengo memoria, siempre me ha atraído imaginar mis
              espacios y darles forma, ademas del arte, cuya expresion aplicada 
              a espacios puede traer todo tipo de emociones. No puedo decir con certeza si nací con talento
              para ello, pero sí sé que encontraba una satisfacción profunda al
              ver cómo otros podían admirar y disfrutar lo que yo había
              concebido.
            </p>
            <p className="mb-6 max-w-[900px] mx-auto">
              Cuando descubrí la arquitectura, sentí que era el punto de
              encuentro entre dos mundos que siempre me habían fascinado: el
              arte y mi espacio. Entender que un edificio podía ser, al mismo
              tiempo, inspiracion, una idea, un refugio y una solución concreta me empujó a
              sumergirme por completo en este camino, sin mirar atrás.
            </p>
            <p className="mb-6 max-w-[900px] mx-auto">
              Hoy diseño espacios con la esperanza de que no solo se vean bien,
              sino que mejoren la vida de quienes los usan. Construyo para dejar
              huella, para que cada proyecto tenga sentido y valor en el mundo
              que habitamos.
            </p>

            <h1 className="mb-15 max-w-[900px] mx-auto">
              <span className="mb-6 text-sm text-[#9d9b9c]">Some extra facts</span>
              <p className="mb-4 max-w-[900px] mx-auto"> Recently, I've been: </p>
              <p className="mb-3 max-w-[900px] mx-auto"> ☕️ Tomando mas de 3 tazas de cafe al dia. </p>
              <p className="mb-3 max-w-[900px] mx-auto"> 🐖 Leyendo "Rebelion en la granja". </p>
              <p className="mb-6 max-w-[900px] mx-auto"> 🧦 Considerando comprar un par de esos clcetines con garantia de por vida. </p>
              
            </h1>
            <h1 className="mb-15 max-w-[900px] mx-auto">
              <span className="mb-6 text-sm text-[#9d9b9c]">Experience</span>
             </h1> 
          </motion.div>
        )}

        {activeSection === "CV" && (
          <motion.div
            key="cv"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className={`${Scrambled.className} text-3xl font-bold mb-4`}>
              Currículum
            </h3>
            <p>
              Experiencia en proyectos residenciales y comerciales, dominio de
              herramientas CAD, BIM y visualización arquitectónica.
            </p>
          </motion.div>
        )}

        {activeSection === "Servicios" && (
          <motion.div
            key="servicios"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className={`${Scrambled.className} text-3xl font-bold mb-4`}>
              Servicios
            </h3>
            <p>
              Diseño arquitectónico, conceptualización, desarrollo ejecutivo,
              visualización 3D y acompañamiento en obra.
            </p>
          </motion.div>
        )}

        {activeSection === "Campos" && (
          <motion.div
            key="campos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className={`${Scrambled.className} text-3xl font-bold mb-4`}>
              Campos de estudio
            </h3>
            <p>
              Urbanismo, arquitectura sostenible, diseño de interiores y
              análisis del espacio habitacional.
            </p>
          </motion.div>
        )}

        {activeSection === "Alcances" && (
          <motion.div
            key="alcances"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className={`${Scrambled.className} text-3xl font-bold mb-4`}>
              Alcances
            </h3>
            <p>
              Proyectos a escala local y regional, con capacidad de adaptación a
              distintos contextos y necesidades del cliente.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
