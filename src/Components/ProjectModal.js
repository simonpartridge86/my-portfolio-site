import { useRef } from "react";
import ContentBox from "./ContentBox";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import { IoCloseSharp } from "react-icons/io5";

export default function ProjectModal({ showModal, onClose, data }) {
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
      <ContentBox
        bgFront="var(--light-color)"
        bgBack="var(--dark-accent)"
        height="80vh"
        width="80vw"
      >
        <CloseButton onClick={onClose}>{<IoCloseSharp />}</CloseButton>
        <Container>
          <Heading>{data.title}</Heading>
          <Image src={data.images[0].src} alt={data.images[0].alt} />
          <TextContainer>
            <ProjectText>{data.description}</ProjectText>
            <TechText>Tech used:&nbsp;{data.tech}</TechText>
          </TextContainer>
          <LinkContainer>
            <LinkButton text={data.buttons[0].text} />
            {data.buttons[1] && <LinkButton text={data.buttons[1].text} />}
          </LinkContainer>
        </Container>
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
  height: 40px;
  width: 40px;
  background: var(--dark-accent);
  box-sizing: border-box;
  border: 5px solid var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90%;
  width: 90%;
`;

const Heading = styled.h3`
  font-family: var(--heading-font);
  font-size: 4rem;
  color: var(--dark-accent);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Image = styled.img`
  height: auto;
  width: auto;
  max-height: 50%;
  object-fit: cover;
  object-position: top center;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ProjectText = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TechText = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;
