import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Logo from "./Logo";

export default function NavBar() {
  const [isToggleActive, setIsToggleActive] = useState(false);
  function showToggleMenu() {
    setIsToggleActive(!isToggleActive);
  }
  return (
    <Nav className="nav-bar">
      <Logo onClick={() => {}} />
      {!isToggleActive && (
        <List>
          <Link onClick={() => {}}>Projects</Link>
          <Link
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-dBgItLb1glBOU7Rd3WLeJduFJlMKSFp/view?usp=sharing",
                "_blank"
              )
            }
          >
            CV
          </Link>
          <Link
            onClick={() =>
              window.open("https://github.com/simonpartridge86", "_blank")
            }
          >
            GitHub
          </Link>
        </List>
      )}
      {isToggleActive && (
        <ToggleMenu href="#" className="toggle-menu" onClick={showToggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </ToggleMenu>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  background-image: linear-gradient(
    135deg,
    var(--dark-color) 14.29%,
    var(--light-accent) 14.29%,
    var(--light-accent) 50%,
    var(--dark-color) 50%,
    var(--dark-color) 64.29%,
    var(--light-accent) 64.29%,
    var(--light-accent) 100%
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

const List = styled.ul`
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

const Link = styled.a`
  cursor: pointer;
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 2.5rem;
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

const ToggleMenu = styled.a`
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
