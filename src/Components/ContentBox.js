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
            background-image: linear-gradient(
              45deg,
              var(--dark-color) 14.29%,
              ${bgBack} 14.29%,
              ${bgBack} 50%,
              var(--dark-color) 50%,
              var(--dark-color) 64.29%,
              ${bgBack} 64.29%,
              ${bgBack} 100%
            );
            background-size: 9.9px 9.9px;
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

/*
Note: striped background css generated using https://stripesgenerator.com/
*/
