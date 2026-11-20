import { useState } from "react";
import { Contribution } from "../../data/projects";
import "./Contributions.css";
import MediaViewer from "../MediaViewer/MediaViewer";

interface Props {
  contributions: Contribution[];
}

function Contributions({ contributions }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (contributions.length === 0) return null;
  const active = contributions[selectedIndex];

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
        <div>
          <p>What I Did for {active.label}:</p>
          {active.points[0] && (
            <ul>
              {active.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {active.media && <MediaViewer item={active.media} />}
          {active.text && <p>{active.text}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contributions;
