import styled from "styled-components";
import ContentBox from "./ContentBox";
import LinkButton from "./LinkButton";

export default function ProjectCard({ project }) {
  return (
    <ContentBox
      width="80vw"
      height="50vh"
      bgFront="var(--light-color)"
      bgBack="var(--light-accent)"
    >
      <ImageContainer>
        {project.images.map((image) => {
          return <Image key={project.id} src={image.src} alt={image.alt} />;
        })}
      </ImageContainer>
      <Section>
        <Heading>{project.title}</Heading>
        <Text>{project.description}</Text>
        <Text>{"Tech Stack: " + project.tech}</Text>
        <LinkContainer>
          {project.buttons.map((button) => {
            return (
              <LinkButton
                key={project.id}
                external={true}
                path={button.link}
                text={button.text}
              />
            );
          })}
        </LinkContainer>
      </Section>
    </ContentBox>
  );
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 45%;
  gap: 20px;
  padding: 0px 30px;
`;

const Image = styled.img`
  max-height: 80%;
  max-width: 100%;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: 55%;
  gap: 20px;
  padding: 0px 30px;
`;

const Heading = styled.h2`
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--dark-accent);
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  color: var(--dark-color);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
