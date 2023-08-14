import { IParticlesProps } from "react-particles";

export interface HeroOptionsType {
  autoPlay: boolean;

  fullScreen: {
    enable: boolean;
    zIndex: number;
  };

  detectRetina: boolean;
  fpsLimit: number;

  interactivity: {
    detectsOn?: string;
    events: {
      onDiv: [
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        },
        {
          selectors: string;
          enable: boolean;
          mode: string;
          type: string;
        }
      ];

      onHover: {
        enable: boolean;
        mode: string;
        parallax: {
          enable: boolean;
          force: number;
          smooth: number;
        };
      };
      resize: {
        delay: number;
        enable: boolean;
      };
    };

    modes: {
      bounce: {
        distance: number;
      };
      bubble: {
        distance: number;
        duration: number;
        size: number;
        color: {
          value: string;
        };
        opacity: number;
        mix: boolean;
      };

      repulse: {
        distance: number;
        factor: number;
        speed: number;
        maxSpeed: number;
      };
    };
  };

  particles: {
    collisions: {
      enable: boolean;
      mode: string;
    };
    color: {
      value: string;
    };
    move: {
      angle: {
        offset: number;
        value: number;
      };
      center: {
        x: number;
        y: number;
        mode: string;
        radius: number;
      };
      direction: [string, string, string, string];
      drift: number;
      enable: boolean;
      random: boolean;
      size: boolean;
      speed: number;
      outMode: string;
    };
    number: {
      limit: number;
      value: number;
    };

    opacity: {
      random: {
        enable: boolean;
        minimumValue: number;
        maxValue: number;
      };
      value: number;
      animation: {
        count: number;
        enable: boolean;
        speed: number;
        decay: number;
        sync: boolean;
        destroy: string;
        startValue: string;
      };
    };

    shape: {
      type: string;
      character: [
        {
          fill: boolean;
          font: string;
          style: string;
          value: [string];
          weight: string;
        },
        {
          fill: boolean;
          font: string;
          style: string;
          value: [string];
          weight: string;
        },
        {
          fill: boolean;
          font: string;
          style: string;
          value: [string];
          weight: string;
        },
        {
          fill: boolean;
          font: string;
          style: string;
          value: [string];
          weight: string;
        }
      ];
    };

    size: {
      random: {
        enable: boolean;
        minimumValue: number;
        maxValue: number;
      };
      animation: {
        count: number;
        enable: boolean;
        speed: number;
        decay: number;
        sync: boolean;
        destroy: string;
        startValue: string;
      };
    };

    lineLinked: {
      blink: boolean;
      color: {
        value: string;
      };
      consent: boolean;
      distance: number;
      enable: boolean;
      frequency: number;
      opacity: number;
      width: number;
    };
  };
  pauseOnBlur: boolean;
  pauseOnOutsideViewport: boolean;
  smooth: boolean;
}

export interface ParticlesProps {
  options: IParticlesProps;
  className?: string;
  id?: string;
}
