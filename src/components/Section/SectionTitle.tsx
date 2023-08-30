import { SectionType } from "./SectionType";
import { LazyMotion, domAnimation, m } from "framer-motion";

const SectionTitle = ({ title, subTitle }: SectionType) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-[#E5FBB8] p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{ fontFamily: "JalnanWoff2", fontWeight: "600" }}
        >
          {subTitle}
        </span>
        <h2
          className="tracking-wider text-5xl sm:text-6xl md:text-7xl"
          style={{ fontFamily: "JalnanWoff2" }}
        >
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
