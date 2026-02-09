import React from "react";
import projectImg from "../assets/project1.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="card">
        <img src={projectImg} loading="lazy" alt="project" />
        <h3>Portfolio Website</h3>
        <p>React based personal portfolio.</p>
      </div>
    </section>
  );
};

export default Projects;
