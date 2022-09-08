import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import IntroContent from "../Components/IntroSection";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <IntroContent />
      <Footer />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'DM Sans', sans-serif ;
    --paragraph-font: 'DM Sans', sans-serif;
    --dark-color: #201F24;
    --light-color: #FFFFFF;
    --dark-accent: #8E7DBE;
    --light-accent: #5FDD9D;
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
