import React from "react";

function ProjectItem({ name, about, tech }) {
  const renderTech = tech.map(t => <span key={t}>{t}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTech}
      </div>
    </div>
  );
}

export default ProjectItem;
