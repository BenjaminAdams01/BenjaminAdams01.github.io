import { MediaItem } from "./MediaViewer";

export default function MediaThumbnailViewer({ item }: { item: MediaItem }) {
  switch (item.type) {
    case "image":
      return <img className="pixel-art" src={item.src} alt={item.alt} />;

    case "video":
      return (
        <img
          className="pixel-art"
          src={item.poster}
          alt={`Video`}
          loading="lazy"
        />
      );
  }
}
