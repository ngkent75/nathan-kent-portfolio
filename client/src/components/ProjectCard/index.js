import React from 'react';

const ProjectCard = (props) => {
  return (
    <div align="center">
      <h1>{props.title}</h1>
      <img src={props.screenshot} alt="Project Screenshot" width="600" />
      <div align="start">
        <p>{props.summary}</p>
      </div>
      <p>{props.repo}</p>
      <p>{props.deployment}</p>
    </div>
  );
};

export default ProjectCard;