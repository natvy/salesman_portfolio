// src/components/AboutMe.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
const Audiowide = localFont({
  src: "../../public/fonts/Audiowide-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-audiowide",
});

export default function AboutMe() {
  return (
    <motion.div
      exit={{ opacity: 0, y: 40 }}
      className="min-h-screen px-8 py-16"
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
              {/* Cortina roja */}

              <Image
                src="/images/background5.png" // por si la quiere cambiar
                alt="About me background"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-6 h-full w-[45%] bg-red-600/50 rounded-lg pointer-events-none"
            />
          </div>

          {/*Logo - centro superior de la imagen - pidelo de mas alta calidad*/}
          {/* Logo dentro de la imagen 
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
          </div> */}
          
          {/* iconos  */}
          <div className={`${Audiowide.className} absolute left-[10%] top-5 -translate-y-1/2 text-4xl sm:text-6xl font-bold`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-white text-7xl font-bold">//////////</h1>
            </motion.div>
          </div>

          {/* Nombre - mitad izquierda */}
          <div className={`${Audiowide.className} absolute left-[10%] top-1/4 -translate-y-1/2 text-4xl sm:text-6xl font-bold`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-white text-5xl font-bold">DIEGO LOPEZ</h1>
            </motion.div>
          </div>

          {/* Profesión + descripción - esquina inferior izquierda */}
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
        </div>
    </motion.div>
  );
}
