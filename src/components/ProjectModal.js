import { useRef } from "react";
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
      <ContentBox>
        <CloseButton onClick={onClose}>{<IoCloseSharp />}</CloseButton>
        <Container>
          <Heading>{data.title}</Heading>
          <Image src={data.images[0].src} alt={data.images[0].alt} />
          <TextContainer>
            <ProjectText>{data.description}</ProjectText>
            <TechText>Tech used: {data.tech}</TechText>
          </TextContainer>
          <LinkContainer>
            <LinkButton
              text={data.buttons[0].text}
              external={true}
              path={data.buttons[0].link}
            />
            {data.buttons[1] && (
              <LinkButton
                text={data.buttons[1].text}
                external={true}
                path={data.buttons[1].link}
              />
            )}
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media all and (max-width: 768px) {
    gap: 20px;
  }
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

const ContentBox = styled.section`
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  height: 80vh;
  width: 50vw;
  background-color: var(--light-color);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
    width: 85vw;
    max-height: 93vh;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  &:after {
    background-image: linear-gradient(
      45deg,
      var(--dark-color) 14.29%,
      var(--dark-accent) 14.29%,
      var(--dark-accent) 50%,
      var(--dark-color) 50%,
      var(--dark-color) 64.29%,
      var(--dark-accent) 64.29%,
      var(--dark-accent) 100%
    );
    background-size: 9.9px 9.9px;
    content: "";
    position: absolute;
    display: block;
    border: inherit;
    left: 10px;
    top: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

/*
Note: striped background css generated using https://stripesgenerator.com/
*/
