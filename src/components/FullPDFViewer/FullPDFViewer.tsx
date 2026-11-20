import { PDFViewer } from "@embedpdf/viewer-react";
import "./FullPDFViewer.css";

interface Props {
  src: string;
}

export default function FullPDFViewer({ src }: Props) {
  return (
    <div className="media-pdf">
      <PDFViewer src={src} />;
    </div>
  );
}
