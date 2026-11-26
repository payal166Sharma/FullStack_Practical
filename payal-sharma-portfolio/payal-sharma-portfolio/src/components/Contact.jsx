import { useState } from "react";
import { PROFILE } from "../data.js";

export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", msg: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!v.name.trim() || !/^\S+@\S+\.\S+$/.test(v.email) || v.msg.trim().length < 5) {
      setError("Please enter your name, a valid email and a short message.");
      return;
    }
    setError("");
    setSent(true);
    const subject = encodeURIComponent("Portfolio message from " + v.name);
    const body = encodeURIComponent(v.msg + "\n\nFrom: " + v.name + " (" + v.email + ")");
    window.open(`mailto:${PROFILE.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Let’s work together</h2>
        <p className="sub">Have a project or an opening in mind? Send a message and I’ll reply soon.</p>
        {sent ? (
          <div className="ok" role="status">
            Thanks, {v.name}! Your email app should open with the message ready to send.
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <label>Your name<input value={v.name} onChange={set("name")} autoComplete="name" /></label>
            <label>Your email<input type="email" value={v.email} onChange={set("email")} autoComplete="email" /></label>
            <label>Message<textarea rows="5" value={v.msg} onChange={set("msg")}></textarea></label>
            {error && <p className="err" role="alert">{error}</p>}
            <div className="btns">
              <button type="submit" className="btn primary">Send message</button>
              <a className="btn ghost" href={PROFILE.linkedin}>LinkedIn</a>
              <a className="btn ghost" href={PROFILE.github}>GitHub</a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
