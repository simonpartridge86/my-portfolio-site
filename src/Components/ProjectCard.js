import styled from "styled-components";

export default function ProjectCard() {
  return (
    <StyledDiv>
      <StyledImage
        src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
        alt="pixel avatar"
      />
      <StyledH2>Project Title</StyledH2>
      <StyledParagraph>
        Some info about the project will go here. Some info about the project
        will go here. Some info about the project will go here.
      </StyledParagraph>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: 2px solid var(--light-accent);
  border-radius: 10px;
  box-shadow: 5px 5px 10px -4px var(--dark-accent);
`;

const StyledImage = styled.img`
  display: block;
  width: 230px;
  height: 95px;
  width: auto;
  height: auto;
`;

const StyledH2 = styled.h2`
  color: var(--dark-accent);
`;

const StyledParagraph = styled.p`
  color: var(--dark-color);
`;
