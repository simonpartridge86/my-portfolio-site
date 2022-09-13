import styled from "styled-components";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  return (
    <StyledMain>
      <ProjectCard />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: var(--light-color);
  z-index: 0;
  box-sizing: border-box;
  border-left: 6px solid var(--dark-color);
  border-right: 6px solid var(--dark-color);
  padding: 15vh 0 20vh 0;
`;
