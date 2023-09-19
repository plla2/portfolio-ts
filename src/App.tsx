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
            {/* </Suspense> */}
            {/* <Suspense fallback={<Loader setShowLoader={setShowLoader} />}> */}
            <Hero />
            {/* </Suspense> */}
            {/* <Suspense fallback={<Loader setShowLoader={setShowLoader} />}> */}
            <About />
            {/* </Suspense> */}
            {/* <Suspense fallback={<Loader setShowLoader={setShowLoader} />}> */}
            <Project />
            {/* </Suspense> */}
            {/* <Suspense fallback={<Loader setShowLoader={setShowLoader} />}> */}
            <Skills />
            {/* </Suspense> */}
            {/* <Suspense fallback={<Loader setShowLoader={setShowLoader} />}> */}
            <Contact />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
