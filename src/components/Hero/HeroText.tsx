import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "plla2 ?";
  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl cursor-default"
          style={{ fontFamily: "Jalnan" }}
        >
          <m.span
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Who is{" "}
          </m.span>
          <m.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-500 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
