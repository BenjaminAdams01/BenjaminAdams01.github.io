import { Link, NavLink } from "react-router";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar sticky-top">
      <div className="navbar-brand">
        <img src={"../BenHat.webp"} style={{ marginRight: "1vh" }}></img>
        <Link to="/" className="navbar-brand-link">
          Benjamin Adams
        </Link>
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
      </div>
    </nav>
  );
}

export default NavBar;
