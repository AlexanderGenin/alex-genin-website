import React from "react";
import Heading from "./heading";
import Project from "./project";

export default function Projects({ projects }) {
  return (
    <section className="projects">
      <div className="container">
        <Heading content={"My projects"} />
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </section>
  );
}
