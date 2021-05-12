import React from 'react';
import projects from "../../projects.json";
import ProjectCard from "../ProjectCard";

function Project3() {
  return (
    <ProjectCard 
      title={projects[2].title}
      screenshot={projects[2].screenshot}
      summary={projects[2].summary}
      repo={projects[2].repo}
      deployment={projects[2].deployment}
    />
  );
}

export default Project3;