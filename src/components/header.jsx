import React, { useState } from "react";

export default function Header({ links, logo }) {
  const [activeLink, setActiveLink] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header id="home">
      <div
        className={"menu-bg-dark" + (openMenu ? " menu-bg-dark_open" : "")}
      ></div>
      <div className={"menu-bg" + (openMenu ? " menu-bg_open" : "")}></div>
      <div className="container">
        <div className="header">
          <div className="logo">{logo}</div>
          <nav className={"nav" + (openMenu ? " nav_open" : "")}>
            <ul className="nav-list">
              {links.map(({ linkTo, title }, index) => {
                return (
                  <li
                    key={index}
                    className="nav-list__item"
                    onClick={() => setActiveLink(index)}
                  >
                    <a
                      href={linkTo}
                      className={
                        "nav-list__link" +
                        (activeLink === index ? " nav-list__link_active" : "")
                      }
                      onClick={() => setOpenMenu(false)}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={"burger" + (openMenu ? " burger_open" : "")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="burger__bar burger__bar-1"></div>
            <div className="burger__bar burger__bar-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
