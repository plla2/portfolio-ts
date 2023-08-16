import SectionTitle from "../components/Section/SectionTitle";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full overflow-hidden-web flex justify-center mt-16"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[80%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subTitle="WHAT I DO" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-[#FFF5E4] h-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-[#FFF5E4]"></div>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-[#FFF5E4]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
