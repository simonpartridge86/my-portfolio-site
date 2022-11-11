import { createGlobalStyle } from "styled-components";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import externalLinks from "./data/externalLinks.js";
import { useRef } from "react";
import PixelTransition from "./components/PixelTransition";

console.log(
  "Hi, thanks for inspecting my website. Hopefully the console is error-free 🤞"
);
console.log(
  "Use the links below to find out more about my work or contact me:"
);
console.log(externalLinks.github);
console.log(externalLinks.linkedin);

export default function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <Navigation
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Intro passRef={homeRef} />
      <PixelTransition src="https://i.postimg.cc/TYTVtQPD/section-transition.png" />
      <Projects passRef={projectsRef} />
      <PixelTransition src="https://i.postimg.cc/3x8dMcMg/section-transition.png" />
      <Contact passRef={contactRef} />
      <Footer />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'PixelFont';
    --paragraph-font: 'Lato', sans-serif;
    --dark-color: #201F24;
    --light-color: #FFFFFF;
    --dark-accent: #8E7DBE;
    --light-accent: #5FDD9D;
    font-size: 12px;
    background: var(--light-color);
}

html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

* {
    margin: 0;
}
`;
