import SectionTitle from "../components/Section/SectionTitle";
import MarqueeCards from "../components/Skills/MarqueeCards";
import SkillsCard from "../components/Skills/SkillsCard";
import SkillsLibrary from "../components/Skills/SkillsLibrary";

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="w-full overflow-hidden-web flex flex-col items-center "
      >
        <div className="w-full min-h-[800px] flex flex-col xl:w-[80%] items-center mt-12">
          <div className="w-full my-10">
            <SectionTitle title="SKILLS" subTitle="WHAT I DO" />
          </div>
          <div className=" w-[85%] xl:border-l-2 xl:border-r-2 xl:border-[#FFF5E4] h-fit">
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-[#FFF5E4]"></div>
              <MarqueeCards direction="left">
                <SkillsCard />
              </MarqueeCards>
            </div>
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-[#FFF5E4]"></div>
              <MarqueeCards direction="right">
                <SkillsCard />
              </MarqueeCards>
            </div>
          </div>
          <div className="mt-16 w-[85%] xl:w-[80%]">
            <SkillsLibrary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
