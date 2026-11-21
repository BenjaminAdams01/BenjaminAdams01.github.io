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
        <div className="card center" style={{ marginBottom: "1vh" }}>
          <Section title="About Me">
            <p>
              {aboutme.aboutmelong.map((p) => (
                <p>{p}</p>
              ))}
            </p>
          </Section>
        </div>
        <div className="card center">
          <Section title="Games I Play">
            <div className="columns-2">
              <div className="column-text">
                <h1>Isaac</h1>
                <p>
                  I have fully completed The Binding of Isaac two times, which
                  takes a lot of time and dedication. I love this game to death
                  and I will be getting three fully completed save files. As of
                  the time I am writing this, I have 930 hours on Isaac.
                </p>
              </div>
              <img
                className="gallery-main"
                src="/elements/isaac_progress.webp"
              />
            </div>
            <hr />
            <div className="columns-2">
              <div className="column-text">
                <h1>Celeste</h1>
                <p>
                  I love platformers and Celeste is everything I want in a
                  platformer. There is so much emergent tech from the movement
                  that people feel compelled to make such impossibly difficult
                  levels to use all of the crazy movement they discovered. Also
                  I like showing people my crazy clips.
                </p>
              </div>
              <video
                className="gallery-main"
                src="/elements/celeste_gaming.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMePage;
