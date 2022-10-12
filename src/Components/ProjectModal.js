import { useRef } from "react";
import ContentBox from "./ContentBox";
import styled from "styled-components";
import projects from "../data/projectsData.js";
import LinkButton from "./LinkButton";

export default function ProjectModal({ showModal, onClose }) {
  const modalRef = useRef();

  function closeModal(e) {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  if (!showModal) {
    return null;
  }

  return (
    <Background ref={modalRef} onClick={closeModal}>
      <ContentBox bgFront="var(--light-color)" bgBack="var(--light-accent)">
        <CloseButton onClick={onClose}>╳</CloseButton>
        <MainContainer>
          <ImageContainer>
            <Image
              src={projects[0].images[0].src}
              alt={`project.images[0].alt`}
            />
          </ImageContainer>
          <TextContainer>
            <Heading>Test</Heading>
            <Text>Test</Text>
            <Text>Test</Text>
            <LinkContainer>
              <LinkButton text="Github" />
            </LinkContainer>
          </TextContainer>
        </MainContainer>
      </ContentBox>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 50px;
  width: 50px;
  background: var(--dark-accent);
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  font-family: var(--heading-font);
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  vertical-align: middle;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 60%;
  padding-left: 10%;
  gap: 10px;
`;

const Heading = styled.h3`
  font-family: var(--heading-font);
  font-size: 2.5rem;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
