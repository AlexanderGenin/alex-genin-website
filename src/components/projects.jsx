import React from "react";
import Heading from "./common/heading";
import Project from "./project";

export default function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <Heading content={"My projects"} />
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
}
