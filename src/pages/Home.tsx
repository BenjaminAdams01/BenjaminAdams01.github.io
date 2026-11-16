import Section from "../components/Section/Section";
import { aboutme } from "../data/aboutme";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

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
      <Footer />
    </main>
  );
}

export default Home;
