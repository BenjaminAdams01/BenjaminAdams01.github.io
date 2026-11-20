import FullPDFViewer from "../FullPDFViewer/FullPDFViewer";

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "pdf"; src: string };

export default function MediaViewer({ item }: { item: MediaItem }) {
  switch (item.type) {
    case "image":
      return <img className="gallery-main" src={item.src} alt={item.alt} />;

    case "video":
      return (
        <video
          className="gallery-main"
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      );

    case "pdf":
      return <FullPDFViewer src={item.src} />;
  }
}
