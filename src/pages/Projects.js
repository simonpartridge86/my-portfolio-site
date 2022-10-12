import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectIcon from "../components/ProjectIcon";
import projects from "../data/projectsData.js";
import ProjectModal from "../components/ProjectModal.js";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState(null);

  function handleModal() {
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
      <Heading>My Projects</Heading>
      <StyledDiv>
        {projects.map((project, index) => {
          return (
            <ProjectIcon
              project={project}
              key={index}
              onClick={() => {
                setProjectData(project);
                handleModal();
              }}
            ></ProjectIcon>
          );
        })}
      </StyledDiv>
      <ProjectModal
        showModal={showModal}
        onClose={handleModal}
        data={projectData}
      />
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
  gap: 100px;
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

const Heading = styled.h2`
  font-size: 5rem;
  color: var(--dark-color);
  width: 100%;
  text-align: left;
  text-indent: 100px;
`;
