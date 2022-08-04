import Heading from "./common/Heading";
import Project from "./Project";
import type { FC } from "react";
import type { TProject } from "types/types";

type Props = {
  projects: TProject[];
};

const Projects: FC<Props> = ({ projects }) => {
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
};

export default Projects;
