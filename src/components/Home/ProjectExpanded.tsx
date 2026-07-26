// src/components/Projects/ProjectExpanded.tsx

import { Project } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";

interface Props {
  project: Project;
}

export default function ProjectExpanded({ project }: Props) {
  return (
    <div className="bg-white">
      <ProjectGallery images={project.images} />
    </div>
  );
}