import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData.js";

export default function Projects() {
  return (
    <StyledSection>
      <ProjectCard project={projects[0]} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;
  z-index: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--dark-accent);
`;
