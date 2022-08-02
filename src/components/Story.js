import React from "react";
import { Link } from "react-router-dom";

const Story = ({ story }) => {
  return (
    <div className="story">
      <h2>{story.title}</h2>
      {story.section && <p className="section">{story.section}</p>}
      {story.byLine && <p className="by-line">{story.byLine}</p>}
      {story.abstract && <p className="abstract">{story.abstract}</p>}
      <div className="button-date-container">
        <button>
          <Link to={`/${story.title}`}>Story Page</Link>
        </button>
        <p className="date">{story["published_date"]}</p>
      </div>
    </div>
  );
};

export default Story;
