import React from "react";
import styled from "styled-components";

export default function SkillsContent() {
  return (
    <>
      <StyledH1>My Skillset</StyledH1>
    </>
  );
}

const StyledH1 = styled.h1`
  color: var(--dark-accent);
  margin: 0vh 5vh;
  font-family: var(--heading-font);
`;
