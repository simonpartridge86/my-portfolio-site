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
      <ContentBox bgFront="var(--light-color)" bgBack="var(--light-accent)">
        <CloseButton onClick={onClose}>{<IoCloseSharp />}</CloseButton>
        <MainContainer>
          <ImageContainer>
            <Image src={data.images[0].src} alt={data.images[0].alt} />
          </ImageContainer>
          <TextContainer>
            <Heading>{data.title}</Heading>
            <Text>{data.description}</Text>
            <Text>{data.tech}</Text>
            <LinkContainer>
              <LinkButton text={data.buttons[0].text} />
              {data.buttons[1] && <LinkButton text={data.buttons[1].text} />}
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
  height: 40px;
  width: 40px;
  background: var(--dark-accent);
  box-sizing: border-box;
  border: 4px solid var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
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
