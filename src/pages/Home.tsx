import Section from "../components/Section/Section";
import { aboutme } from "../data/aboutme";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  const handleClickMage = () => {
    navigate("/projects/1");
  };

  const handleClickAboutMe = () => {
    navigate("/aboutme");
  };

  return (
    <main className="content">
      <Banner
        header="Benjamin Adams"
        subHeader="UI/UX Designer & Programmer"
        imagePath="/elements/MenuBackgroundRedone.png"
      />
      <div className="page">
        <div className="screen-container">
          <Section title="Welcome to my Website!">
            <p>{aboutme.aboutmeshort}</p>
          </Section>
          <div className="center-column">
            <Button color="accent" onClick={handleClick}>
              See All Projects
            </Button>
          </div>
          <hr />
          <div className="columns-2">
            <div className="column-text">
              <h1>Featured Project</h1>
              <p>
                MAGE is a game that me and my friends developed during our first
                two years at college. I am super proud of how we were able to
                polish the game and release it onto Steam. Check out the full
                project page to learn more!
              </p>
              <Button color="accent" onClick={handleClickMage}>
                Check Out MAGE
              </Button>
            </div>
            <img
              className="gallery-main pixel-art"
              src="/projects/MAGE/MAGE16x9.webp"
            />
          </div>
          <hr />
          <div className="columns-2">
            <img
              className="gallery-main pixel-art"
              src="/elements/BenClassicMage16x9.webp"
            />
            <div className="column-text">
              <h1>Who Am I?</h1>
              <p>
                Want to know more about me or just let me show you what games I
                play? If you're looking for my contributions to society, don't
                go here first! Otherwise, Check out my About Me page!
              </p>
              <Button color="accent" onClick={handleClickAboutMe}>
                Check Out My Page
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
