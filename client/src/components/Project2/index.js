import React from 'react';
import projects from "../../info/projects.json";
import ProjectCard from "../ProjectCard";

function Project2() {
  return (
    <ProjectCard 
      title={projects[1].title}
      screenshot={projects[1].screenshot}
      summary={projects[1].summary}
      repo={projects[1].repo}
      deployment={projects[1].deployment}
    />
  );
}

export default Project2;