import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import { aboutme } from "../data/aboutme";

function AboutMePage() {
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
          <Section title="About Me">
            <p>
              {aboutme.aboutmelong.map((p) => (
                <p>{p}</p>
              ))}
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMePage;
