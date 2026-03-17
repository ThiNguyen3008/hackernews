import { useEffect, useState } from "react";
import { getNewStoryIds, getStory } from "../services/api2";
import { Link } from "react-router-dom";

import List from "../components/list";
import Sort from "../components/sort";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    async function load() {
      const ids = await getNewStoryIds();

      const data = await Promise.all(
        ids.map((id, index) =>
          getStory(id).then((story) => ({ ...story, originalIndex: index }))
        )
      );

      setStories(data);
    }

    load();
  }, []);

  function handleSort(type) {
    let sorted = [...stories];

    sorted.sort((a, b) => {
      if (type === "time") return b.time - a.time || a.originalIndex - b.originalIndex;
      if (type === "score") return b.score - a.score || a.originalIndex - b.originalIndex;
      if (type === "by") return a.by.localeCompare(b.by) || a.originalIndex - b.originalIndex;
    });

    setStories(sorted);
    setPage(1); // reset to page 1
  }

  // pagination
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const currentStories = stories.slice(start, end);
  const totalPages = Math.ceil(stories.length / pageSize);

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div className="container">
      <h1>Latest HackerNews Jobs</h1>
      <Sort onSort={handleSort} />
      <List stories={currentStories} />
      <center>
        <div className="pagination">
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <span> Page {page} / {totalPages} </span>
          <button onClick={nextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </center>
    </div>
  );
}