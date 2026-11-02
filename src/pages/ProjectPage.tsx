import { useNavigate, useParams } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import NotFound from "../components/NotFound";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import Contributions from "../components/Contributions";

function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  if (!project) {
    return <NotFound error="Project Not Found" />;
  }

  return (
    <div className="page">
      <Button onClick={handleClick}>Back To Projects</Button>
      <h1 className="center">{project.title}</h1>
      <div className="tags center">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <Gallery key={project.id} images={project.screenshots} />
      <p>{project.longDescription}</p>
      <Contributions contributions={project.contributions}></Contributions>
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
