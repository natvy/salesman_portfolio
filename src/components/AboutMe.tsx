// src/components/AboutMe.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <motion.div
      exit={{ opacity: 0, y: 40 }}
      className="min-h-screen px-8 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        {/* Contenedor principal */}
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Imagen central */}

          <div className="relative w-[80%] h-[80%]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src="/images/background3.jpg" // por si la quiere cambiar
                alt="About me background"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>

          {/*Logo - centro superior de la imagen - pidelo de mas alta calidad*/}
          {/* Logo dentro de la imagen */}
          <div className="absolute top-40 left-40">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/logoG.png"
                alt="Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Nombre - mitad izquierda */}
          <div className="absolute left-[12%] top-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-white text-5xl font-bold">Diego Lopez</h1>
            </motion.div>
          </div>

          {/* Profesión + descripción - esquina inferior izquierda */}
          <div className="absolute left-[12%] bottom-[25%] text-left max-w-sm">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1.5 }}
            >
              <h2 className="text-white text-4xl font-semibold">Arquitecto</h2>
              <p className="text-white text-m mt-2 leading-relaxed">
                Arquitecto enfocado en el diseño de espacios sobrios y
                funcionales, donde la estructura y la luz definen la experiencia
                del habitar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
