import styled, { keyframes, css } from "styled-components";
import { useState } from "react";
import Logo from "./Logo";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Navigation({ homeRef, projectsRef, contactRef }) {
  const { id } = useParams();
  if (id) {
  }
  const navigate = useNavigate();
  const location = useLocation();
  const [isToggleActive, setIsToggleActive] = useState(false);

  function showToggleMenu() {
    setIsToggleActive(!isToggleActive);
  }

  function handleClick(currentRef) {
    currentRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Nav>
      <Logo
        onClick={() => {
          if (location.pathname === "/") {
            handleClick(homeRef);
          } else {
            navigate("/");
          }
        }}
      />
      <List isToggleActive={isToggleActive}>
        <Link
          onClick={() => {
            if (location.pathname === "/") {
              handleClick(homeRef);
            } else {
              navigate("/");
            }
          }}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            if (location.pathname === "/blog") {
              handleClick(homeRef);
            } else {
              navigate("/blog");
            }
          }}
        >
          Blog
        </Link>
        <Link
          onClick={() => {
            if (location.pathname === "/") {
              handleClick(projectsRef);
            } else {
              navigate("/:projects");
            }
          }}
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            if (location.pathname === "/") {
              handleClick(contactRef);
            } else {
              navigate("/:contact");
            }
          }}
        >
          Contact
        </Link>
      </List>
      <ToggleButton onClick={showToggleMenu} isToggleActive={isToggleActive}>
        <Bar />
        <Bar />
        <Bar />
      </ToggleButton>
      {isToggleActive && (
        <MobileList isToggleActive={isToggleActive}>
          <Link
            onClick={() => {
              handleClick(homeRef);
              showToggleMenu();
            }}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              handleClick(projectsRef);
              showToggleMenu();
            }}
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              handleClick(contactRef);
              showToggleMenu();
            }}
          >
            Contact
          </Link>
        </MobileList>
      )}
    </Nav>
  );
}

const MobileList = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 25px 0;
  font-family: var(--paragraph-font);
  gap: 20px;
  position: fixed;
  z-index: 9;
  top: 80px;
  left: 0;
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(
    135deg,
    var(--dark-color) 14.29%,
    var(--dark-accent) 14.29%,
    var(--dark-accent) 50%,
    var(--dark-color) 50%,
    var(--dark-color) 64.29%,
    var(--dark-accent) 64.29%,
    var(--dark-accent) 100%
  );
  background-size: 9.9px 9.9px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  border-top: none;
  @media (max-width: 767px) {
    ${(props) =>
      props.isToggleActive
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `};
  }
`;

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
  padding: 0px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 10;
  @media (max-width: 767px) {
    padding: 0 10px;
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
  @media (max-width: 767px) {
    display: none;
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
  line-height: 50px;
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
  @media (max-width: 767px) {
    width: 80%;
  }
`;

const ToggleButton = styled.a`
  position: absolute;
  cursor: pointer;
  height: 50px;
  width: 50px;
  gap: 7px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--dark-color);
  ${(props) =>
    props.isToggleActive
      ? css`
          background: var(--dark-accent);
        `
      : css`
          background: var(--light-color);
        `};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Bar = styled.span`
  position: relative;
  height: 5px;
  width: 80%;
  background-color: var(--dark-color);
`;

/*
Note: striped background css generated using https://stripesgenerator.com/
*/

/* Source of nav button animation: https://codepen.io/martinboykov/pen/jOrEWBr */
/* Expanding logo idea taken from: https://www.demo2s.com/html-css/css-text-hover-to-expand-letter-to-word.html */
/* Navbar toggle menu made following this tutorial: https://www.youtube.com/watch?v=At4B7A4GOPg&ab_channel=WebDevSimplified */
