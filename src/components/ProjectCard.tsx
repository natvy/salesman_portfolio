import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  isActive,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => onSelect(id)}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#111",
      }}
    >
      {/* Imagen */}
      <motion.div layout>
        <Image
          src={image}
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

      {/* Contenido */}
      <motion.div
        layout
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          padding: isActive ? "1.5rem" : "0",
          maxHeight: isActive ? "300px" : "0",
        }}
      >
        {isActive && (
          <>
            <h3>{title}</h3>
            <p>{description}</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
