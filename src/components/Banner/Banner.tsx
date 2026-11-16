import "./Banner.css";

interface Props {
  header?: string;
  subHeader?: string;
  imagePath: string;
  logoPath?: string;
}

export default function Banner({
  header,
  subHeader,
  imagePath,
  logoPath,
}: Props) {
  return (
    <header className="banner" style={{ backgroundImage: `url(${imagePath})` }}>
      {header && <h1>{header}</h1>}
      {subHeader && <p>{subHeader}</p>}
      {logoPath && <img className="banner-logo" src={logoPath}></img>}
    </header>
  );
}
