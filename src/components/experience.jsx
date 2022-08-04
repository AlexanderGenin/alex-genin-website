import React from "react";
import Heading from "./common/heading";
import { ReactComponent as Timeline } from "../images/icons/timeline.svg";
import ExperienceBlock from "./common/experienceBlock";

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
