import React, { useState } from "react";
import { ReactComponent as Logo } from "./images/personal/alex-genin-logo.svg";

import Loader from "./components/loader";
import Header from "./components/header";
import Home from "./components/home";
import Stack from "./components/stack";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Experience from "./components/experience";
import Review from "./components/review";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

import {
  about,
  contacts,
  experiences,
  footer,
  introContent,
  menuLinks,
  projects,
  review,
  skills,
  stack,
  stackTechs,
} from "./data";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? <Loader /> : null}
      <Header links={menuLinks} logo={<Logo />} />
      <main>
        <Home {...introContent} />
        <Stack list={stackTechs} stack={stack} />
        <Projects projects={projects} />
        <Skills {...skills} />
        <About {...about} />
        <Experience experiences={experiences} />
        <Review {...review} />
        <Contacts {...contacts} />
      </main>
      <Footer {...footer} />
    </>
  );
}

export default App;
