interface Props {
  path: string;
  imagePath: string;
}

function ExternalImageLink({ path, imagePath }: Props) {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="external-image-link"
    >
      <img
        src={imagePath}
        alt="Link"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </a>
  );
}

export default ExternalImageLink;
