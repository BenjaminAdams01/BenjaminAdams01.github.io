import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Tag({ children }: Props) {
  return <span className="tag">{children}</span>;
}

export default Tag;
