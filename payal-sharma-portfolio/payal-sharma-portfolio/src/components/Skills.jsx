import { SKILLS } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <p className="sub">The tools I use to build complete products.</p>
        <div className="skills">
          {SKILLS.map((g) => (
            <div className="skill" key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((i) => <span className="chip" key={i}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
