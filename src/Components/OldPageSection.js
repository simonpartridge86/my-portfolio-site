import React from "react";
import styled, { css } from "styled-components";

export default function PageSection({ className, children }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  display: flex;
  height: 100vh;

  ${({ className }) =>
    className === "intro-section"
      ? css`
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: var(--dark-accent);
          gap: 50px;
        `
      : className === "portfolio-section"
      ? css`
          flex-direction: column;
          justify-content: center;
        `
      : className === "skills-section"
      ? css`
          flex-direction: column;
          justify-content: center;
          background-color: var(--light-accent);
        `
      : className === "about-section"
      ? css`
          flex-direction: column;
          justify-content: center;
        `
      : css``}
`;
