"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// 动态导入避免服务器端渲染问题
const Particles = dynamic(() => import('react-particles'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />
});

// 占位组件
const LoadingPlaceholder = () => {
  return <div className="fixed inset-0 -z-10" />;
};

const ParticlesBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    // 动态导入tsparticles-slim库
    const { loadSlim } = await import('tsparticles-slim');
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // 加载完成后的处理
  }, []);

  if (!isClient) return <LoadingPlaceholder />;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#3b82f6",
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground; 