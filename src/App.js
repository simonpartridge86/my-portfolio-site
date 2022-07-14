import './App.css';
import { IntroSection } from './Components/IntroSection';
import { NavBar } from "./Components/NavBar";
import { PortfolioSection } from './Components/PortfolioSection';

function App() {
  return (
    <>
      <NavBar/>
      <IntroSection />
      <PortfolioSection />
      <div className="skills-section">
        <h1>My Skillset</h1>
        <img className="tech-image" src="https://i.postimg.cc/xCVhMfBC/soc-technologies.png" alt="my tech" />
      </div>
      <img
          className="pixel-bar-top"
          src="https://i.postimg.cc/CLY9rxPp/Screenshot-2022-07-14-at-23-38-50.png"
          alt="pixel bar green"
      />
    </>
  );
}

export default App;
