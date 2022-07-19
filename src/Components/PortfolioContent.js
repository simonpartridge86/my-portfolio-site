import styled from "styled-components";
import ProjectCard from "./ProjectCard";

export default function PortfolioContent() {
  return (
    <>
      <div className="portfolio-heading">
        <StyledH1>Project Portfolio</StyledH1>
      </div>
      <StyledDiv className="card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </StyledDiv>
    </>
  );
}

const StyledH1 = styled.h1`
  margin: 2vh 5vh;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 5vh;
  margin: 2vh 5vh;
`;
