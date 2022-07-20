import NavBar from "./NavBar";
import PageSection from "./SectionContainer";
import IntroContent from "./IntroContent";
import PortfolioContent from "./PortfolioContent";
import SkillsContent from "./SkillsContent";
import AboutContent from "./AboutContent";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <PageSection className="intro-section">
        <IntroContent />
      </PageSection>
      <PageSection className="portfolio-section">
        <PortfolioContent />
      </PageSection>
      <PageSection className="skills-section">
        <SkillsContent />
      </PageSection>
      <PageSection className="about-section">
        <AboutContent />
      </PageSection>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'EB Garamond', serif ;
    --paragraph-font: 'Roboto Mono', monospace;
    --light-accent: #5FDD9D;
    --dark-accent: #8E7DBE;
    --light-color: #F7F0F0;
    --dark-color: #32373B;
    font-size: 24px;
    background: var(--light-color);
    
}
html,body {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
}

* {
    margin: 0px;
}
`;
