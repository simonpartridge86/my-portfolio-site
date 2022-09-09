import styled from "styled-components";

export default function About() {
  return (
    <StyledMain>
      <h1>About Page</h1>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: var(--heading-font);
`;
