import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import ScrollArrow from "./ScrollArrow";
import "./../styles.css";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from 'three';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

const Model = () => {
  const gltf = useGLTF("/room/3droom.glb");
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      groupRef.current.position.sub(center); // Center the model
    }
  }, []);

  return (
    <group ref={groupRef}>
      <primitive
  object={gltf.scene}
  scale={3.5}
  position={[0, 0, 0]}
  rotation={[0, 0, 0]} // ← rotate model here
/>

    </group>
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
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

const AnimatedMailButton = () => (
  <motion.a
    href="mailto:sefrinapradhan@gmail.com"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="contact-button"
  >
    Send Email
  </motion.a>
);

const ContactCard = () => (
  <Tilt>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="contact-card"
  >
    <h3 style={{fontSize:'16px'}}>Let's Connect</h3>
    <p style={{fontSize:'14px'}}>Reach out via email or connect on socials:</p>
    <div className="contact-icons">
      <AnimatedMailButton/>
      <a href="https://github.com/S2-SP" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaGithub size={28} />
      </a>
      <a href="https://www.linkedin.com/in/sefrina-pradhan-34a36b1a6/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaLinkedin size={28} />
      </a>
    </div>
  </motion.div>
  </Tilt>
);
const ContactButton = () => (
  <section id="contact" className="section" style={{ position: "relative", zIndex: 1 }}>
    <h2 className="section-title">Contact</h2>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        width: "100%",
      }}
    >
      {/* Left: Contact Card */}
      <div style={{ flex: 1, marginLeft: '70px'}}>
        <ContactCard />
      </div>

      {/* Right: 3D Model */}
      <div style={{ flex: 2, height: "70vh" }}>
        <Canvas className="fullscreen-canvas" camera={{ position: [35, 5, -30], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 30, 10]} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>

    <div className="scroll-arrow-wrapper-contact">
      <ScrollArrow targetId="home" />
    </div>
  </section>
);

export default ContactButton;
