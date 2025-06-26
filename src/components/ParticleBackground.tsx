
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
              quantity: 8,
            },
            attract: {
              distance: 250,
              duration: 0.6,
              factor: 8,
            },
          },
        },
        particles: {
          color: {
            value: ["#7c3aed", "#2563eb", "#0891b2", "#8b5cf6", "#1e40af", "#6366f1"],
          },
          links: {
            color: "#7c3aed",
            distance: 140,
            enable: true,
            opacity: 0.3,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.7 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.05,
            },
          },
          shape: {
            type: ["circle", "triangle", "star", "polygon"],
          },
          size: {
            value: { min: 1, max: 6 },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
