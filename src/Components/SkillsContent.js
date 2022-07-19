import React from "react";
import styled from "styled-components";

export default function SkillsContent() {
  return (
    <>
      <StyledH1>My Skillset</StyledH1>
      <StyledImage
        className="tech-image"
        src="https://i.postimg.cc/xCVhMfBC/soc-technologies.png"
        alt="my tech"
      />
    </>
  );
}

const StyledH1 = styled.h1`
  color: var(--dark-accent);
  margin: 0vh 5vh;
`;

const StyledImage = styled.img`
  height: auto;
  width: auto;
  margin: 5vh 10vh;
`;
