import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: Props) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children && children}
    </section>
  );
}

export default Section;
