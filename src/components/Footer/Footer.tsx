import ExternalImageLink from "../ExternalImageLink/ExternalImageLink";

export default function Footer() {
  return (
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
  );
}
