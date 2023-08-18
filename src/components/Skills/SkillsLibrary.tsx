import { LazyMotion, domAnimation, m } from "framer-motion";
import { skills } from "../../constant/Const";

const SkillsLibrary = () => {
  const frontSkills = skills.slice(0, 9);
  const toolSkills = skills.slice(9, 12);
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex w-full justify-between items-center">
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="w-56 mb-10 relative px-6 py-2 text-center font-light bg-[#9E9FA5] rounded-3xl shadow-lg border-2 border-[#FFF6E0] text-grayscale-50"
        >
          #FRONT-END-SKILLS
        </m.span>
        <ul className="flex h-20 w-full justify-end flex-wrap mb-10 ">
          {frontSkills.map((frontSkill) => (
            <m.li
              key={frontSkill.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="relative w-14 h-14 flex m-2 justify-center flex-col items-center cursor-pointer group border-2 border-[#FFF6E0] bg-[#FFBFBF] rounded-md"
            >
              <span className="absolute top-0 w-36 max-[662px]:w-24 max-[662px]:group-hover:-top-16 max-[662px]:h-14 text-sm bg-[#FFF6E0] text-center text-grayscale-950 px-1 py-2 rounded-md shadow-[0px 10px 10px rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-skillsLibrary border-2 border-[#FFBFBF] before:content-['']  before:absolute before:h-2 before:w-2 before:bg-[#FFF6E0] before:bottom-[-3px]  before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:transition-all before:duration-300 before:ease-skillsLibrary invisible group-hover:visible group-hover:-top-12 group-hover:opacity-100 group-hover:pointer-events-auto">
                {frontSkill.title}
              </span>
              <span className="w-10 h-10 shadow-xl rounded-3xl">
                <img src={frontSkill.icon} alt="스킬 아이콘" />
              </span>
            </m.li>
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-between items-center">
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="w-56 relative px-6 py-2 text-center font-light bg-[#9E9FA5] rounded-3xl shadow-lg border-2 border-[#FFF6E0] text-grayscale-50"
        >
          #USING TOOLS
        </m.span>
        <ul className="flex h-28 w-full justify-center items-center">
          {toolSkills.map((toolSkill) => (
            <m.li
              key={toolSkill.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="relative w-14 h-14 flex m-2 justify-center flex-col items-center cursor-pointer group border-2 border-[#FFF6E0] bg-[#FFBFBF] rounded-md"
            >
              <span className="absolute top-0 w-36 max-[662px]:w-24 text-sm bg-[#FFF6E0] border-2 border-[#FFBFBF] text-center text-grayscale-950 px-1 py-2 rounded-md shadow-[0px 10px 10px rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-skillsLibrary before:content-['']  before:absolute before:h-2 before:w-2 before:bg-[#FFF6E0] before:bottom-[-3px] before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:transition-all before:duration-300 before:ease-skillsLibrary invisible group-hover:visible group-hover:-top-12 group-hover:opacity-100 group-hover:pointer-events-auto">
                {toolSkill.title}
              </span>
              <span className="w-10 h-10 shadow-xl rounded-3xl">
                <img src={toolSkill.icon} alt="스킬 아이콘" />
              </span>
            </m.li>
          ))}
        </ul>
      </div>
    </LazyMotion>
  );
};

export default SkillsLibrary;
