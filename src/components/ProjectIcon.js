import styled from "styled-components";

export default function ProjectIcon({ project, onClick, imageLeft }) {
  return (
    <Div onClick={onClick}>
      <Content>
        <Box>
          <Image src={project.images[0].src} alt={`project.images[0].alt`} />
        </Box>
        <Text>{project.title}</Text>
      </Content>
    </Div>
  );
}

const Div = styled.div`
  text-decoration: none;
  color: var(--dark-color);
  cursor: pointer;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  background: var(--dark-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
