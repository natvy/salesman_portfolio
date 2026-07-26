import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import AboutNavigation from "./AboutNav";
import { SectionKey } from "./constants";

const Scrambled = localFont({
  src: "../../fonts/Geist.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-scrambled",
});

interface Props {
  activeSection: SectionKey;
  onSectionChange: (s: SectionKey) => void;
}

export default function AboutHero({ activeSection, onSectionChange }: Props) {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden px-6 -mt-[80px] mb-4 h-[70vh] sm:h-[60vh] md:h-[30vh] lg:h-[10vh] xl:h-[70vh]">
      {/* Imagen */}
      <div className="relative w-full h-[70vh] overflow-hidden">
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
          className="absolute top-0 left-14 h-full w-[35%] bg-[#FF2C65]"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      {/* Nombre */}
      <div className={`${Scrambled.className} absolute left-[10%] top-10 `}>
        <h5 className="text-black text-3xl mb-10">2005.11.15</h5>
        <h1 className="text-4xl font-bold">DIEGO-LOPEZ</h1>
      </div>

      {/* Profesión */}
      <div className="absolute left-[10%] bottom-[20%] max-w-sm">
        <h2 className={`${Scrambled.className} text-1md mb-2`}>
          ARQUITECTO
        </h2>
        <p className="text-md text-justify max-w-[300px]">
          Disfruto enfocandome en el diseño de espacios inspiradores y
          funcionales, donde la estructura y la luz definen la experiencia
          del habitar.
        </p>
      </div>

      <AboutNavigation
        activeSection={activeSection}
        onChange={onSectionChange}
      />
    </div>
  );
}
