import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Lantern from './Lantern';
import './../styles.css';

// Warm amber/orange palette only — no green or blue
const warmColors = [0xffd27f, 0xffb347, 0xff8c00, 0xffa040, 0xffcc44, 0xff7b00];

const LanternScene: React.FC = () => {
  const lanterns = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        position: [
          (Math.random() - 0.5) * 20,
          -8 + Math.random() * 17, // stagger initial heights so they don't all reset at once
          -2 - Math.random() * 10,
        ] as [number, number, number],
        speed: 0.008 + Math.random() * 0.012,
        swayAmount: 0.3 + Math.random() * 0.5,
        swaySpeed: 0.4 + Math.random() * 0.5,
        scale: 0.55 + Math.random() * 0.6,
        color: warmColors[i % warmColors.length],
        timeOffset: Math.random() * Math.PI * 2,
      })),
    []
  );

  return (
    <Canvas
      className="lantern-canvas"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 1, 12], fov: 55 }}
    >
      <ambientLight intensity={0.1} />
      {lanterns.map((lantern, i) => (
        <Lantern key={i} {...lantern} />
      ))}
    </Canvas>
  );
};

export default LanternScene;
