import Section from "../components/Section";
import { aboutme } from "../data/aboutme";

function AboutMePage() {
  return (
    <div className="page">
      <div className="card center" style={{ whiteSpace: "pre-line" }}>
        <Section title="About Me">{aboutme.aboutmelong}</Section>
      </div>
    </div>
  );
}

export default AboutMePage;
