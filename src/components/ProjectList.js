import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const renderProject = projects.map(p => <ProjectItem name={p.name} about={p.about} tech={p.technologies} key={p.id}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {renderProject}
      </div>  
    </div>
  );
}

export default ProjectList;
