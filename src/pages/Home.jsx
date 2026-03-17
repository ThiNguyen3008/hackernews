import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to HackerNews</h1>
      <center>
        <Link to="/stories">
          <button>Stories</button>
        </Link>
        <Link to="/jobs">
          <button>Jobs</button>
        </Link>
      </center>
    </div>
  );
}
