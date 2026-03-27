import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LanternProps {
  position: [number, number, number];
  speed: number;
  swayAmount: number;
  swaySpeed: number;
  scale: number;
  color: number;
  timeOffset: number;
}

const Lantern: React.FC<LanternProps> = ({
  position,
  speed,
  swayAmount,
  swaySpeed,
  scale,
  color,
  timeOffset,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const originX = useRef(position[0]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() + timeOffset;

    // Float upward continuously
    groupRef.current.position.y += speed;

    // Gentle horizontal sway
    groupRef.current.position.x =
      originX.current + Math.sin(t * swaySpeed) * swayAmount;

    // Slow lazy spin
    groupRef.current.rotation.y = t * 0.15;

    // Reset to below screen when off the top
    if (groupRef.current.position.y > 9) {
      groupRef.current.position.y = -7;
      originX.current = (Math.random() - 0.5) * 20;
      groupRef.current.position.x = originX.current;
      groupRef.current.position.z = -2 - Math.random() * 10;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Hanging wire loop */}
      <mesh position={[0, 0.82, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.012, 8, 24]} />
        <meshStandardMaterial color={0xaaaaaa} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Top metal cap */}
      <mesh position={[0, 0.68, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 0.07, 16]} />
        <meshStandardMaterial color={0x1a1200} metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Lantern body — translucent warm glow */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 1.3, 16]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.68}
          roughness={0.05}
          metalness={0.0}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Bottom metal cap */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.26, 0.22, 0.07, 16]} />
        <meshStandardMaterial color={0x1a1200} metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Inner warm flame glow */}
      <pointLight
        position={[0, 0, 0]}
        intensity={3.5}
        distance={5}
        color={0xffaa22}
        decay={2}
      />
    </group>
  );
};

export default Lantern;
