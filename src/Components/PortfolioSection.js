import "./PortfolioSection.css";
import { ProjectCard } from "./ProjectCard";

export function PortfolioSection() {
  return (
    <div className="portfolio-section">
      <img
        className="pixel-bar-top"
        src="https://i.postimg.cc/Kctd5M55/Screenshot-2022-07-14-at-23-38-30.png"
        alt="pixel bar purple"
      />
      <div className="portfolio-heading">
        <h1>Project Portfolio</h1>
      </div>
      <div className="card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <img
        className="pixel-bar-bottom"
        src="https://i.postimg.cc/CLY9rxPp/Screenshot-2022-07-14-at-23-38-50.png"
        alt="pixel bar green"
      />
    </div>
  );
}
