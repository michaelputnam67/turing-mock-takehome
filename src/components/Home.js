import React, { useEffect, useState } from "react";
import { getTopStories } from "../apiCalls";
import StoriesContainer from "./StoriesContainer";

const Home = ({ stories, handleSort }) => {
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <div className="home">
      <h1>Stories Titles</h1>
      <select value={typeFilter} onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By Date</option>
				<option value="earliest">Earliest</option>
				<option value="latest">Latest</option>
      </select>
      <StoriesContainer stories={stories} />
    </div>
  );
};

export default Home;
