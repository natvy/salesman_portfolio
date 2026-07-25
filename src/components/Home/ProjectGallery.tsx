"use client";

import { useEffect, useRef } from "react";
import { ProjectImage } from "@/data/projects";
import ProjectGalleryItem from "./ProjectGalleryItem";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <section className="relative mt-2">
      <div
        className="
          flex
          gap-8

          overflow-x-auto

          px-6
          pb-6

          snap-x
          snap-mandatory

          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {images.map((image, index) => (
          <ProjectGalleryItem
            key={index}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}