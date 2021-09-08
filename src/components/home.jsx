import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa";
import Social from "./social";

export default function Home({
  photoUrl,
  name,
  surname,
  subtitle,
  buttonsLinks,
  socials,
}) {
  return (
    <section className="home">
      <div className="container">
        <div className="intro">
          <div className="photo__wrapper">
            <img src={photoUrl} className="photo" alt="Alex Genin" />
          </div>
          <div className="content">
            <h1 className="heading">
              <span className="heading__word_offset">{name}</span>
              <br />
              <span className="heading__word">{surname}</span>
            </h1>
            <p className="sentence">{subtitle} who loves his job!</p>
            <div className="social-networks-mobile">
              {socials.map((social, index) => (
                <Social {...social} key={index} style={{ margin: "0.8rem" }} />
              ))}
            </div>
            <div className="buttons">
              <a
                className="buttons__button buttons__button_project"
                href={buttonsLinks[0].linkTo}
              >
                <span>{buttonsLinks[0].title}</span>
                <HiArrowNarrowRight size={28} />
              </a>
              <a
                className="buttons__button buttons__button_contact"
                href={buttonsLinks[1].linkTo}
              >
                {buttonsLinks[1].title}
                <FaRegPaperPlane size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="social-networks">
          <div className="social-networks__line"></div>
          {socials.map((social, index) => (
            <Social {...social} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
