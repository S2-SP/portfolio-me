import React from 'react';
import ScrollArrow from './ScrollArrow';
import "./../styles.css";
import ProjectCard from '../components/ProjectCardView';

const projects = [
  {
    title: "Clock Animation",
    description: "A simple clock built using HTML, CSS, and JavaScript to demonstrate animation techniques.",
    videoUrl: "./clock.mp4", // Replace with your video URL
    githubUrl: "https://github.com/S2-SP/Clock-Project", // Replace with your GitHub repo link
  },
  {
    title: "Weather",
    description: "A simple weather app built using HTML, CSS, and JavaScript to get the weather details in different cities.",
    videoUrl: "./weather.mp4", // Replace with your video URL
    githubUrl: "https://github.com/S2-SP/weather-app", // Replace with your GitHub repo link
  },
  {
    title: "3D Model",
    description: "Using blender to create a 3D model of a work-space which includes desk, PC, chair and other small things.",
    videoUrl: "./room/3dWorkSpace.mp4", // Replace with your video URL
    githubUrl: "https://github.com/S2-SP/3droom", // Replace with your GitHub repo link
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          videoUrl={project.videoUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>

    <div className="scroll-arrow-wrapper-contact">
    <ScrollArrow targetId="skills" />
    </div>
    
  </section>
);

export default Projects;
