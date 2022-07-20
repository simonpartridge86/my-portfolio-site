import styled, { keyframes } from "styled-components";
import { useState } from "react";

export default function NavBar() {
  const [isToggleActive, setIsToggleActive] = useState(true);

  function showToggleMenu() {
    setIsToggleActive(!isToggleActive);
  }

  return (
    <StyledNav className="nav-bar">
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
      {isToggleActive === true ? (
        <StyledList>
          <StyledLink href="skills.asp">Skills</StyledLink>
          <StyledLink href="projects.asp">Projects</StyledLink>
          <StyledLink href="about.asp">About</StyledLink>
          <StyledLink href="contact.asp">Contact</StyledLink>
        </StyledList>
      ) : null}
      <StyledToggleMenu
        href="#"
        className="toggle-menu"
        onClick={showToggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </StyledToggleMenu>
    </StyledNav>
  );
}

/* Source of nav button animation: https://codepen.io/martinboykov/pen/jOrEWBr */
/* Expanding logo idea taken from: https://www.demo2s.com/html-css/css-text-hover-to-expand-letter-to-word.html */
/* Navbar toggle menu made following this tutorial: https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified */

const StyledNav = styled.nav`
  background-color: var(--dark-accent);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  min-height: 75px;
  height: 15vh;
  width: 100vw;
  box-shadow: 0px 0px 5px var(--dark-color);
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  font-family: var(--paragraph-font);
  font-weight: 700;
  font-size: 0.66rem;
  min-width: 60vw;
  gap: 2vw;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: flex;
  }
`;

const pixelAnimation = keyframes`
    0% {
        background-position-y: 0;
   }
    100% {
        background-position-y: -480px;
   }`;

const StyledLink = styled.a`
  min-width: 120px;
  padding: 0px;
  line-height: 50px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--light-color);
  transition: var(--speed-normal);
  border: 2px solid var(--light-accent);
  border-radius: 8px;

  &:hover {
    background: var(--light-accent)
      url(https://i.postimg.cc/yYjrDgND/pixelbutton.png);
    transition-delay: 0.5s;
    background-size: 120px;
    animation: ${pixelAnimation} 0.8s steps(8) forwards;
    color: var(--dark-accent);
  }
`;

const StyledLogo = styled.h1`
  margin: 0px;
  text-indent: 50px;
  color: var(--light-accent);
  font-family: var(--heading-font);
  font-size: 2rem;
  min-width: 40vw;
  > .logo-initials {
    display: inline-block;
    text-indent: 0;
  }
  @media (min-width: 768px) {
    &:hover {
      .expanding-logo-text {
        max-width: 200px;
      }
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

const StyledToggleMenu = styled.a`
  position: absolute;
  min-height: 75px;
  height: 15vh;
  width: 30px;
  gap: 7px;
  right: 50px;
  display: none;
  flex-direction: column;
  justify-content: center;
  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
