import React from 'react';
import projects from "../../info/projects.json";
import ProjectCard from "../ProjectCard";

function Project1() {
  return (
    <ProjectCard 
      title={projects[0].title}
      screenshot={projects[0].screenshot}
      summary={projects[0].summary}
      repo={projects[0].repo}
      deployment={projects[0].deployment}
    />
  );
}

export default Project1;