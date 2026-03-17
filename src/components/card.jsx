import { Link } from "react-router-dom";
export default function Card({x}) {
  return (
    <div className="card">
      <h3>{x.title}</h3>
      <p>Time: {x.time}</p>
      <p>Score: {x.score}</p>
      <p>Author: {x.by}</p>
      <a href={x.url} target="_blank">
        Open Link 
      </a>
      <br />
    </div>
  );
}
