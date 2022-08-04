import Heading from "./common/Heading";
import Timeline from "../images/icons/timeline.svg";
import ExperienceBlock from "./common/ExperienceBlock";
import type { FC } from "react";
import type { TExperience } from "types/types";

type Props = {
  experiences: TExperience[];
};

const Experience: FC<Props> = ({ experiences }) => {
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
};

export default Experience;
