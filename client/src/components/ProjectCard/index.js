import React from 'react';
import './index.css';

const ProjectCard = (props) => {
  return (
    <div align="center">
      <h1>{props.title}</h1>
      <img src={props.screenshot} alt="Project Screenshot" width="500" style={{ border: '1px solid black' }} />
      <div align="start">
        <p>{props.summary}</p>
      </div>
      <p>{props.repo}</p>
      <p>{props.deployment}</p>
    </div>
  );
};

export default ProjectCard;