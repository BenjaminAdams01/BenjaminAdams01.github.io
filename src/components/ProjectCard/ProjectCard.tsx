import { Link } from "react-router";
import Tag from "../Tag/Tag";
import { projects } from "../../data/projects";
import "./ProjectCard.css";

interface Props {
  id: number;
  title: string;
  description: string;
  featured: boolean;
  tags: string[];
}

function ProjectCard({ id, title, description, tags }: Props) {
  const project = projects.find((p) => p.id === Number(id));

  return (
    <Link to={`/projects/${id}`} className="project-card">
      <div className="project-info">
        <img
          src={project?.thumbnail}
          alt={`${project?.title} logo`}
          loading="lazy"
        />
        <h3 style={{ paddingTop: 10 }}>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
