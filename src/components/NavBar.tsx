import { Link, NavLink } from "react-router";
import "../css/NavBar.css";
import { projects } from "../data/projects";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Benjamin Adams</Link>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/aboutme" className="nav-link">
          About Me
        </NavLink>
        {/* {projects.map((p) => (
          <NavLink key={p.id} to={`/projects/${p.id}`} className="nav-link">
            {p.title}
          </NavLink>
        ))} */}
      </div>
    </nav>
  );
}

export default NavBar;
