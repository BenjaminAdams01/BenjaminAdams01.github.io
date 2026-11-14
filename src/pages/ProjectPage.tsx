import { useNavigate, useParams } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import NotFound from "../components/NotFound";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import Contributions from "../components/Contributions";
import Section from "../components/Section";

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
      <div>
        <Gallery key={project.id} images={project.screenshots} />
      </div>
      <div className="card" style={{ whiteSpace: "pre-line" }}>
        <Section title={`What is ${project.title}?`}>
          <p>{project.longDescription}</p>
        </Section>
      </div>
      <Contributions contributions={project.contributions}></Contributions>
      {project.video && (
        <iframe
          className="responsive-video"
          src={project.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default ProjectPage;
