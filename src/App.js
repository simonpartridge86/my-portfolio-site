import NavBar from "./Components/NavBar";
import PageSection from "./Components/PageSection";
import IntroContent from "./Components/IntroContent";
import PortfolioContent from "./Components/PortfolioContent";
import SkillsContent from "./Components/SkillsContent";
import AboutContent from "./Components/AboutContent";
import Footer from "./Components/Footer";
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
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Roboto+Mono:wght@400;500;600;700&display=swap');

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

* {
    margin: 0;
}
`;
