import { useState } from "react";
import "./Gallery.css";

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string };

function Gallery({ items }: { items: MediaItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (items.length === 0) return null;

  const current = items[selectedIndex];

  return (
    <div className="gallery">
      <div className="gallery-viewer">
        <button
          className="gallery-nav"
          onClick={() =>
            setSelectedIndex((prev) =>
              prev === 0 ? items.length - 1 : prev - 1,
            )
          }
          aria-label="Previous screenshot"
        >
          {"<"}
        </button>
        {current.type === "video" ? (
          <video
            className="gallery-main"
            src={current.src}
            poster={current.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img className="gallery-main" src={current.src} alt={current.alt} />
        )}
        <button
          className="gallery-nav"
          onClick={() => setSelectedIndex((prev) => (prev + 1) % items.length)}
          aria-label="Next screenshot"
        >
          {">"}
        </button>
      </div>
      <div className="gallery-thumbs">
        {items.map((src, i) => (
          <button
            key={i}
            className={
              i === selectedIndex ? "gallery-thumb selected" : "gallery-thumb"
            }
            onClick={() => setSelectedIndex(i)}
          >
            {src.type === "video" ? (
              <img
                className="pixel-art"
                src={src.poster}
                alt={`Video`}
                loading="lazy"
              />
            ) : (
              <img className="pixel-art" src={src.src} alt={src.alt} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
