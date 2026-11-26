import { JOBS } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Experience and education</h2>
        <p className="sub">Where I’ve worked and studied.</p>
        <div className="timeline">
          {JOBS.map((j) => (
            <div className="job" key={j.role}>
              <h3>{j.role}, {j.org}</h3>
              <small>{j.when}</small>
              <p>{j.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
