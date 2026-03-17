import Card from "./card";
export default function List({ stories }) {
  return (
    <div className="grid">
      {stories.map((s) => (
        <Card key={s.id} x={s} />
      ))}
    </div>
  );
}
