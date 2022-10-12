import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectIcon from "./ProjectIcon.js";
import projects from "../data/projectsData.js";
import ProjectModal from "./ProjectModal.js";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal((prev) => !prev);
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <StyledSection>
      <h1>Projects</h1>
      <StyledDiv>
        {projects.map((project) => {
          return <ProjectIcon project={project}></ProjectIcon>;
        })}
      </StyledDiv>
      <ProjectModal showModal={showModal} onClose={openModal} />
      <button onClick={openModal}>Show Modal</button>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: 50px;
  font-family: var(--heading-font);
  background: var(--dark-accent);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
