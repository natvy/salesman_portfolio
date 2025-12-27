// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import localFont from "next/font/local";

const Outward = localFont({
  src: "../../public/fonts/outward.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-outward",
});
const Geist = localFont({
  src: "../../public/fonts/Geist.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-geist",
});

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  images: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export default function ProjectCard({
  id,
  title,
  description,
  images,
  isActive,
  onSelect,
}: ProjectCardProps) {
  const router = useRouter();
  const [hasHovered, setHasHovered] = useState(false);

  const handleClick = () => {
    // Si no ha habido hover o la card no está activa → expandir
    if (!hasHovered && !isActive) {
      onSelect(id);
      return;
    }
    // Si ya está expandida, navegar al detalle del proyecto
    router.push(`/projects/${id}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onHoverStart={() => {
        setHasHovered(true);
        onSelect(id);
      }}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        //borderRadius: "12px", con comentario por si se arrepiente de quitar los bordes curvos
        background: "#E5203A",
      }}
    >
      {/* Imagen con layoutId para animación suave */}
      <motion.div layout layoutId={`project-image-${id}`}>
        <Image
          src={images}
          alt={title}
          width={800}
          height={500}
          style={{
            width: "100%",
            height: isActive ? "400px" : "250px",
            objectFit: "cover",
            transition: "height 0.4s ease",
          }}
        />
      </motion.div>

      {/* Contenido expandible */}
      <motion.div
        layout
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          padding: isActive ? "1.5rem" : "0",
          maxHeight: isActive ? "1000px" : "0",
          overflow: "hidden",
        }}
      >
        {isActive && (
          <>
            <h3 className={`${Outward.className} text-[80px] font-semibold mb-[1px]`}>{title}</h3>
            <p className="text-white-600 mb-0">{description}</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
