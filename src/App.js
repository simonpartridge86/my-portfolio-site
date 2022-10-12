import { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

console.log(
  "Hi, thanks for inspecting my website. Hopefully the console is error-free 🤞"
);
console.log(
  "Use the links below to find out more about my work or contact me:"
);
console.log("https://github.com/simonpartridge86");
console.log("https://www.linkedin.com/in/simonpartridge86/");

export default function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Intro />
      <Projects />
      <Contact />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'PixelFont';
    --paragraph-font: 'DM Sans', sans-serif;
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
