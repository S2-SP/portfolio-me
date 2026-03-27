import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Galaxy = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Precompute galaxy geometry
  const geometry = useMemo(() => {
    const particleCount = 30000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const arms = 5;
    const radius = 5;

    const yellow = new THREE.Color("#ffff00");
    const orange = new THREE.Color("#ff8000");
    const white = new THREE.Color("#ffffff");

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const r = Math.random() * radius;
      const spinAngle = r * 1.5;
      const branch = i % arms;
      const branchAngle = (branch / arms) * Math.PI * 2;

      const randomX = (Math.random() - 0.5) * 0.3;
      const randomY = (Math.random() - 0.5) * 0.3;
      const randomZ = (Math.random() - 0.5) * 0.3;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Smooth gradient between yellow → orange → white
      const mix = Math.random();
      const color = new THREE.Color();
      if (mix < 0.5) {
        color.lerpColors(yellow, orange, mix * 2); // yellow → orange
      } else {
        color.lerpColors(orange, white, (mix - 0.5) * 2); // orange → white
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, []);

  // Galaxy rotation based on mouse movement with easing
  let targetX = 0;
  let targetY = 0;

  useFrame(() => {
    targetX += (mouse.x * Math.PI - targetX) * 0.05;
    targetY += (mouse.y * Math.PI * 0.2 - targetY) * 0.05;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = targetX;
      pointsRef.current.rotation.x = targetY;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Galaxy;
