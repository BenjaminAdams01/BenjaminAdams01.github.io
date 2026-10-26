import { useParams } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import NotFound from "../components/NotFound";
import Gallery from "../components/Gallery";

function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <NotFound error="Project Not Found" />;
  }

  return (
    <div className="page">
      <h1>{project.title}</h1>
      <div className="tags">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <p>{project.longDescription}</p>
      <Gallery key={project.id} images={project.screenshots} />
      {project.video && <video src={project.video} controls />}
      <iframe
        src="https://www.youtube.com/embed/gURgiWKomqw"
        title="Game1 trailer"
        allowFullScreen
      />
    </div>
  );
}

export default ProjectPage;
