import React from "react";
import { ReactComponent as Logo } from "./images/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/alex-genin-w-circle.png";
import {
  HiArrowNarrowRight,
  HiDownload,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoRocketOutline,
  IoLaptopOutline,
  IoLibraryOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import {
  FaGithub,
  FaLinkedinIn,
  FaVk,
  FaFacebookF,
  FaTelegramPlane,
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
import QuickFact from "./components/quickFact";
import Experience from "./components/experience";
import Header from "./components/header";
import Home from "./components/home";
import Stack from "./components/stack";
import Projects from "./components/projects";
import Skills from "./components/skills";

import FCECertificate from "./static/Alexander-Genin-FCE-certificate.pdf";
import MongoDBCertificates from "./static/Alexander-Genin-MongoDB-certificates.pdf";

const menuLinks = [
  {
    title: "Home",
    linkTo: "#home",
  },
  {
    title: "Projects",
    linkTo: "#projects",
  },
  {
    title: "About me",
    linkTo: "#about",
  },
  {
    title: "Contact",
    linkTo: "#contacts",
  },
];

const socials = [
  {
    url: "https://github.com/AlexanderGenin",
    icon: <FaGithub size={20} />,
  },
  {
    url: "https://www.linkedin.com/in/alex-genin/",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    url: "https://t.me/alexgenin",
    icon: <FaTelegramPlane size={20} />,
  },
  {
    url: "https://www.facebook.com/alexgenin99/",
    icon: <FaFacebookF size={20} />,
  },
  { url: "https://vk.com/alex.genin", icon: <FaVk size={20} /> },
];

const introContent = {
  photoUrl: AlexGeninPhoto,
  name: "Alex",
  surname: "Genin",
  subtitle: "Full Stack Web Developer",
  buttonsLinks: [menuLinks[1], menuLinks[3]],
  socials,
};

const stackTechs = [
  {
    name: "MongoDB",
    description: "Database",
    icon: <MongoDB />,
  },
  {
    name: "Express",
    description: "Framework",
    icon: <Express fill={"#fff"} />,
  },
  {
    name: "React",
    description: "Front-end",
    icon: <ReactJS />,
  },
  {
    name: "Node",
    description: "Back-end",
    icon: <Node />,
  },
];

const stack = "MERN";

const quickFacts = [
  {
    icon: <GraduationHat />,
    heading: "Moscow State University",
    text: "I’m studying at the top 1 University of Russia and get only the highest grades",
  },
  {
    icon: <Book />,
    heading: "Self-taught Developer",
    text: "Learned everything I know with the help of books and online resources",
  },
  {
    icon: <Translation />,
    heading: "Advanced English (C1)",
    text: (
      <>
        Approved by official Cambridge certificate (FCE) which you can find{" "}
        <a href={FCECertificate} target="_blank">
          <span className="em un">here</span>
        </a>
      </>
    ),
  },
  {
    icon: <ExperienceIcon className="adjust" />,
    heading: "Real Work Experience",
    text: "Successfully delivered a number of projects at UpWork. Received positive feedback",
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
      "An interactive lightweight app for getting live info about various stocks on global market.",
    techs: ["React", "Node", "Chart.js", "Yahoo Finance API"],
    images: [
      <StocksAppSummary style={{ width: "360px", height: "256px" }} />,
      <StocksAppAnalysis style={{ width: "360px", height: "256px" }} />,
    ],
    showLink: true,
    reflect: false,
  },
  {
    name: "This Website",
    description:
      "I created my personal website from scratch - starting from the UX/UI design, prototyping, and ending up with writing code and uploading it to the host.",
    techs: ["React Hooks", "JavaScript", "Sass/CSS3", "HTML5"],
    images: [
      <PortfolioFeedback style={{ width: "320px", height: "180px" }} />,
      <PortfolioAbout style={{ width: "320px", height: "180px" }} />,
    ],
    showLink: false,
    reflect: true,
  },
];

const experiences = [
  {
    icon: <IoRocketOutline />,
    title: "Moving to React and Node",
    descList: [
      "Learning React.js, Node.js, Express.js, MongoDB, TypeScript",
      "Creating pet projects like this one for practice",
      "Improving my JavaScript skills with LeetCode",
      <>
        Getting "MongoDB University"{" "}
        <a href={MongoDBCertificates} target="_blank">
          <span className="em un">certificates</span>
        </a>
      </>,
    ],
  },
  {
    icon: <IoLaptopOutline />,
    title: "Freelancing at UpWork",
    descList: [
      "Learning React.js and Node.js",
      "Studying UX/UI fundamentals",
      "Creating custom WordPress Plugins",
      "Working at UpWork — successfully completed several projects",
    ],
  },
  {
    icon: <IoLibraryOutline />,
    title: "Learning Javascript and Web Fundamentals",
    descList: [
      "Reading HTML, CSS, JavaScript and PHP docs",
      "Learning WordPress API and Elementor API",
      "Creating custom WordPress Theme for Envato",
      "Creating HTML/CSS layouts and practicing JavaScript",
    ],
  },
  {
    icon: <IoCodeSlashOutline />,
    title: "The Journey Begins",
    descList: [
      "Learning JavaScript and PHP",
      "Learning Web Development in general",
      "Watching countless lectures online",
      'Reading "Computer Networks" (by Tanenbaum)',
    ],
  },
];

const skills = {
  current: [
    { title: "React", exp: "1+ years", icon: <ReactJS />, type: "big" },
    { title: "JavaScript", exp: "4+ years", icon: <JavaScript />, type: "big" },
    { title: "Node", exp: "1+ years", icon: <Node />, type: "big" },
    { title: "TypeScript", exp: "<1 year", icon: <TypeScript />, type: "big" },
    {
      title: "Express",
      exp: "1+ years",
      icon: <Express fill={"#fff"} />,
      type: "big",
    },
    { title: "MongoDB", exp: "1+ years", icon: <MongoDB />, type: "big" },
  ],
  fundamental: [
    { title: "HTML5", exp: "4+ years", icon: <HTML5Logo />, type: "medium" },
    { title: "CSS3", exp: "4+ years", icon: <CSS3Logo />, type: "medium" },
    { title: "Git", exp: "2+ years", icon: <GitLogo />, type: "medium" },
    {
      title: "Webpack",
      exp: "1+ years",
      icon: <WebpackLogo />,
      type: "medium",
    },
  ],
  previous: [
    { title: "WP", exp: "3+ years", icon: <WordPressLogo />, type: "medium" },
    { title: "JQuery", exp: "3+ years", icon: <JQueryLogo />, type: "medium" },
    { title: "PHP", exp: "3+ years", icon: <PHPLogo />, type: "medium" },
    { title: "MySQL", exp: "2+ years", icon: <MySQLLogo />, type: "medium" },
  ],
  other: [
    { title: "Jest", icon: <JestLogo />, type: "small" },
    { title: "Sass", icon: <SassLogo />, type: "small" },
    { title: "Styled c-s", icon: <img src={StyledCsLogo} />, type: "small" },
    { title: "Bootstrap", icon: <BootstrapLogo />, type: "small" },
    { title: "Figma", icon: <FigmaLogo />, type: "small" },
  ],
};

function App() {
  function getAge(dateString) {
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
    <>
      <Header links={menuLinks} logo={<Logo />} id="home" />
      <main>
        <Home {...introContent} />
        <Stack list={stackTechs} stack={stack} />
        <Projects projects={projects} />
        <Skills {...skills} />
        <section className="about" id="about">
          <div className="container">
            <Heading content={"About me"} />
            <div className="desc-container">
              <div className="greeting-intro">
                <p class="greeting">Hello There!</p>
                <p className="intro">
                  My name is <span className="em">Alexander Genin</span>. I’m a{" "}
                  <span className="em">{getAge("1999-11-15")}</span> years old{" "}
                  <span className="em">Full Stack</span> Web Developer from
                  Russia. I am inspired to utilize the power of Web technologies
                  to <span className="em">create valuable apps</span> for people
                  all over the world!
                </p>
              </div>
              <div className="exp-cv">
                <div className="container">
                  <p className="exp-years">2+</p>
                  <p className="exp-text">years of experience</p>
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
        <section className="contacts" id="contacts">
          <div className="container">
            <Heading content="Get in touch" />
            <div className="contacts-container">
              <div className="description">
                <p class="heading">Let's Work Together!</p>
                <p className="text">
                  Always open to new projects and collaborations!
                  <br />
                  Ready to be hired. Don’t hesitate to drop me a line!
                </p>
                <div className="contact-social">
                  <p>Contact me online:</p>
                  <div>
                    <a
                      href="https://github.com/AlexanderGenin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alex-genin/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      href="https://t.me/alexgenin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegramPlane size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/alexgenin99/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="https://vk.com/alex.genin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaVk size={20} />
                    </a>
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
      </main>
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
            <div className="socials">
              <a
                href="https://github.com/AlexanderGenin"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alex-genin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://t.me/alexgenin" target="_blank" rel="noreferrer">
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="https://www.facebook.com/alexgenin99/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://vk.com/alex.genin"
                target="_blank"
                rel="noreferrer"
              >
                <FaVk size={20} />
              </a>
            </div>
            <div className="copyright">
              <p>© 2021, Alexander Genin</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
