import { useState } from "react";

function Gallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="gallery">
      <div className="gallery-viewer">
        <button
          className="gallery-nav"
          onClick={() =>
            setSelectedIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1,
            )
          }
          aria-label="Previous screenshot"
        >
          {"<"}
        </button>
        <img
          className="gallery-main pixel-art"
          src={images[selectedIndex]}
          alt={`Screenshot ${selectedIndex + 1} of ${images.length}`}
        />
        <button
          className="gallery-nav"
          onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
          aria-label="Next screenshot"
        >
          {">"}
        </button>
      </div>
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <button
            key={src}
            className={
              i === selectedIndex ? "gallery-thumb selected" : "gallery-thumb"
            }
            onClick={() => setSelectedIndex(i)}
          >
            <img
              className="pixel-art"
              src={src}
              alt={`Screenshot ${i + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
