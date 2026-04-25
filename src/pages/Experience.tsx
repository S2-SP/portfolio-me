import { motion } from "framer-motion";
 import "../styles.css"; 
 import SA from "../assets/SA.png";
import React from "react";
import ScrollArrow from "./ScrollArrow";

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Standards Australia",
    icon: SA,
    iconBg: "#B6CECE",
    date: "Mar 2023 - Present",
    points: [
      "Implemented and maintained Auth0 authentication integrations (OIDC/SAML) across multiple application improving the login time from 2 -3 minutes to seconds.",
      "Migrated angular application to React improving security, performance with improved and maintainable code",
      "Managed database, routes, and UI/UX design for an intuitive web application.",
      "Led and designed the migration of two WordPress websites to Webflow, ensuring a seamless transition while preserving design integrity, functionality, and SEO, resulting in a 20% performance improvement.",
      "Designed and created REST APIs to provide a smooth connection with the React-based application.",
      "Responsible for managing CI/CD pipeline, deployments to test, uat and production environment and integration of new features while preserving system performance and code quality.",
    ],
  },
  
];

const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};


const ExperienceCard = ({ experience }: { experience: ExperienceType }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, type: "spring" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="timeline-icon" style={{ backgroundColor: experience.iconBg }}>
      <img src={experience.icon} alt={experience.company_name} className="timeline-icon-img" />
    </div>
    <div className="timeline-content">
      <h3 className="timeline-title">{experience.title}</h3>
      <p className="timeline-company">{experience.company_name}</p>
      <p className="timeline-date">{experience.date}</p>
      <ul className="timeline-points">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);


const Experience = () => {
  return (
    <>
    <section id="experience" className="section">
    <motion.div variants={textVariant(0.2)}>
        <h2 className="section-title">Experience</h2>
        <h3 className="resume-header">
          <button className="resume-btn">
            <a
            href={"./sefrina-pradhan-resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link center"
            >
              Resume
            </a>
          </button>
        </h3>
        <div className="timeline-container">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>

      </motion.div>
      <div className="scroll-arrow-wrapper-contact">
        <ScrollArrow targetId="projects"/>
      </div>
    </section>
      
    </>
  );
};

export default Experience;
