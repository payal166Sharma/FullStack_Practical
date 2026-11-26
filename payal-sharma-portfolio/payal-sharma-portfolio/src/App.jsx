import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  return (
    <>
      <Header theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Contact />
      </main>
      <Footer />
    </>
  );
}
