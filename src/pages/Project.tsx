import { useEffect, useRef, useState } from "react";
import HeroScroll from "../components/Hero/HeroScroll";
import ProjectCards from "../components/Projects/ProjectCards";
import SectionTitle from "../components/Section/SectionTitle";
import { LazyMotion, domAnimation } from "framer-motion";
import { projects } from "../constant/Const";

const Project = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    const handleResizeWithTimer = () => {
      if (resizeTimerRef.current !== null) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(handleResize, 400);
    };

    window.addEventListener("resize", handleResizeWithTimer, false);

    return () => {
      if (resizeTimerRef.current !== null) {
        clearTimeout(resizeTimerRef.current);
      }
      window.removeEventListener("resize", handleResizeWithTimer);
    };
  }, []);

  return (
    <div
      id="projects"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <LazyMotion features={domAnimation}>
        <div className="w-full min-h-[800px] h-screen xl:w-[80%] relative flex flex-col items-center justify-center pb-36">
          <div className="w-full mb-9 mt-[7%]">
            <SectionTitle title="PROJECTS" subTitle="What I have done so far" />
          </div>
          <div className="w-full h-[80%] z-10 flex justify-center mt-22">
            <div className="w-full lg:h-[120%] overflow-auto">
              <div className="absolute top-[67%] left-[10%]">
                {screenWidth <= 1023 && 560 <= screenWidth && <HeroScroll />}
              </div>
              <ProjectCards projects={projects} />
            </div>
          </div>
        </div>
      </LazyMotion>
    </div>
  );
};

export default Project;
