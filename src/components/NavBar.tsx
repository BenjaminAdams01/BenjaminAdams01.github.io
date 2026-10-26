import { Link, NavLink } from "react-router";
import "../css/NavBar.css";
import { projects } from "../data/projects";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Portfolio Page</Link>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        {projects.map((p) => (
          <NavLink key={p.id} to={`/projects/${p.id}`} className="nav-link">
            {p.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
