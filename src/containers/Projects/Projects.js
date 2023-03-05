import React from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-text-all">
        <div className="projects-header">
          <span className="logo-signs">&lt; </span>
          <h1 className="projects-text-header">Projects.</h1>
          <span className="logo-signs"> /&gt;</span>
        </div>
        <CardSlider />
      </div>
    </section>
  );
};

export default Projects;
