import Heading from "./common/Heading";
import Subheading from "./common/Subheading";
import TechBox from "./common/TechBox";
import type { FC } from "react";
import type { SkillsSet } from "types/types";

const Skills: FC<SkillsSet> = ({
  current,
  fundamental,
  supplementary,
  other,
}) => {
  return (
    <section className="skills">
      <div className="dark-wrapper">
        <div className="container">
          <div className="skills-container">
            <Heading content={"Skills"} />
            <div className="skills-container__current">
              <Subheading content={"Tech stack"} />
              <div className="skills-container__techs">
                {current.map((tech, index) => {
                  return <TechBox key={index} {...tech} />;
                })}
              </div>
            </div>
            <div className="skills-container__wrapper">
              <div className="skills-container__fundamental">
                <Subheading content={"Fundamental"} />
                <div className="skills-container__techs">
                  {fundamental.map((tech, index) => {
                    return <TechBox key={index} {...tech} />;
                  })}
                </div>
              </div>
              <div className="skills-container__supplementary">
                <Subheading content={"Supplementary"} />
                <div className="skills-container__techs">
                  {supplementary.map((tech, index) => {
                    return <TechBox key={index} {...tech} />;
                  })}
                </div>
              </div>
            </div>
            <div className="skills-container__other">
              <Subheading content={"Other"} />
              <div className="skills-container__techs">
                {other.map((tech, index) => {
                  return <TechBox key={index} {...tech} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
