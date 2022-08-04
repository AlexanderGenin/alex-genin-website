import React from "react";
import { ReactComponent as Logo } from "./images/personal/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/personal/alex-genin-w-circle.png";
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

import StocksAppSummary from "./images/projects/stocks-app-summary.png";
import StocksAppAnalysis from "./images/projects/stocks-app-analysis.png";
import PortfolioAbout from "./images/projects/portfolio-about.png";
import PortfolioContact from "./images/projects/portfolio-contact.png";

import StyledCsLogo from "./images/icons/styled-cs.png";
import { ReactComponent as MongoDB } from "./images/icons/mongodb.svg";
import { ReactComponent as Express } from "./images/icons/express.svg";
import { ReactComponent as ReactJS } from "./images/icons/react.svg";
import { ReactComponent as Node } from "./images/icons/node.svg";
import { ReactComponent as JavaScript } from "./images/icons/javascript.svg";
import { ReactComponent as TypeScript } from "./images/icons/typescript.svg";
import { ReactComponent as HTML5Logo } from "./images/icons/html.svg";
import { ReactComponent as CSS3Logo } from "./images/icons/css.svg";
import { ReactComponent as GitLogo } from "./images/icons/git.svg";
import { ReactComponent as WebpackLogo } from "./images/icons/webpack.svg";
import { ReactComponent as WordPressLogo } from "./images/icons/wordpress.svg";
import { ReactComponent as JQueryLogo } from "./images/icons/jquery.svg";
import { ReactComponent as PHPLogo } from "./images/icons/php.svg";
import { ReactComponent as MySQLLogo } from "./images/icons/mysql.svg";
import { ReactComponent as SassLogo } from "./images/icons/sass.svg";
import { ReactComponent as JestLogo } from "./images/icons/jest.svg";
import { ReactComponent as BootstrapLogo } from "./images/icons/bootstrap.svg";
import { ReactComponent as FigmaLogo } from "./images/icons/figma.svg";
import { ReactComponent as GraduationHat } from "./images/icons/graduation-hat.svg";
import { ReactComponent as Book } from "./images/icons/book.svg";
import { ReactComponent as Translation } from "./images/icons/translation.svg";
import { ReactComponent as ExperienceIcon } from "./images/icons/experience.svg";
import { ReactComponent as Chat } from "./images/icons/chat.svg";
import { ReactComponent as Sports } from "./images/icons/sports.svg";
import { ReactComponent as ReviewAvatar } from "./images/icons/review-avatar.svg";

import FCECertificate from "./static/Alexander-Genin-FCE-certificate.pdf";
import MongoDBCertificates from "./static/Alexander-Genin-MongoDB-certificates.pdf";

const name = "Alexander Genin";

export const menuLinks = [
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

export const introContent = {
  photoUrl: AlexGeninPhoto,
  name: "Alex",
  surname: "Genin",
  subtitle: "Full Stack Web Developer",
  buttonsLinks: [menuLinks[1], menuLinks[3]],
  socials,
};

export const stackTechs = [
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

export const stack = "MERN";

const facts = [
  {
    icon: <GraduationHat />,
    title: "Moscow State University",
    text: "I’m studying at the top 1 University of Russia and get only the highest grades",
  },
  {
    icon: <Book />,
    title: "Self-taught Developer",
    text: "Learned everything I know with the help of books and online resources",
  },
  {
    icon: <Translation />,
    title: "Advanced English (C1)",
    text: (
      <>
        Approved by official Cambridge certificate (FCE) which you can find{" "}
        <a href={FCECertificate} target="_blank" rel="noreferrer">
          <span className="em un">here</span>
        </a>
      </>
    ),
  },
  {
    icon: <ExperienceIcon className="adjust" />,
    title: "Real Work Experience",
    text: "Successfully delivered a number of projects at UpWork. Received positive feedback",
  },
  {
    icon: <Chat />,
    title: "Soft Skills",
    text: "I value a lot my reputation of a friendly and trustworthy person :)",
  },
  {
    icon: <Sports />,
    title: "My Hobbies",
    text: "I am keen on travelling and also love playing all kinds of team sports games!",
  },
];

export const projects = [
  {
    name: "Stocks Live App",
    description:
      "An interactive lightweight app for getting live info about various stocks on global market.",
    techs: ["React", "Node", "Chart.js", "Yahoo Finance API"],
    images: [
      {
        url: StocksAppSummary,
        alt: "Stocks App Summary",
      },
      {
        url: StocksAppAnalysis,
        alt: "Stocks App Analysis",
      },
    ],
    href: "https://stocksy-app.herokuapp.com/",
    showLink: true,
    reflect: false,
  },
  {
    name: "This Website",
    description:
      "I created my personal website from scratch - starting from the UX/UI design, prototyping, and ending up with writing code and uploading it to the host.",
    techs: ["React Hooks", "JavaScript", "Sass", "HTML5"],
    images: [
      {
        url: PortfolioContact,
        alt: "Portfolio Contact",
      },
      {
        url: PortfolioAbout,
        alt: "Portfolio About",
      },
    ],
    showLink: false,
    reflect: true,
  },
];

export const experiences = [
  {
    years: "2020 - 2021",
    icon: <IoRocketOutline />,
    title: "Moving to React and Node",
    descList: [
      "Learning React.js, Node.js, Express.js, MongoDB, TypeScript",
      <>
        Creating pet projects like{" "}
        <a
          href="https://stocksy-app.herokuapp.com/ "
          target="_blank"
          rel="noreferrer"
        >
          <span className="em un">this one</span>
        </a>{" "}
        for practice
      </>,
      "Improving my JavaScript skills with LeetCode",
      <>
        Getting "MongoDB University"{" "}
        <a href={MongoDBCertificates} target="_blank" rel="noreferrer">
          <span className="em un">certificates</span>
        </a>
      </>,
    ],
  },
  {
    years: "2020",
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
    years: "2019",
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
    years: "2018",
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

export const skills = {
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
    { title: "WP", exp: "2 years", icon: <WordPressLogo />, type: "medium" },
    { title: "JQuery", exp: "2 years", icon: <JQueryLogo />, type: "medium" },
    { title: "PHP", exp: "2 years", icon: <PHPLogo />, type: "medium" },
    { title: "MySQL", exp: "1 year", icon: <MySQLLogo />, type: "medium" },
  ],
  other: [
    { title: "Jest", icon: <JestLogo />, type: "small" },
    { title: "Sass", icon: <SassLogo />, type: "small" },
    {
      title: "Styled c-s",
      icon: <img src={StyledCsLogo} alt="Styled-components logo" />,
      type: "small",
    },
    { title: "Bootstrap", icon: <BootstrapLogo />, type: "small" },
    { title: "Figma", icon: <FigmaLogo />, type: "small" },
  ],
};

export const about = {
  heading: "Hello There!",
  name,
  birthDate: "1999-11-15",
  job: "Full Stack",
  text: "I am inspired to utilize the power of Web technologies to create valuable apps for people all over the world!",
  years: "2+",
  facts,
};

export const review = {
  avatar: <ReviewAvatar />,
  text: "Alexander did an excellent job creating my WordPress custom plugin. He was very communicative during the whole development and very open to suggestions. Alexander followed instructions very well and is very attentive to details. I will definitely hire Alex again next time I have a PHP project.",
  author: "Esteban Rodriguez from GrubBytes",
};

export const contacts = {
  heading: "Let's Work Together!",
  text: (
    <>
      Always open to new projects and collaborations!
      <br />
      Ready to be hired. Don’t hesitate to drop me a line!
    </>
  ),
  socials,
};

export const footer = {
  links: menuLinks,
  logo: <Logo />,
  socials,
  name,
};
