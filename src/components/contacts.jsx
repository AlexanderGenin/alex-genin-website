import React from "react";
import Heading from "./heading";
import Social from "./social";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Contacts({ heading, text, socials }) {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <Heading content="Get in touch" />
        <div className="contacts__container">
          <div className="contacts__description">
            <p className="contacts__heading">{heading}</p>
            <p className="contacts__text">{text}</p>
            <div className="social-networks">
              <p className="social-networks__text">Contact me online:</p>
              <div className="social-networks__container">
                {socials.map((social, index) => (
                  <Social
                    {...social}
                    key={index}
                    style={{
                      marginRight: "0.8rem",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="form">
            <form action="#">
              <input type="text" placeholder="Your name..." />
              <input type="email" placeholder="Your email for reply..." />
              <textarea
                name=""
                placeholder="Your message..."
                id=""
                cols="30"
                rows="6"
              ></textarea>
              <button type="submit">
                Send&nbsp;
                <HiArrowNarrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
