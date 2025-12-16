import { GetStaticPaths, GetStaticProps } from "next";
import { projects, Project } from "../../data/projects"; // Ajusta ruta según tu proyecto
import ProjectDetail from "../../components/ProjectDetail";


interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return <ProjectDetail project={project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({ params: { id: p.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const project = projects.find((p) => p.id === id);
  return { props: { project } };
};
