// src/components/Projects/ProjectGalleryItem.tsx

import Image from "next/image";
import { motion } from "framer-motion";

import { ProjectImage } from "@/data/projects";

interface ProjectGalleryItemProps {
  image: ProjectImage;
}

export default function ProjectGalleryItem({
  image,
}: ProjectGalleryItemProps) {
  return (
    <motion.article
      className="
        flex
        flex-shrink-0
        items-start
        gap-6

        snap-start
      "
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
      }}
    >
      {/* Imagen */}

      <div
        className="
          relative
          shrink-0
          w-[300px]
          h-[210px]

          overflow-hidden

          bg-neutral-200
        "
      >
        <Image
          src={image.src}
          alt={image.description}
          fill
          sizes="300px"
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Descripción */}

      <div
        className="
          w-[220px]
          shrink-0
        "
      >
        <p
          className="
            text-[13px]
            leading-6
            text-neutral-600
          "
        >
          {image.description}
        </p>
      </div>
    </motion.article>
  );
}