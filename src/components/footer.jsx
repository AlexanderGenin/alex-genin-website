import React from "react";
import Social from "./social";

export default function Footer({ logo, links, socials, name }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          {logo}
          <nav>
            <ul className="footer__links">
              {links.map(({ linkTo, title }, index) => (
                <li key={index}>
                  <a className="footer__link" href={linkTo}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="socials">
            {socials.map((social, index) => (
              <Social {...social} key={index} style={{ margin: "0.8rem" }} />
            ))}
          </div>
          <div className="copyright">
            <p>© 2021, {name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
