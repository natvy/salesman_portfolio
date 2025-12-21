// src/components/AboutMe.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const Audiowide = localFont({
  src: "../../public/fonts/Audiowide-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-audiowide",
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
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Imagen central */}
        <div className="relative w-screen h-[70vh] overflow-hidden">
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

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-6 h-full w-[45%] bg-[#E5203A]/50 rounded-lg pointer-events-none"
          />
        </div>

        {/* iconos */}
        <div
          className={`${Audiowide.className} absolute left-[10%] top-5 -translate-y-1/2 text-4xl sm:text-6xl font-bold`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-white text-7xl font-bold">//////////</h1>
          </motion.div>
        </div>

        {/* Nombre */}
        <div
          className={`${Audiowide.className} absolute left-[10%] top-1/4 -translate-y-1/2 text-4xl sm:text-6xl font-bold`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-white text-5xl font-bold">DIEGO LOPEZ</h1>
          </motion.div>
        </div>

        {/* Profesión + descripción */}
        <div className="absolute left-[10%] bottom-[50%] text-left max-w-sm">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <h2 className="text-white text-4xl font-semibold">Arquitecto</h2>
            <p className="text-white text-m mt-2 leading-relaxed">
              Disfruto enfocandome en el diseño de espacios inspiradores y
              funcionales, donde la estructura y la luz definen la experiencia
              del habitar.
            </p>
          </motion.div>
        </div>

        {/* Barra de navegación dentro del hero */}
        <div className="absolute inset-x-0 top-[60%] z-20 flex justify-center px-4">
          <div className="relative flex gap-40 px-2 space-x-8">
            {sections.map((sec) => {
              const isActive = activeSection === sec;
              return (
                <div key={sec} className="relative">
                  <button
                    onClick={() => setActiveSection(sec)}
                    className={`
                      ${Audiowide.className}
                      text-lg sm:text-xl transition-colors
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }
                    `}
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
    </motion.div>
  );
}
