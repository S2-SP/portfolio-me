import React from 'react';
import ScrollArrow from './ScrollArrow';
import "./../styles.css";
import ProjectCard from '../components/ProjectCardView';

const projects = [
  {
    title: "Clock Animation",
    description: "A simple clock built using HTML, CSS, and JavaScript to demonstrate animation techniques.",
    videoUrl: "./clock.mp4", 
    githubUrl: "https://github.com/S2-SP/Clock-Project",
    link:"https://clock-project-flame.vercel.app/"
  },
  {
    title: "Weather",
    description: "A simple weather app built using HTML, CSS, and JavaScript to get the weather details in different cities.",
    videoUrl: "./weather.mp4",
    githubUrl: "https://github.com/S2-SP/weather-app", 
    link:"https://weather-app-steel-kappa-74.vercel.app/"
  },
  {
    title:"Gallery of words",
    description:"Gallery of Words is a full-stack poetry publishing platform where an admin can write, publish, edit, and delete poems, and the public can browse and read them. It is a single-page application built with a modern React frontend and a managed cloud database backend.",
    videoUrl:"./gallery-of-words.mov",
    githubUrl:"https://github.com/S2-SP/poetry",
    link:"https://poetry-o1elmml35-s2-sps-projects.vercel.app/"
  },
  {
    title:"Expense Tracker",
    description:"Expense tracker is a full-stack web application built with React and ASP.NET Core that allows users to track their expenses and visualize spending patterns through interactive charts and reports.",
    videoUrl:"./expenseTracker.mov",
    githubUrl:"https://github.com/S2-SP/ExpenseTracker",
    link:"https://github.com/S2-SP/ExpenseTracker"
  },
  {
    title:"Viora",
    description:"Viora is a full stack application built using React and OPEN AI API to summarize and generate transcript when uploading a video. It helps turning long meeting videos into transcripts, summaries, and actionable tasks.",
    videoUrl:"./viora.mov",
    githubUrl:"https://github.com/S2-SP/AI-video-transcript-generator-summarizer",
    link:"https://github.com/S2-SP/AI-video-transcript-generator-summarizer"
  }
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
          link={project.link ?? ""}
        />
      ))}
    </div>

    <div className="scroll-arrow-wrapper-contact">
    <ScrollArrow targetId="skills" />
    </div>
    
  </section>
);

export default Projects;
