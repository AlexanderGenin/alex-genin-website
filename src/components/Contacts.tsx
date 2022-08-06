import React, { useEffect, useState } from "react";
import Heading from "./common/Heading";
import Social from "./common/Social";
import { HiArrowNarrowRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import type { FC } from "react";
import type { TContacts } from "types/types";

type FormState = "idle" | "pending" | "success" | "error";
type Email = {
  name: string;
  email: string;
  message: string;
};

const Contacts: FC<TContacts> = ({ heading, text, socials }) => {
  const [toSend, setToSend] = useState<Email>({
    name: "",
    email: "",
    message: "",
  });

  const buttonText = (state: FormState) => {
    switch (state) {
      case "idle":
        return "Send";
      case "pending":
        return "....";
      case "success":
        return "Sent";
      case "error":
        return "Error";
      default:
        break;
    }
  };

  const [formState, setFormState] = useState<FormState>("idle");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (formState === "success" || formState === "error") {
      timeout = setTimeout(() => {}, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [formState]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState !== "idle") return;
    setFormState("pending");
    emailjs
      .send("service_nl24wlb", "template_npxem2d", toSend)
      .then(() => {
        setFormState("success");
      })
      .catch(() => {
        setFormState("error");
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
                {buttonText(formState)}&nbsp;
                {formState === "idle" && <HiArrowNarrowRight />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
