import React, { useState } from "react";
import { ReactComponent as Logo } from "./images/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/alex-genin-w-circle.png";
import {
  HiArrowNarrowRight,
  HiDownload,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoRocketOutline,
  IoLaptopOutline,
  IoBookOutline,
} from "react-icons/io5";
import {
  FaRegPaperPlane,
  FaGithub,
  FaLinkedin,
  FaVk,
  FaFacebookF,
} from "react-icons/fa";

import StyledCsLogo from "./images/styledcs.png";
import { ReactComponent as MongoDB } from "./images/mongodb.svg";
import { ReactComponent as Express } from "./images/express.svg";
import { ReactComponent as ReactJS } from "./images/react.svg";
import { ReactComponent as Node } from "./images/node.svg";
import { ReactComponent as JavaScript } from "./images/javascript.svg";
import { ReactComponent as TypeScript } from "./images/typescript.svg";
import { ReactComponent as HTML5Logo } from "./images/html.svg";
import { ReactComponent as CSS3Logo } from "./images/css.svg";
import { ReactComponent as GitLogo } from "./images/git.svg";
import { ReactComponent as WebpackLogo } from "./images/webpack.svg";
import { ReactComponent as WordPressLogo } from "./images/wordpress.svg";
import { ReactComponent as JQueryLogo } from "./images/jquery.svg";
import { ReactComponent as PHPLogo } from "./images/php.svg";
import { ReactComponent as MySQLLogo } from "./images/mysql.svg";
import { ReactComponent as SassLogo } from "./images/sass.svg";
import { ReactComponent as JestLogo } from "./images/jest.svg";
import { ReactComponent as BootstrapLogo } from "./images/bootstrap-5-1.svg";
import { ReactComponent as FigmaLogo } from "./images/figma.svg";
import { ReactComponent as StocksAppSummary } from "./images/stocks-app-summary.svg";
import { ReactComponent as StocksAppAnalysis } from "./images/stocks-app-analysis.svg";
import { ReactComponent as PortfolioAbout } from "./images/portfolio-about.svg";
import { ReactComponent as PortfolioFeedback } from "./images/portfolio-feedback.svg";
import { ReactComponent as ReviewAvatar } from "./images/review-avatar.svg";
import { ReactComponent as GraduationHat } from "./images/graduation-hat.svg";
import { ReactComponent as Book } from "./images/book.svg";
import { ReactComponent as Translation } from "./images/translation.svg";
import { ReactComponent as ExperienceIcon } from "./images/experience.svg";
import { ReactComponent as Chat } from "./images/chat.svg";
import { ReactComponent as Sports } from "./images/sports.svg";
import { ReactComponent as Timeline } from "./images/timeline.svg";

import Heading from "./components/heading";
import Subheading from "./components/subheading";
import TechBox from "./components/techBox";
import QuickFact from "./components/quickFact";
import Project from "./components/project";
import Experience from "./components/experience";

const quickFacts = [
  {
    icon: <GraduationHat />,
    heading: "Moscow State University Student",
    text: "I’m studying at the top 1 University of Russia and get only the highest grades",
  },
  {
    icon: <Book />,
    heading: "Self-taught developer",
    text: "Learned everything I know with the help of books and online resources",
  },
  {
    icon: <Translation />,
    heading: "Advanced English (C1)",
    text: "Approved by official Cambridge certificate (FCE) which you can check here",
  },
  {
    icon: <ExperienceIcon className="ajust" />,
    heading: "Real Work Experience",
    text: "Successfully delivered two Wordpress projects on UpWork. Received positive feedback",
  },
  {
    icon: <Chat />,
    heading: "Soft Skills",
    text: "I value a lot my reputation of a friendly and trustworthy person :)",
  },
  {
    icon: <Sports />,
    heading: "My Hobbies",
    text: "I am keen on travelling and also love playing all kinds of team sports games!",
  },
];

const projects = [
  {
    name: "Stocks Live App",
    description:
      "An interactive lightweight app to get live info about various stocks on global market.",
    techs: ["React", "Node", "Chart.js", "Yahoo Finance API"],
    images: [<StocksAppSummary />, <StocksAppAnalysis />],
    showLink: true,
    portfolioMarker: "",
  },
  {
    name: "Stocks Live App",
    description:
      "I created this website from scratch. Starting with UX/UI design, prototyping and finishing with writing code and uploading it to the host.",
    techs: ["React Hooks", "JavaScript", "Sass/CSS3", "HTML5"],
    images: [<PortfolioFeedback />, <PortfolioAbout />],
    showLink: false,
    portfolioMarker: "portfolio",
  },
];

const experiences = [
  {
    icon: <IoRocketOutline />,
    title: "Moving to React and Node",
    descList: [
      "Learning Node, React, Express, MongoDB",
      "Reading official documentations",
      "Creating pet projects like this for practice",
      "Improving my JavaScript skills with LeetCode",
    ],
  },
  {
    icon: <IoLaptopOutline />,
    title: "Freelancing on UpWork",
    descList: [
      "Continue learning JavaScript, PHP, Wordpress, MySQL",
      "Studying Web Design fundamentals",
      "Creating custom WordPress Theme for ThemeForest",
      "Working on UpWork: successfully making custom WordPress plugins (visit my profile     )",
    ],
  },
  {
    icon: <IoBookOutline />,
    title: "Learning Javascript and PHP",
    descList: [
      "Learning Web Development in general",
      "Watching countless tutorials online",
      "Reading JavaScript and PHP docs",
      "Practicing, practicing, practicing...",
    ],
  },
];

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
              <p className="moto">
                Full stack Web Developer who loves his job!
              </p>
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
        <div className="dark-wrapper">
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
        </div>
        <div className="container">
          <section className="projects">
            <Heading content={"My projects"} />
            {projects.map((project) => {
              return <Project {...project} />;
            })}
          </section>
        </div>
        <div className="dark-wrapper">
          <div className="container">
            <section className="skills">
              <Heading content={"Skills"} />
              <div className="current-stack">
                <Subheading content={"Current stack"} />
                <div className="techs-container">
                  <TechBox
                    title={"React"}
                    exp={"1+ years"}
                    icon={<ReactJS />}
                    type={"big"}
                  />
                  <TechBox
                    title={"JavaScript"}
                    exp={"4+ years"}
                    icon={<JavaScript />}
                    type={"big"}
                  />
                  <TechBox
                    title={"Node"}
                    exp={"1+ years"}
                    icon={<Node />}
                    type={"big"}
                  />
                  <TechBox
                    title={"TypeScript"}
                    exp={"<1 year"}
                    icon={<TypeScript />}
                    type={"big"}
                  />
                  <TechBox
                    title={"Express"}
                    exp={"1+ years"}
                    icon={<Express fill={"#fff"} />}
                    type={"big"}
                  />
                  <TechBox
                    title={"MongoDB"}
                    exp={"1+ years"}
                    icon={<MongoDB />}
                    type={"big"}
                  />
                </div>
              </div>
              <div className="fundamental-previous-container">
                <div className="fundamental">
                  <Subheading content={"Fundamental"} />
                  <div className="techs-container">
                    <TechBox
                      title={"HTML5"}
                      exp={"4+ years"}
                      icon={<HTML5Logo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"CSS3"}
                      exp={"4+ years"}
                      icon={<CSS3Logo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"Git"}
                      exp={"2+ years"}
                      icon={<GitLogo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"Webpack"}
                      exp={"1+ years"}
                      icon={<WebpackLogo />}
                      type={"medium"}
                    />
                  </div>
                </div>
                <div className="previous-stack">
                  <Subheading content={"Previous stack"} />
                  <div className="techs-container">
                    <TechBox
                      title={"WP"}
                      exp={"3+ years"}
                      icon={<WordPressLogo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"JQuery"}
                      exp={"3+ years"}
                      icon={<JQueryLogo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"PHP"}
                      exp={"3+ years"}
                      icon={<PHPLogo />}
                      type={"medium"}
                    />
                    <TechBox
                      title={"MySQL"}
                      exp={"2+ years"}
                      icon={<MySQLLogo />}
                      type={"medium"}
                    />
                  </div>
                </div>
              </div>
              <div className="other">
                <Subheading content={"Other"} />
                <div className="techs-container">
                  <TechBox title={"Jest"} icon={<JestLogo />} type={"small"} />
                  <TechBox title={"Sass"} icon={<SassLogo />} type={"small"} />
                  <TechBox
                    title={"Styled c-s"}
                    icon={<img src={StyledCsLogo} />}
                    type={"small"}
                  />
                  <TechBox
                    title={"Bootstrap"}
                    icon={<BootstrapLogo />}
                    type={"small"}
                  />
                  <TechBox
                    title={"Figma"}
                    icon={<FigmaLogo />}
                    type={"small"}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="about">
          <div className="container">
            <Heading content={"About me"} />
            <div className="desc-container">
              <div className="greeting-intro">
                <p class="greeting">Hello There!</p>
                <p className="intro">
                  My name is Alexander Genin. I’m a 21 years old professional
                  full stack developer from Russia.
                </p>
              </div>
              <div className="exp-cv">
                <div className="container">
                  <p className="exp-years">1</p>
                  <p className="exp-text">year of experience</p>
                </div>
                <button className="cv">
                  Download CV
                  <HiDownload />
                </button>
              </div>
            </div>
            <div className="quick-facts-grid-container">
              <div className="quick-facts-grid">
                {quickFacts.map((qf, i) => (
                  <QuickFact {...qf} color={i % 2 === 0 ? "yellow" : "red"} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <Heading content={"My experience"} />
            <div className="experience-timeline-container">
              <div className="timeline-container">
                <Timeline />
              </div>
              <div className="experiences-container">
                {experiences.map((experience) => (
                  <Experience {...experience} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="reviews">
          <div className="container">
            <Heading content={"What clients say"} />
            <div className="review">
              <div className="avatar-container">
                <ReviewAvatar />
              </div>
              <div className="content-container">
                <ImQuotesLeft size={74} />
                <figure>
                  <blockquote cite="https://www.upwork.com/freelancers/~0132ab416b37ee78a5">
                    <p>
                      Alexander did an excellent job creating my WordPress
                      custom plugin. He was very communicative during the whole
                      development and very open to suggestions. Alexander
                      followed instructions very well and is very attentive to
                      details. I will definitely hire Alex again next time I
                      have a PHP project.
                    </p>
                  </blockquote>
                  <figcaption>
                    <p>— Esteban Rodriguez from GrubBytes</p>
                    <div className="cite-container">
                      <a
                        href="https://www.upwork.com/freelancers/~0132ab416b37ee78a5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <cite>See it on UpWork &nbsp;</cite>
                        <HiOutlineExternalLink size={18} />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="contacts">
          <div className="container">
            <Heading content="Get in touch" />
            <div className="contacts-container">
              <div className="description">
                <p class="heading">Let's Work Together!</p>
                <p className="text">
                  Always open to new projects and collaborations! Ready to be
                  hired. Don’t hesitate to drop me a line!
                </p>
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
        <footer>
          <div className="container">
            <div className="footer-container">
              <Logo />
              <nav>
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
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
