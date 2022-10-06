import styled from "styled-components";

export default function Logo() {
  return (
    <SCSection className="expanding-section">
      <StyledLogo className="logo">
        <span className="logo-initials">
          S
          <StyledLogoExpanded className="expanding-logo-text">
            imon&nbsp;
          </StyledLogoExpanded>
        </span>
        <span className="logo-initials">
          P
          <StyledLogoExpanded className="expanding-logo-text">
            artridge
          </StyledLogoExpanded>
        </span>
      </StyledLogo>
    </SCSection>
  );
}

const SCSection = styled.section`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 5px solid var(--dark-color);
  background: var(--light-color);
  height: 60px;
  max-width: 150px;
  transition: max-width 1s;
  vertical-align: center;
  @media (min-width: 768px) {
    &:hover {
      max-width: 500px;
      .expanding-logo-text {
        max-width: 200px;
      }
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
