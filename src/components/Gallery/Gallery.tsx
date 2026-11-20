import { useState } from "react";
import "./Gallery.css";
import MediaViewer, { MediaItem } from "../MediaViewer/MediaViewer";
import MediaThumbnailViewer from "../MediaViewer/MediaThumbnailViewer";

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
        <MediaViewer item={current} />
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
            <MediaThumbnailViewer item={src} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
