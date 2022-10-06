import styled from "styled-components";

export default function Logo({ onClick }) {
  return (
    <SCSection className="expanding-section" onClick={onClick}>
      <StyledLogo className="logo">
        <span className="logo-initials">
          S
          <StyledLogoExpanded className="expanding-logo-text">
            IMON&nbsp;
          </StyledLogoExpanded>
        </span>
        <span className="logo-initials">
          P
          <StyledLogoExpanded className="expanding-logo-text">
            ARTRIDGE
          </StyledLogoExpanded>
        </span>
      </StyledLogo>
    </SCSection>
  );
}

const SCSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 5px solid var(--dark-color);
  background: var(--light-color);
  height: 60px;
  max-width: 150px;
  transition: max-width 1s;
  &:hover {
    max-width: 600px;
    .expanding-logo-text {
      max-width: 300px;
    }
  }
`;

const StyledLogo = styled.h1`
  margin: 0px 10px;
  color: var(--dark-accent);
  font-family: var(--heading-font);
  font-size: 2rem;
`;

const StyledLogoExpanded = styled.span`
  display: inline-block;
  text-indent: 0;
  max-width: 0;
  overflow: hidden;
  transition: max-width 1s;
  vertical-align: top;
`;
