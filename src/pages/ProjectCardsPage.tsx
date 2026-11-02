import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../data/projects";
import { useState } from "react";

function ProjectCardsPage() {
  const [query, setQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredSearch = query.toLowerCase();
  const visibleProjects = projects
    .filter((p) => !featuredOnly || p.featured)
    .filter(
      (p) =>
        p.title.toLowerCase().includes(filteredSearch) ||
        p.tags.some((t) => t.toLowerCase().includes(filteredSearch)),
    );

  return (
    <div
      className="pixel-art"
      style={{
        backgroundImage: `url("/elements/MenuBackgroundRedone.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="page">
        <div className="card center">
          <Section title="Projects">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              type="search"
            />
            <label>
              Featured Only
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(e) => setFeaturedOnly(e.target.checked)}
              />
            </label>
            <div className="projects-grid">
              {visibleProjects.length > 0
                ? visibleProjects.map((p) => <ProjectCard key={p.id} {...p} />)
                : "No Projects Match Query"}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardsPage;
