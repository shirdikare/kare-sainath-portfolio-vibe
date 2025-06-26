
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Shadow particles awakened", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5,
            },
          },
        },
        particles: {
          color: {
            value: ["#9333ea", "#3b82f6", "#06b6d4", "#8b5cf6", "#1e40af"],
          },
          links: {
            color: "#9333ea",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.2, max: 0.9 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ["circle", "triangle", "star", "polygon"],
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
