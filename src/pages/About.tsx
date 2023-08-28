import SectionTitle from "../components/Section/SectionTitle";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { introduction } from "../constant/Const";
import AboutCard from "../components/Common/AboutCard";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center overflow-hidden-web pt-24"
    >
      <div className="w-full xl:w-[80%] flex flex-col pb-12">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subTitle="INTRODUCTION" />
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row pb-16">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "GmarketMedium" }}
                className="text-grayscale-0 p-7 flex flex-col gap-6 mt-5"
              >
                <span>{introduction.text[0]}</span>
                <span className="text-[#FFC4C4]">{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
                <span>{introduction.text[4]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center">
              <AboutCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
