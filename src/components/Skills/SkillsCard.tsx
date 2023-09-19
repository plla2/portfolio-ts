import { LazyMotion, domAnimation, m } from "framer-motion";
import { skills } from "../../constant/Const";

const SkillsCard = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[220px] h-[240px] flex flex-col items-center bg-[#FFF6E0] rounded-xl border-4 border-[#FFBFBF] cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
              <img
                src={skill.icon}
                alt="스킬 아이콘"
                className="h-[50px] flex justify-center items-center w-[50px] rounded-[50%] p-1 object-cover"
              />
              <span className="text-lg" style={{ fontFamily: "GmarketMedium" }}>
                {skill.title}
              </span>
              <span className="text-center text-lg py-3 px-4">
                {skill.desc}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCard;
