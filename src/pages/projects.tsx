// src/pages/projects.tsx

import { useState } from "react";

import Layout from "@/components/layout/Layout";
import ProjectsGrid from "@/components/Home/ProjectsGrid";

import { projects } from "@/data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-16">

        <ProjectsGrid
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />

      </section>
    </Layout>
  );
}