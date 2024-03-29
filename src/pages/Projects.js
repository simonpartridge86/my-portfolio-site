import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectIcon from "../components/ProjectIcon";
import projects from "../data/projectsData.js";
import ProjectModal from "../components/ProjectModal.js";

export default function Projects({ passRef }) {
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
    <ProjectSection ref={passRef}>
      <TextContainer>
        <Heading>My Projects</Heading>
        <SubHeading>{"(Click for details and links)"}</SubHeading>
      </TextContainer>
      <ProjectsContainer>
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
      </ProjectsContainer>
      <ProjectModal
        showModal={showModal}
        onClose={handleModal}
        data={projectData}
      />
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  gap: 80px;
  padding: 30px 0;
  font-family: var(--heading-font);
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  background: var(--light-accent);
  @media (max-width: 768px) {
    padding-top: 75px;
    gap: 50px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: var(--dark-color);
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubHeading = styled.p`
  font-family: var(--paragraph-font);
  font-size: 2rem;
  color: var(--dark-color);
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
