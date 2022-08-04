import { HiDownload } from "react-icons/hi";
import Heading from "./common/Heading";
import Fact from "./common/Fact";
import Resume from "../static/Alexander-Genin_Resume.pdf";
import type { FC } from "react";
import type { TFact } from "types/types";

type Props = {
  heading: string;
  name: string;
  birthDate: string;
  job: string;
  text: string;
  years: string;
  facts: TFact[];
};

const About: FC<Props> = ({
  heading,
  name,
  birthDate,
  job,
  text,
  years,
  facts,
}) => {
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <section className="about" id="about">
      <div className="container">
        <Heading content={"About me"} />
        <div className="intro">
          <div className="intro__content">
            <p className="intro__heading">{heading}</p>
            <p className="intro__text">
              My name is <span className="em">{name}</span>. I’m a{" "}
              <span className="em">{getAge(birthDate)}</span> years old{" "}
              <span className="em">{job}</span> Web Developer from Russia.{" "}
              {text}
            </p>
          </div>
          <div className="experience-and-cv">
            <div className="experience">
              <p className="experience__years">{years}</p>
              <p className="experience__text">years of experience</p>
            </div>
            <a className="cv__button" href={Resume} download>
              Download CV
              <HiDownload />
            </a>
          </div>
        </div>
        <div className="facts">
          <div className="facts-grid">
            {facts.map((fact, index) => (
              <Fact
                {...fact}
                key={index}
                color={index % 2 === 0 ? "yellow" : "red"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
