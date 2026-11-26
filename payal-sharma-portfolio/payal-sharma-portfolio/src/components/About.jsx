import { FACTS } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About me</h2>
        <p className="sub">A developer who cares about how things look, and how they work.</p>
        <div className="about">
          <div>
            <p>I’m a full stack developer who enjoys turning ideas into reliable products. I work across the whole stack: planning the data model, building the API, and crafting an interface people enjoy using.</p>
            <p>I write clean, tested code, keep accessibility and performance in mind, and I like learning something new on every project.</p>
          </div>
          <div className="facts">
            {FACTS.map(([n, l]) => (
              <div className="fact" key={l}><b>{n}</b>{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
