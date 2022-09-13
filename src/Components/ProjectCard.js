import styled from "styled-components";
import ContentBox from "../Components/ContentBox";
import LinkButton from "../Components/LinkButton";

export default function ProjectCard({ project }) {
  return (
    <ContentBox
      width="80vw"
      height="50vh"
      bgFront="var(--light-color)"
      bgBack="var(--light-accent)"
    >
      <StyledDiv>
        {project.images.map((image) => {
          return (
            <StyledImage key={project.id} src={image.src} alt={image.alt} />
          );
        })}
      </StyledDiv>
      <StyledSection>
        <StyledHeading>{project.title}</StyledHeading>
        <StyledText>{project.description}</StyledText>
        <StyledText>{"Tech Stack: " + project.tech}</StyledText>
        <StyledLinks>
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
        </StyledLinks>
      </StyledSection>
    </ContentBox>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 45%;
  gap: 20px;
  padding: 0px 30px;
`;

const StyledImage = styled.img`
  max-height: 80%;
  max-width: 100%;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: 55%;
  gap: 20px;
  padding: 0px 30px;
`;

const StyledHeading = styled.h2`
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--dark-accent);
`;

const StyledText = styled.p`
  font-family: var(--paragraph-font);
  color: var(--dark-color);
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
