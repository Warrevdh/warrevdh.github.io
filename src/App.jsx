import NavBar from "./components/navbar/NavBar.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="relative h-screen">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
