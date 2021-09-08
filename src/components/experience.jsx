import React from "react";
import Heading from "./heading";
import { ReactComponent as Timeline } from "../images/timeline.svg";
import ExperienceBlock from "./experienceBlock";

export default function Experience({ experiences }) {
  return (
    <section className="experience">
      <div className="container">
        <Heading
          content={
            <>
              <span className="h2__first-word">My</span> experience
            </>
          }
        />
        <div className="experience__content">
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
