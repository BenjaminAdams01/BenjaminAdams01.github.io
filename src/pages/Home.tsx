import "../css/Home.css";
import Section from "../components/Section";
import { aboutme } from "../data/aboutme";
import ExternalImageLink from "../components/ExternalImageLink";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

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
        <div className=" screen-container">
          <div className="card center">
            <Section title="Hello! Welcome to my Website!">
              {aboutme.aboutmeshort}
            </Section>
            <Button onClick={handleClick}>See Projects</Button>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
