import "../css/Home.css";
import Section from "../components/Section";
import { aboutme } from "../data/aboutme";

function Home() {
  return (
    <div className="page">
      <div className=" screen-container">
        <div className="card center">
          <Section title="Hello! Welcome to my Website!">
            {aboutme.aboutmeshort}
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Home;
