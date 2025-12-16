// src/pages/projects/[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { projects, Project } from "../../data/projects";
import ProjectDetail from "../../components/ProjectDetail";

interface ProjectPageProps {
  initialId: string;
  projects: Project[];
}

export default function ProjectPage({ initialId, projects }: ProjectPageProps) {
  return <ProjectDetail initialId={initialId} projects={projects} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({ params: { id: p.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  return { props: { initialId: id, projects } };
};
