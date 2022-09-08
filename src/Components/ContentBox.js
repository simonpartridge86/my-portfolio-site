import styled, { css } from "styled-components";

export default function ContentBox({
  height,
  width,
  bgFront,
  bgBack,
  children,
}) {
  return (
    <StyledSection
      height={height}
      width={width}
      bgFront={bgFront}
      bgBack={bgBack}
    >
      {children}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  height: ${({ height }) => (height ? height : "50vh")};
  width: ${({ width }) => (width ? width : "40vw")};
  background-color: ${({ bgFront }) =>
    bgFront ? bgFront : "var(--light-color)"};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:after {
    ${({ bgBack }) =>
      bgBack
        ? css`
            background: repeating-linear-gradient(
              45deg,
              ${bgBack},
              ${bgBack} 4px,
              var(--dark-color) 2.5px,
              var(--dark-color) 6.5px
            );
          `
        : css`
            background: var(--light-color);
          `};
    content: "";
    position: absolute;
    display: block;

    border: inherit;
    left: 10px;
    top: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
