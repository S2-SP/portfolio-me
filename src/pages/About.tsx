import React, { JSX } from 'react';
import Tilt from 'react-parallax-tilt';
import profile from '../assets/profile.jpg';
import '../styles.css';
import ScrollArrow from './ScrollArrow';
import { SiAffinitydesigner } from 'react-icons/si';
import { LuCodepen } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';

const services = [
  { title: 'Web Designer', icon: <SiAffinitydesigner size={24} color="#fff" /> },
  { title: 'React Developer', icon: <FaCode size={24} color="#fff" /> },
  { title: 'Full Stack Developer', icon: <LuCodepen size={24} color="#fff" /> },
];

type ServiceCardProps = {
  title: string;
  icon: JSX.Element;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => (
  <Tilt className="card-tilt">
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
    </div>
  </Tilt>
);

const About = () => (
  <section id="about" className="about-section">
    <h2 className="section-title">About Me</h2>

    <div className="about-img-text">
      <img src={profile} alt="Sefrina Pradhan" className="about-image" />
      <div className="about-text-block">
        <p className="about-description">
          I'm a Full Stack Developer based in Australia with a passion for building
          responsive, user-friendly web applications. Currently at{' '}
          <strong>Standards Australia</strong>, I work across the entire development
          lifecycle — from designing RESTful APIs with ASP.NET Core to crafting
          polished React interfaces.
        </p>
        <p className="about-description">
          I thrive at the intersection of clean code and thoughtful design. Whether
          it's migrating legacy systems, optimising CI/CD pipelines, or leading a
          website redesign, I bring attention to detail and a strong sense of
          ownership to every project.
        </p>
        <p className="about-description">
          Outside of work I enjoy exploring 3D modelling and animation — which
          is why this page has floating lanterns.
        </p>
      </div>
    </div>

    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>

    <div className="scroll-arrow-wrapper-contact">
      <ScrollArrow targetId="experience" />
    </div>
  </section>
);

export default About;
