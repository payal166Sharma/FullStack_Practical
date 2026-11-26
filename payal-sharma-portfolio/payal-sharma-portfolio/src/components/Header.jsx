const LINKS = ["about", "skills", "projects", "experience", "contact"];

export default function Header({ theme, onToggle }) {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Payal Sharma</a>
        <nav aria-label="Main">
          {LINKS.map((l) => (
            <a key={l} href={"#" + l}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
          <button className="icon-btn" onClick={onToggle} aria-label="Toggle dark mode">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}
