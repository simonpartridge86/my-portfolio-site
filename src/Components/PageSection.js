import React from "react";
import styled, { css } from "styled-components";

export default function PageSection({ className, children }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  ${({ className }) =>
    className === "intro-section"
      ? css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: var(--dark-accent);
          min-width: 100vw;
          height: 100vh;
          gap: 50px;
        `
      : className === "portfolio-section"
      ? css`
          display: flex;
          flex-direction: column;
          max-width: 100vw;
        `
      : className === "skills-section"
      ? css`
          height: 100vh;
          background-color: var(--light-accent);
          display: flex;
          flex-direction: column;
        `
      : css``}
`;
