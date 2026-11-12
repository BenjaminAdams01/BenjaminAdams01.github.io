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
            key={contribution.id}
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
                {contribution.image && (
                  <img
                    src={contribution.image}
                    alt={contribution.imageAlt}
                    className="contribution-image pixel-art"
                  />
                )}
                <p>What I Did for {contribution.label}:</p>
                {contribution.points[0] && (
                  <ul>
                    {contribution.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                <p>{contribution.text}</p>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

export default Contributions;
