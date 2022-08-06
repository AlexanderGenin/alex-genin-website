import React from "react";
import Logo from "./images/personal/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/personal/alex-genin-w-circle.png";
import {
  IoRocketOutline,
  IoLaptopOutline,
  IoLibraryOutline,
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
import TestLibLogo from "./images/icons/testing-lib.png";
import MongoDB from "./images/icons/mongodb.svg";
import Express from "./images/icons/express.svg";
import ReactJS from "./images/icons/react.svg";
import Node from "./images/icons/node.svg";
import JavaScript from "./images/icons/javascript.svg";
import TypeScript from "./images/icons/typescript.svg";
import Redux from "./images/icons/redux.svg";
import HTML5Logo from "./images/icons/html.svg";
import CSS3Logo from "./images/icons/css.svg";
import GitLogo from "./images/icons/git.svg";
import WebpackLogo from "./images/icons/webpack.svg";
import MUILogo from "./images/icons/mui.svg";
import StorybookLogo from "./images/icons/storybook.svg";
import NxLogo from "./images/icons/nx.svg";
import JiraLogo from "./images/icons/jira.svg";
import ConfluenceLogo from "./images/icons/confluence.svg";
import SassLogo from "./images/icons/sass.svg";
import JestLogo from "./images/icons/jest.svg";
import BootstrapLogo from "./images/icons/bootstrap.svg";
import FigmaLogo from "./images/icons/figma.svg";
import GraduationHat from "./images/icons/graduation-hat.svg";
import Book from "./images/icons/book.svg";
import Translation from "./images/icons/translation.svg";
import ExperienceIcon from "./images/icons/experience.svg";
import Chat from "./images/icons/chat.svg";
import Sports from "./images/icons/sports.svg";
import ReviewAvatar1 from "./images/icons/review-avatar1.png";
import ReviewAvatar2 from "./images/icons/review-avatar2.png";
import ReviewAvatar3 from "./images/icons/review-avatar3.png";
import ReviewAvatar4 from "./images/icons/review-avatar4.png";
import FCECertificate from "./static/Alexander-Genin-FCE-certificate.pdf";

import type {
  TExperience,
  TFact,
  IntroContent,
  MenuLink,
  TProject,
  SkillsSet,
  TSocial,
  StackTech,
  TReview,
  TContacts,
} from "./types/types";

const name = "Alexander Genin";

export const menuLinks: MenuLink[] = [
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

const socials: TSocial[] = [
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

export const introContent: IntroContent = {
  photoUrl: AlexGeninPhoto,
  name: "Alex",
  surname: "Genin",
  subtitle: "Full Stack Web Developer",
  buttonsLinks: [menuLinks[1], menuLinks[3]],
  socials,
};

export const stackTechs: StackTech[] = [
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
    description: "Frontend",
    icon: <ReactJS />,
  },
  {
    name: "Node",
    description: "Backend",
    icon: <Node />,
  },
];

export const stack = "MERN";

const facts: TFact[] = [
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
    icon: <Book />,
    title: "Self-taught Developer",
    text: "Learned everything I know with the help of books and online resources",
  },
  {
    icon: <GraduationHat />,
    title: "Moscow State University",
    text: "I’m studying at the top 1 University of Russia and get only the highest grades",
  },

  {
    icon: <ExperienceIcon className="adjust" />,
    title: "Real Work Experience",
    text: "I've taken part in the development of small startups and large high-load projects",
  },
  {
    icon: <Chat />,
    title: "Soft Skills",
    text: "Regularly receive positive feedback from colleagues and clients :)",
  },
  {
    icon: <Sports />,
    title: "My Hobbies",
    text: "I am keen on traveling and also love playing all kinds of team sports games!",
  },
];

export const projects: TProject[] = [
  {
    name: "Stocks Live App",
    description:
      "An interactive lightweight app for getting live info about various stocks on global market.",
    techs: [
      { text: "React, Chart.js" },
      { text: "TypeScript" },
      { text: "Yahoo Finance API" },
      { text: "Node.js" },
      { text: "MongoDB" },
    ],
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
    techs: [
      { text: "React Hooks" },
      { text: "TypeScript" },
      { text: "Webpack" },
      { text: "Sass" },
    ],
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

export const experiences: TExperience[] = [
  {
    years: "2022",
    icon: <IoLaptopOutline />,
    title: "Middle Software Engineer",
    company: "EPAM Systems",
    descList: [
      {
        text: "Early developer at a high-load product-oriented B2B project (a monorepo with 150 contributors) of a large Belgium company",
      },
      { text: "Provided high unit test coverage (> 80%)" },
      { text: "Implemented critical functionality for viewing invoices table" },
      {
        text: "Was assessed as close-to-senior developer by project manager based on my performance",
      },
      {
        text: "Provided feature demo for the team of 50 frontend engineers from other teams",
      },
      {
        text: "Implemented reusable Storybook components for the design system",
      },
      {
        text: "Worked in a multicultural team of 20 and received positive feedback from teammates",
      },
      {
        text: "Took the initiative to migrate dependency library to 3 times more lightweight alternative",
      },
      {
        text: "Contributed to multi-language support as well as customization of the project for three regions: North America, Europe and Asia",
      },
    ],
  },
  {
    years: "2021",
    icon: <IoRocketOutline />,
    title: "Full Stack Web Developer",
    company: "Upwork",
    descList: [
      {
        text: "Designed the architecture and shipped several projects based on clients’ requests",
        subList: [
          "Communicated and discussed product requirements directly with clients",
          "Received 5-star reviews with positive feedback",
        ],
      },

      {
        text: "Created stocks market app with charts and live data streaming",
        subList: [
          "Complex UI with menus, tables and charts using React, Chart.js and Styled Components",
          "Data search functionality for various stocks achieved with Yahoo Finance API, Node.js and MongoDB",
        ],
      },
      {
        text: "Implemented restaurant reservation system",
        subList: [
          "Design of system structure and business logic with JavaScript",
          "Public UI with HTML, CSS, Sass, Bootstrap",
          "Shipping the system increased daily number of reservations by 20%",
        ],
      },
      {
        text: "Created QR-code based waiter calling system",
        subList: [
          "Implemented unique UI/UX design",
          "Added custom audio notifications",
        ],
      },
    ],
  },
  {
    years: "2020",
    icon: <IoLibraryOutline />,
    title: "Full Stack Web Developer",
    company: "ThemeForest by Envato",
    descList: [
      {
        text: "Developed portable UI/UX themes with multi-language support from scratch",
      },
      {
        text: "Designed and implemented the projects (both frontend and backend) and connected them to database",
      },
      { text: "Implemented complex CSS and JavaScript animations" },
      {
        text: "Drastically improved the website initialization time for customers",
      },
    ],
  },
];

export const skills: SkillsSet = {
  current: [
    { title: "React", exp: "3+ years", icon: <ReactJS />, type: "big" },
    { title: "JavaScript", exp: "5+ years", icon: <JavaScript />, type: "big" },
    { title: "Node", exp: "2+ years", icon: <Node />, type: "big" },
    { title: "Redux", exp: "3+ years", icon: <Redux />, type: "big" },
    { title: "TypeScript", exp: "3+ years", icon: <TypeScript />, type: "big" },
    { title: "MongoDB", exp: "2+ years", icon: <MongoDB />, type: "big" },
  ],
  fundamental: [
    { title: "HTML5", exp: "5+ years", icon: <HTML5Logo />, type: "medium" },
    { title: "CSS3", exp: "5+ years", icon: <CSS3Logo />, type: "medium" },
    { title: "Git", exp: "3+ years", icon: <GitLogo />, type: "medium" },
    {
      title: "Webpack",
      exp: "2+ years",
      icon: <WebpackLogo />,
      type: "medium",
    },
  ],
  supplementary: [
    { title: "Jest", exp: "2+ years", icon: <JestLogo />, type: "medium" },
    {
      title: "RTL",
      exp: "2+ years",
      icon: <img src={TestLibLogo} alt="Testing library logo" />,
      type: "medium",
    },
    { title: "Nx", exp: "1+ years", icon: <NxLogo />, type: "medium" },
    {
      title: "Storybook",
      exp: "1+ years",
      icon: <StorybookLogo />,
      type: "medium",
    },
  ],
  other: [
    { title: "Express", icon: <Express fill={"#fff"} />, type: "small" },
    { title: "MUI", icon: <MUILogo />, type: "small" },
    {
      title: "Styled c-s",
      icon: <img src={StyledCsLogo} alt="Styled components logo" />,
      type: "small",
    },
    { title: "Sass", icon: <SassLogo />, type: "small" },
    { title: "Bootstrap", icon: <BootstrapLogo />, type: "small" },
    { title: "Figma", icon: <FigmaLogo />, type: "small" },
    { title: "Jira", icon: <JiraLogo />, type: "small" },
    { title: "Confluence", icon: <ConfluenceLogo />, type: "small" },
  ],
};

export const about = {
  heading: "Hello There!",
  name,
  job: "Frontend",
  text: "I am inspired to utilize the power of Web technologies to create valuable apps for people all over the world!",
  years: "3+",
  facts,
};

export const reviews: TReview[] = [
  {
    avatar: <img src={ReviewAvatar1} alt={"Review avatar 1"} />,
    text: "Alexander works on the high speed and great quality of the code, he is brilliant communicator, engaged to the project a lot, and helping the team to achieve common results.",
    author: "Julia Varonina from EPAM",
  },
  {
    avatar: <img src={ReviewAvatar3} alt={"Review avatar 3"} />,
    text: "Once you have Alexander in your team, you'll wish to have more Alexanders in the team. He's a very friendly, team player and a responsible engineer. He really stands out with his sense of responsibility. He also works on his self-development and you can notice it.",
    author: "Temuri Mikava from EPAM",
  },
  {
    avatar: <img src={ReviewAvatar2} alt={"Review avatar 2"} />,
    text: "Alexander did an excellent job creating my WordPress custom plugin. He was very communicative during the whole development and very open to suggestions. Alexander followed instructions very well and is very attentive to details. I will definitely hire Alex again next time I have a PHP project.",
    author: "Esteban Rodriguez from GrubBytes",
  },
  {
    avatar: <img src={ReviewAvatar4} alt={"Review avatar 4"} />,
    text: "As for me Alex is a well-qualified developer who is fully inline with EPAM company values. I hope he will proceed with professional growth and current project allows that for him.",
    author: "Vladislav Shmelev from EPAM",
  },
];

export const contacts: TContacts = {
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
