import HeroAbout from "../sections/HeroAbout.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";
import Documents from "../sections/Documents.jsx";
import Recognition from "../sections/Recognition.jsx";
import Contact from "../sections/Contact.jsx";

export default function HomePage({ onNavigate, onOpenProject, onOpenDocument }) {
  return (
    <>
      <HeroAbout onNavigate={onNavigate} />
      <Projects onOpenProject={onOpenProject} />
      <Skills />
      <Documents onOpenDocument={onOpenDocument} />
      <Recognition />
      <Contact />
    </>
  );
}
