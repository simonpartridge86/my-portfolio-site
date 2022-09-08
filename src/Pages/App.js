import NavBar from "../Components/OldNavBar";
import PageSection from "../Components/OldPageSection";
import IntroContent from "../Components/OldIntroContent";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <PageSection className="intro-section">
        <IntroContent />
      </PageSection>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'DM Sans', sans-serif ;
    --paragraph-font: 'DM Sans', sans-serif;
    --light-accent: #5FDD9D;
    --dark-accent: #8E7DBE;
    --light-color: #FFFFFF;
    --dark-color: #32373B;
    font-size: 24px;
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
