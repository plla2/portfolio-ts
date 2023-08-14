import HeroText from "../components/Hero/HeroText";
import { LazyMotion, domAnimation, m } from "framer-motion";
import HeroParticles from "../components/Particles/HeroParticles";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
        >
          <HeroText />
          <HeroParticles />
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default Hero;
