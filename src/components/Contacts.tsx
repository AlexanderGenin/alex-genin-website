import React, { useState } from "react";
import Heading from "./common/Heading";
import Social from "./common/Social";
import { HiArrowNarrowRight } from "react-icons/hi";
import { send } from "emailjs-com";
import type { FC } from "react";
import type { TContacts } from "types/types";

const Contacts: FC<TContacts> = ({ heading, text, socials }) => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      "service_otas5x5",
      "template_7s80lxw",
      toSend,
      "user_Fq6lOqqCPVYKrluCiSCxl"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
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
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Your name..."
                name="name"
                value={toSend.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your email for reply..."
                name="email"
                value={toSend.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Your message..."
                id=""
                cols={30}
                rows={6}
                name="message"
                value={toSend.message}
                onChange={handleChange}
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
};

export default Contacts;
