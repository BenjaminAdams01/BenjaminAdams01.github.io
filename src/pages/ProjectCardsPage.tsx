import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects";
import { useState } from "react";

function ProjectCardsPage() {
  const [query, setQuery] = useState("");

  const filteredSearch = query.toLowerCase();
  const visibleProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(filteredSearch) ||
      p.tags.some((t) => t.toLowerCase().includes(filteredSearch)),
  );

  return (
    <div>
      <div className="page">
        <div className="projects-searchbar">
          <h2>Projects</h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            type="search"
            className="projects-search"
          />
        </div>
        <div className="projects-grid">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((p) => <ProjectCard key={p.id} {...p} />)
          ) : (
            <p>No Projects Match Query</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectCardsPage;
