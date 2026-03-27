import React from 'react';
import { motion } from 'framer-motion';
import LanternScene from './LanternScene';
import pic from '../assets/pic.jpg';
import '../styles.css';
import ScrollArrow from './ScrollArrow';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="lantern-background">
        <LanternScene />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="profile container">
          <div className="profile-text">
            <h1>Hello, <span></span></h1>
            <h1>I'm Sefrina <span></span></h1>
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-tagline">
              Building clean, performant web experiences<br />
              with React, TypeScript &amp; .NET.
            </p>
          </div>
          <div className="profile-image-wrapper">
            <img src={pic} alt="Sefrina Pradhan" className="profile-img" />
          </div>
        </div>

        <div className="scroll-arrow-wrapper">
          <ScrollArrow targetId="about" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
