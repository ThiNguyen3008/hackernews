import { Link } from "react-router-dom";
export default function Sort({ onSort }) {
    return (
      <center>
      <div className="sort">
      <Link to="/">
      <button>Home</button>
    </Link>
        <button onClick={() => onSort("time")}>
          Sort by Time
        </button>
        <button onClick={() => onSort("score")}>
          Sort by Score
        </button>
        <button onClick={() => onSort("by")}>
          Sort by Author
        </button>
      </div>
      </center>
    );
  }
  