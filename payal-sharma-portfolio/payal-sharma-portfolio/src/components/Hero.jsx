import { PROFILE } from "../data.js";
import useTypewriter from "../useTypewriter.js";

export default function Hero() {
  const role = useTypewriter(PROFILE.roles);
  return (
    <div className="wrap hero" id="top">
      <div>
        <h1>Hi, I’m <span>Payal</span> Sharma.</h1>
        <p className="role">{role}<span className="caret"></span></p>
        <p className="lead">
          I design, build and ship web applications end to end: clean React interfaces on the front,
          fast and secure Node.js APIs behind them.
        </p>
        <div className="btns">
          <a className="btn primary" href="#projects">View my work</a>
          <a className="btn ghost" href="#contact">Contact me</a>
        </div>
      </div>
      <div className="code" aria-hidden="true">
        <div className="bar"><i></i><i></i><i></i></div>
        <pre>
<span className="k">const</span> <span className="f">payal</span> = {"{"}
{"\n  "}role: <span className="s">"Full Stack Developer"</span>,
{"\n  "}frontend: [<span className="s">"React"</span>, <span className="s">"TypeScript"</span>],
{"\n  "}backend: [<span className="s">"Node"</span>, <span className="s">"Express"</span>],
{"\n  "}database: [<span className="s">"MongoDB"</span>, <span className="s">"SQL"</span>],
{"\n  "}openToWork: <span className="k">true</span>,
{"\n"}{"}"};
        </pre>
      </div>
    </div>
  );
}
