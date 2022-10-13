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
    <Section ref={passRef}>
      <Heading>My Projects</Heading>
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
    </Section>
  );
}

const Section = styled.section`
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: var(--light-color);
  width: 100%;
  text-align: center;
`;
