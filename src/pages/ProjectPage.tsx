import { useNavigate, useParams } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag/Tag";
import NotFound from "../components/NotFound";
import Gallery from "../components/Gallery/Gallery";
import Button from "../components/Button/Button";
import Contributions from "../components/Contributions/Contributions";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

function ProjectPage() {
  const { id } = useParams();
  const currentId = Number(id);
  const project = projects.find((p) => p.id === Number(id));
  const index = projects.findIndex((p) => p.id === currentId);
  const next = projects[index + 1];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  const handleClickNext = () => {
    navigate(`/projects/${next.id}`);
  };

  if (!project) {
    return <NotFound error="Project Not Found" />;
  }

  return (
    <div>
      <Banner
        logoPath={project.logoPath}
        imagePath={project.logoBackgroundPath}
      />
      <div className="page" style={{ paddingTop: 10 }}>
        <div className="tags center">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {project.linkPath && (
          <a
            className="center"
            href={project.linkPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkText ? project.linkText : <>Link To This Project</>}
          </a>
        )}
        <div>
          <Gallery key={project.id} images={project.screenshots} />
        </div>
        <Section title={`What is ${project.title}?`}>
          <p>{project.longDescription}</p>
        </Section>
        <Contributions contributions={project.contributions}></Contributions>
        {project.video && (
          <iframe
            className="responsive-video center"
            src={project.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className="bottom-buttons padded">
          <Button color="accent" onClick={handleClick}>
            Back To Projects
          </Button>
          {next && (
            <div className="bottom-right-button">
              <Button color="accent" onClick={handleClickNext}>
                See Next: {next.title}
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
