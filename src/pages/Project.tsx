import ProjectCards from "../components/Projects/ProjectCards";
import SectionTitle from "../components/Section/SectionTitle";

const Project = () => {
  return (
    <div
      id="projects"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full min-h-[800px] h-screen xl:w-[80%] relative flex flex-col items-center justify-center pb-44">
        <div className="w-full mb-9 mt-[7%]">
          <SectionTitle title="PROJECTS" subTitle="What I have done so far" />
        </div>
        <div className="w-full h-[80%] z-10 flex justify-center mt-22">
          <div className="w-full xl:w-[90%] h-[-10%] ">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
