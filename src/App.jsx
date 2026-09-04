import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import DocumentViewerPage from "./pages/DocumentViewerPage.jsx";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("kanvara-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [view, setView] = useState({ type: "home" });
  const [pendingAnchor, setPendingAnchor] = useState(null);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("kanvara-theme", theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#0e0f11" : "#f6f7f9");
    }
  }, [theme]);

  useEffect(() => {
    if (view.type === "home" && pendingAnchor) {
      const element = document.getElementById(pendingAnchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0 });
      }
      setPendingAnchor(null);
    }
  }, [view, pendingAnchor]);

  function navigateToSection(id) {
    if (view.type !== "home") {
      setView({ type: "home" });
      setPendingAnchor(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function openProject(slug) {
    setView({ type: "project", slug });
    window.scrollTo({ top: 0 });
  }

  function openDocument(id) {
    setView({ type: "document", id });
    window.scrollTo({ top: 0 });
  }

  function backToHome() {
    setView({ type: "home" });
    window.scrollTo({ top: 0 });
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <Navbar
        onNavigate={navigateToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {view.type === "home" && (
          <HomePage
            onNavigate={navigateToSection}
            onOpenProject={openProject}
            onOpenDocument={openDocument}
          />
        )}
        {view.type === "project" && (
          <ProjectDetailPage
            slug={view.slug}
            onBack={backToHome}
            onOpenDocument={openDocument}
          />
        )}
        {view.type === "document" && (
          <DocumentViewerPage id={view.id} onBack={backToHome} />
        )}
      </main>

      <Footer onBackToTop={() => navigateToSection("home")} />
    </div>
  );
}
