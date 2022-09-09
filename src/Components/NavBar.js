import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [isToggleActive, setIsToggleActive] = useState(false);
  function showToggleMenu() {
    setIsToggleActive(!isToggleActive);
  }
  return (
    <StyledNav className="nav-bar">
      <StyledLogo
        onClick={() => {
          navigate("/");
        }}
      >
        <StyledBox>{"<"}</StyledBox>
        <StyledTitle className="logo">Simon Partridge</StyledTitle>
      </StyledLogo>
      {isToggleActive === true ? (
        <StyledList>
          <StyledLink
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/skills");
            }}
          >
            Skills
          </StyledLink>

          <StyledLink
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </StyledLink>
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

const StyledNav = styled.nav`
  background-image: linear-gradient(
    135deg,
    var(--dark-color) 14.29%,
    var(--light-color) 14.29%,
    var(--light-color) 50%,
    var(--dark-color) 50%,
    var(--dark-color) 64.29%,
    var(--light-color) 64.29%,
    var(--light-color) 100%
  );
  background-size: 9.9px 9.9px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  min-height: 75px;
  height: 15vh;
  width: 100vw;
  z-index: 10;
  @media (max-width: 768px) {
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--paragraph-font);
  font-weight: 700;
  font-size: 0.66rem;
  gap: 2vw;
  padding-right: 100px;
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
  cursor: pointer;
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 1.25rem;
  background: var(--light-color);
  min-width: 150px;
  padding: 0px;
  line-height: 60px;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  color: var(--dark-color);
  transition: var(--speed-normal);
  border: 5px solid var(--dark-color);
  &:hover {
    background: var(--light-accent)
      url(https://i.postimg.cc/yYjrDgND/pixelbutton.png);
    transition-delay: 0.5s;
    background-size: 120px;
    animation: ${pixelAnimation} 0.8s steps(8) forwards;
  }
`;

const StyledLogo = styled.div`
  cursor: pointer;
  border: 5px solid var(--dark-color);
  background: var(--light-color);
  height: 60px;
  min-width: 35vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-family: var(--heading-font);
  font-size: 2.5rem;
  font-weight: 500;
  border-right: 5px solid var(--dark-color);
`;

const StyledTitle = styled.h1`
  text-indent: 20px;
  color: var(--dark-accent);
  font-family: var(--heading-font);
  font-size: 1.5rem;
  min-width: 30vw;
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

/*
Note: striped background css generated using https://stripesgenerator.com/
*/
