import styled, { keyframes } from "styled-components";

export default function NavBar() {
  return (
    <StyledNavBar className="nav-bar">
      <StyledLogo className="logo">
        <span className="logo-text1">
          S
          <StyledLogoExpanded className="logo-text2">
            imon&nbsp;
          </StyledLogoExpanded>
        </span>
        <span className="logo-text1">
          P
          <StyledLogoExpanded className="logo-text2">
            artridge
          </StyledLogoExpanded>
        </span>
      </StyledLogo>
      <StyledUl className="nav-ul">
        <StyledNavLink href="skills.asp" className="nav-link">
          Skills
        </StyledNavLink>
        <StyledNavLink href="projects.asp" className="nav-link">
          Projects
        </StyledNavLink>
        <StyledNavLink href="about.asp" className="nav-link">
          About
        </StyledNavLink>
        <StyledNavLink href="contact.asp" className="nav-link">
          Contact
        </StyledNavLink>
      </StyledUl>
    </StyledNavBar>
  );
}

/* Source of nav button animation: https://codepen.io/martinboykov/pen/jOrEWBr */
/* Expanding logo idea taken from: https://www.demo2s.com/html-css/css-text-hover-to-expand-letter-to-word.html */

const StyledNavBar = styled.nav`
  background-color: var(--dark-accent);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100px;
  width: 100vw;
  box-shadow: 0px 0px 5px var(--dark-color);
  z-index: 1;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5vh;
  box-sizing: border-box;
  font-family: var(--paragraph-font);
  font-weight: 700;
  font-size: 0.66rem;
  width: 60vw;
  margin-right: 20px;
`;

const pixelAnimation = keyframes`
    0% {
        background-position-y: 0;
   }
    100% {
        background-position-y: -480px;
   }`;

const StyledNavLink = styled.a`
  position: relative;
  width: 120px;
  height: 50px;
  margin: 15px;
  line-height: 50px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--light-color);
  transition: var(--speed-normal);
  border: 2px solid var(--light-accent);

  &:hover {
    background: var(--light-accent)
      url(https://i.postimg.cc/yYjrDgND/pixelbutton.png);
    transition-delay: 0.5s;
    background-size: 180px;
    animation: ${pixelAnimation} 0.8s steps(8) forwards;
    color: var(--dark-accent);
  }
`;

const StyledLogo = styled.h1`
  margin: 20px 0px;
  text-indent: 50px;
  line-height: 60px;
  color: var(--light-accent);
  font-family: var(--heading-font);
  text-align: left;
  font-size: 2rem;
  width: 40vw;
  > .logo-text1 {
    display: inline-block;
    text-indent: 0;
  }
  &:hover {
    .logo-text2 {
      max-width: 300px;
    }
  }
`;

const StyledLogoExpanded = styled.span`
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  transition: max-width 1s;
  vertical-align: top;
`;
