import { useCallback, useRef } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { ParticlesProps } from "./ParticleType";
import { IParticlesProps, Particles } from "react-tsparticles";

const ParticlesComponent = ({ options, className, id }: ParticlesProps) => {
  const isInitialized = useRef(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    if (!isInitialized.current) {
      await loadFull(engine);
      isInitialized.current = true;
    }
  }, []);

  const particleLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    []
  );

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particleLoaded}
      options={options as IParticlesProps["options"]}
    />
  );
};

export default ParticlesComponent;
