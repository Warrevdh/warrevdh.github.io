import NavBar from "./components/navbar/NavBar.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="relative">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
