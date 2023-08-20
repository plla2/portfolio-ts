import Navbar from "./components/nav/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useState } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Project />
          <Skills />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
