import React from "react";
import MainPage from "../components/MainPage/MainPage";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
function Home() {
  return (
    <>
      <MainPage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default Home;
