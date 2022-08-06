import { useEffect, useState } from "react";
import Logo from "./images/personal/alex-genin-logo.svg";
import type { FC } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import {
  about,
  contacts,
  experiences,
  footer,
  introContent,
  menuLinks,
  projects,
  reviews,
  skills,
  stack,
  stackTechs,
} from "./data";

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      <Header links={menuLinks} logo={<Logo />} />
      <main>
        <Home {...introContent} />
        <Stack list={stackTechs} stack={stack} />
        <Projects projects={projects} />
        <Skills {...skills} />
        <About {...about} />
        <Experience experiences={experiences} />
        <Reviews reviews={reviews} />
        <Contacts {...contacts} />
      </main>
      <Footer {...footer} />
    </>
  );
};

export default App;
