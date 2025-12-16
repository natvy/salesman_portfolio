import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Layout from "@/layout/Layout";

const projects = [
  {
    id: "p1",
    title: "Project One",
    description:
      "A concise yet meaningful description of the project. Context, intent, and outcome.",
    image: "/logo.png",
  },
  {
    id: "p2",
    title: "Project Two",
    description:
      "Another project. Avoid repetition. Clear ideas matter more than volume.",
    image: "/window.svg",
  },
  {
    id: "p3",
    title: "Project Three",
    description:
      "Less explanation, more intention. BIG rarely over-explains.",
    image: "/globe.svg",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              isActive={activeProject === project.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
