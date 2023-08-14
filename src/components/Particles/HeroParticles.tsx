import { heroOptions } from "./Options";
import ParticlesComponents from "./ParticlesComponents";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponents
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        options={heroOptions as never}
      />
    </div>
  );
};

export default HeroParticles;
