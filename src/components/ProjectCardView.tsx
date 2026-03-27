import React from 'react';
import { FaGithub } from 'react-icons/fa';
import "./../styles.css";

type ProjectCardProps = {
  title: string;
  description: string;
  videoUrl: string;
  githubUrl: string;
  link?:string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, videoUrl, githubUrl, link}) => (
  <div className="project-card">
    <div className="project-video">
      <video 
      width="100%" 
      controls
      autoPlay
      loop
      playsInline
      muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='project-body'>
      <h3 className="project-title"><a href={link ?? githubUrl} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p className="project-description">{description}</p>
    </div>
    
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub size={24} /> GitHub Repo
    </a>
  </div>
);

export default ProjectCard;