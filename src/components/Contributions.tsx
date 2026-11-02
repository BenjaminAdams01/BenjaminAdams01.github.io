import { useState } from "react";
import { Contribution } from "../data/projects";

interface Props {
  contributions: Contribution[];
}

function Contributions({ contributions }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (contributions.length === 0) return null;

  return (
    <div className="contributions">
      <div className="contribution-tabs">
        {contributions.map((contribution, i) => (
          <button
            className={
              i === selectedIndex
                ? "contribution-tab selected"
                : "contribution-tab"
            }
            onClick={() => setSelectedIndex(i)}
          >
            {contribution.label}
          </button>
        ))}
      </div>
      <div className="contribution">
        {contributions.map(
          (contribution, i) =>
            i === selectedIndex && (
              <div>
                <img
                  src={contribution.image}
                  alt={contribution.imageAlt}
                  className="contribution-image"
                />
                {contribution.points.map((point) => (
                  <ul>{point}</ul>
                ))}
                <p>{contribution.text}</p>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default Contributions;
