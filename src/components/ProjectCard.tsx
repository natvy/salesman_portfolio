import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";

const Outward = localFont({
  src: "../../public/fonts/outward.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-outward",
});
const Geist = localFont({
  src: "../../public/fonts/Square.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-geist",
});

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  images: string;
  number?: string;
  isActive?: boolean;
  onSelect?: (id: string) => void;
}

export default function ProjectCard({
  id,
  title,
  description,
  images,
  number,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="flex w-full max-w-6xl cursor-pointer overflow-hidden shadow-lg bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Imagen izquierda */}
      <motion.div className="flex-1 relative" style={{ minWidth: 300 }}>
        <Image
          src={images}
          alt={title}
          width={800}
          height={500}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* Contenedor derecho */}
      <div className="flex flex-row">
        {/* Negro vertical con número */}
        <div className="bg-black w-12 flex items-center justify-center max-h-f">
          <span
            className={`${Geist.className} text-white text-xl `}
            style={{ transform: "rotate(270deg)" }}
          >
            {number}
          </span>
        </div>

        {/* Gris expandible hacia la derecha */}
        <motion.div
          layout
          className="bg-gray-200 relative overflow-hidden"
          initial={{ width: 64 }}
          animate={{ width: expanded ? 400 : 64 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Pestaña rosa superior */}
          <div className="bg-[#ff2c65] w-full h-12 flex items-center justify-center">
            <img src="/logow.png" alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Contenido expandido */}
          {expanded && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <h3 className={`${Outward.className} text-2xl font-bold mb-2`}>
                {title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
