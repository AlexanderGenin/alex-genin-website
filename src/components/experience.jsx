import React from "react";
import Heading from "./heading";
import { ReactComponent as Timeline } from "../images/timeline.svg";
import ExperienceBlock from "./experienceBlock";

export default function Experience({ experiences }) {
  return (
    <section className="experience">
      <div className="container">
        <Heading content={"My experience"} />
        <div className="experience__timeline">
          <div className="timeline">
            <Timeline />
          </div>
          <div className="experiences">
            {experiences.map((experience, index) => (
              <ExperienceBlock key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
