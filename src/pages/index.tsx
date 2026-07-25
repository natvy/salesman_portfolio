import { useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home/Hero/Hero";
import Footer from "@/components/Home/Footer";

import ProjectsGrid from "@/components/Home/ProjectsGrid";

import { projects } from "@/data/projects";

export default function Home() {

  const [activeProject, setActiveProject] = useState<string | null>(projects[0]?.id ?? null);

  const [activeSection, setActiveSection] = useState(
    "Architectural projects"
  );

  const [navbarInverted, setNavbarInverted] =
    useState(false);

  return (
    <>

      <Navbar inverted={navbarInverted} />

      <main className="pt-10">

        <Hero
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          navbarInverted={navbarInverted}
          setNavbarInverted={setNavbarInverted}
        />

        {activeSection === "Architectural projects" && (

          <ProjectsGrid
            projects={projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />

        )}

        

        <Footer />

      </main>

    </>
  );
}