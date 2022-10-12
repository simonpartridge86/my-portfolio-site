import styled from "styled-components";

export default function ProjectIcon({ project, onClick }) {
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
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

const Box = styled.div`
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  background: var(--dark-accent);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
`;
