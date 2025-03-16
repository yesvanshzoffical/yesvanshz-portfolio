import "./styles.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
