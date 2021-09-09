import React from "react";
import Heading from "./common/heading";
import Subheading from "./common/subheading";
import TechBox from "./common/techBox";

export default function Skills({ current, fundamental, previous, other }) {
  return (
    <section className="skills">
      <div className="dark-wrapper">
        <div className="container">
          <div className="skills-container">
            <Heading content={"Skills"} />
            <div className="skills-container__current">
              <Subheading content={"Current stack"} />
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
              <div className="skills-container__previous">
                <Subheading content={"Previous stack"} />
                <div className="skills-container__techs">
                  {previous.map((tech, index) => {
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
}
