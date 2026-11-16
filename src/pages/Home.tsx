import Section from "../components/Section/Section";
import { aboutme } from "../data/aboutme";
import ExternalImageLink from "../components/ExternalImageLink/ExternalImageLink";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <main className="content">
      <header className="banner">
        <h1>Benjamin Adams</h1>
        <p>UI/UX Designer & Programmer</p>
      </header>
      <div className="page">
        <div className=" screen-container">
          <Section title="Welcome to my Website!">
            <p>{aboutme.aboutmeshort}</p>
          </Section>
          <div className="center-column">
            <Button color="accent" onClick={handleClick}>
              See All Projects
            </Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <h3>Links</h3>
        <div className="image-links-grid">
          <ExternalImageLink
            path="https://arfy25.itch.io/"
            imagePath="/elements/itch-app-icon.svg"
          />
          <ExternalImageLink
            path="https://www.linkedin.com/in/benjamin-adams01/"
            imagePath="/elements/linkedin-app-icon.svg"
          />
          <ExternalImageLink
            path="https://bsky.app/profile/benjaminadams01.bsky.social"
            imagePath="/elements/bluesky-icon.svg"
          />
          <ExternalImageLink
            path="https://www.funrugstudio.com/#h.8m4tioumdjc1"
            imagePath="/elements/funrug-icon.png"
          />
        </div>
      </footer>
    </main>
  );
}

export default Home;
