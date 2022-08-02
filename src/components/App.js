import "./App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getTopStories } from "../apiCalls";
import Home from "./Home";
import StoryPage from "./StoryPage";
import Nav from "./Nav";
import Error from "./Error";
import dayjs from "dayjs";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories("home").then((data) => setStories(data.results));
  }, []);

  const handleSort = (type) => {
    const order = {
      earliest: (output) => (output ? -1 : 1),
      latest: (output) => (output ? 1 : -1),
    };

    const sortedArray = stories.sort((a, b) => {
      return order[type](
        dayjs(a["published_date"]).isBefore(dayjs(b["published_date"]))
      );
    });
    setStories([...sortedArray]);
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home stories={stories} handleSort={handleSort} />}
        />
        <Route path="/:id" element={<StoryPage stories={stories} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
