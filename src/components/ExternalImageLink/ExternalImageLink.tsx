import "./ExternalImageLink.css";

interface Props {
  path: string;
  imagePath: string;
}

function ExternalImageLink({ path, imagePath }: Props) {
  return (
    <a href={path} target="_blank" rel="noopener noreferrer">
      <img src={imagePath} className="external-image-link" alt={path} />
    </a>
  );
}

export default ExternalImageLink;
