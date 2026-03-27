import React,{JSX} from 'react';
import ScrollArrow from './ScrollArrow';
import "./../styles.css";
import { FaCode, FaDatabase } from 'react-icons/fa6';
import { FaCogs, FaTools, FaUserFriends } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";

const skill = [
  {
    category: "Soft Skills",
    icon: <FaUserFriends size={24} color="white" />,
    skills: ["Communication", "Teamwork", "Time Management", "Critical Thinking"],
  },
  {
    category: "Web Development",
    icon: <FaCode size={24} color="white" />,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "C#", "Tailwind", "Material-UI", "TypeScript"],
  },
  {
    category: "Backend & API",
    icon: <FaCogs size={24} color="white" />,
    skills: ["ASP.NET Core","REST APIs", "Azure DevOps", "OpenAI API"],
  },
  {
    category: "Tools & UX",
    icon: <FaTools size={24} color="white" />,
    skills: ["Figma", "Canva"],
  },
  {
    category: "Database",
    icon: <FaDatabase size={24} color="white" />,
    skills: ["SQL Server", "PostgreSQL", "Supabase"],
  },
  
  
];

type ServiceCardProps = {
  title: string;
  icon: JSX.Element;
  skills: any[];
};

const ServiceCard : React.FC<ServiceCardProps> = ({ title, icon, skills }) => (
  <Tilt className="card-tilt">
    <div className="card">
      <div className="planet-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <ul className='skills-list'>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
    </div>
  </Tilt>
);

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Skills</h2>
    <div className="services-container">
      
      {skill.map((skill, index) => (
        <ServiceCard key={index} title={skill.category} icon={skill.icon} skills={skill.skills}  />
      ))}
    </div>
    <div className="scroll-arrow-wrapper-contact">
    <ScrollArrow targetId="contact" />
    </div>
  </section>
);

export default Skills;
