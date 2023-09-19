import { Suspense, lazy, useState } from "react";
import Loader from "./components/Loader/Loader";

const Navbar = lazy(() => import("./components/nav/Navbar"));
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          <Suspense fallback={<Loader setShowLoader={setShowLoader} />}>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Skills />
            <Contact />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
