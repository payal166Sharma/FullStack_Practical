import { useState } from "react";
import { PROJECTS } from "../data.js";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Selected work. Filter by the part of the stack you care about.</p>
        <div className="tabs">
          {CATEGORIES.map((c) => (
            <button key={c} className="tab" aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">
          {list.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
              <div className="links">
                <a href={p.code}>Source code</a>
                <a href={p.demo}>Live demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
