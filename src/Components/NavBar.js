import styled from "styled-components";

export default function NavBar() {
  return <StyledNav className="nav-bar"></StyledNav>;
}

const StyledNav = styled.nav`
  background: repeating-linear-gradient(
    -45deg,
    var(--light-color),
    var(--light-color) 4px,
    var(--dark-color) 2.5px,
    var(--dark-color) 6.5px
  );
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  position: fixed;
  min-height: 75px;
  height: 15vh;
  width: 100vw;
  z-index: 10;
  @media (max-width: 768px) {
  }
`;
