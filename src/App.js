import React, { useState } from "react";
import { ReactComponent as Logo } from "./images/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/alex-genin-w-circle.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaRegPaperPlane,
  FaGithub,
  FaLinkedin,
  FaVk,
  FaFacebookF,
} from "react-icons/fa";
import { ReactComponent as MongoDB } from "./images/mongodb.svg";
import { ReactComponent as Express } from "./images/express.svg";
import { ReactComponent as ReactJS } from "./images/react.svg";
import { ReactComponent as Node } from "./images/node.svg";
import { ReactComponent as StocksAppSummary } from "./images/stocks-app-summary.svg";
import { ReactComponent as StocksAppAnalysis } from "./images/stocks-app-analysis.svg";
import { ReactComponent as PortfolioAbout } from "./images/portfolio-about.svg";
import { ReactComponent as PortfolioFeedback } from "./images/portfolio-feedback.svg";
import Heading from "./components/heading";

function App() {
  const [showLangs, setShowLangs] = useState(false);
  const [langs, setLangs] = useState(["EN", "RU"]);
  const switchLangs = (bool) => {
    setLangs((prevLangs) => [prevLangs[+bool], prevLangs[+!bool]]);
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <Logo />
          <nav>
            <div></div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div
            className="switch-lang"
            onClick={() => setShowLangs((prev) => !prev)}
          >
            <div className="langs">
              <p
                onClick={() => {
                  showLangs && switchLangs(false);
                }}
              >
                {langs[0]}
              </p>
              {showLangs && <p onClick={() => switchLangs(true)}>{langs[1]}</p>}
            </div>
            <IoIosArrowDown className={showLangs && "rotate"} />
          </div>
        </header>
      </div>
      <main>
        <div className="container">
          <div className="intro">
            <img src={AlexGeninPhoto} className="photo" alt="Alex Genin" />
            <div className="heading-container">
              <h1>
                <span className="first-word">Alex</span>
                <br />
                Genin
              </h1>
              <h2>Full stack Web Developer who loves his job!</h2>
              <div className="buttons">
                <a id="projects-button" href="#">
                  <span>Projects</span>
                  <HiArrowNarrowRight size={28} />
                </a>
                <a id="contact-button" href="#">
                  Contact
                  <FaRegPaperPlane size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="social-networks">
            <div className="social-networks-line"></div>
            <FaGithub size={20} />
            <FaLinkedin size={20} />
            <FaVk size={20} />
            <FaFacebookF size={20} />
          </div>
        </div>
        <section className="mern">
          <h3>
            Working with <span className="mern-word">MERN</span>
          </h3>
          <div className="mern-container">
            <div className="tech-container">
              <MongoDB />
              <p className="tech-name">MongoDB</p>
              <p className="tech-description">Database</p>
            </div>
            <div className="tech-container">
              <Express fill={"#fff"} />
              <p className="tech-name">Express</p>
              <p className="tech-description">Framework</p>
            </div>
            <div className="tech-container">
              <ReactJS />
              <p className="tech-name">React</p>
              <p className="tech-description">Front-end</p>
            </div>
            <div className="tech-container">
              <Node />
              <p className="tech-name">Node</p>
              <p className="tech-description">Back-end</p>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="projects">
            <Heading content={"My projects"} />
            <div className="project-container">
              <div className="description-container">
                <h4>Stocks live app</h4>
                <p className="description-text">
                  An interactive lightweight app to get live info about various
                  stocks on global market.
                </p>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Chart.js</li>
                  <li>Yahoo Finance API</li>
                </ul>
                <div className="link-container">
                  <a href="#">
                    Take a look
                    <HiArrowNarrowRight size={22} />
                  </a>
                </div>
              </div>
              <div className="images-container">
                <StocksAppSummary />
                <StocksAppAnalysis />
              </div>
            </div>
            <div className="project-container">
              <div className="images-container portfolio">
                <PortfolioFeedback />
                <PortfolioAbout />
              </div>
              <div className="description-container">
                <h4>This website</h4>
                <p className="description-text">
                  I created this website from scratch. Starting from UX/UI
                  design, writing code and finishing with uploading it to the
                  host.
                </p>
                <ul>
                  <li>React Hooks</li>
                  <li>Sass/CSS3</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
