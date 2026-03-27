import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";


const Loader = () => {
    const { progress } = useProgress();
    return (
      <Html>
        {/* sets loading progression if 3d object isnt fully loaded so our website isnt crashing in the meantime */}
        <span className="canvas-loader"></span>
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    );
  };
  
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      {/* point light gives a more localized light source, adding highlights and depth */}
      <pointLight intensity={1} />
      {/* spotlight offers directed lighting, similar to a flashlight */}
      <spotLight
        // position sets the 3D position of the light source in the scene
        position={[-20, 50, 10]}
        // angle controls how wide or narrow the spotlight's beam is.
      />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}> 
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
