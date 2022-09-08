import styled from "styled-components";

export default function NavBar() {
  return <StyledNav className="nav-bar"></StyledNav>;
}

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
