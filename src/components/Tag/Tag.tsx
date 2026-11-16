import type { ReactNode } from "react";
import "./Tag.css";

interface Props {
  children: ReactNode;
}

function Tag({ children }: Props) {
  return <span className="tag">{children}</span>;
}

export default Tag;
