import Navbar from "./components/nav/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
