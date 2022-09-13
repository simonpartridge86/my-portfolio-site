import styled from "styled-components";

export default function ErrorPage() {
  return (
    <StyledMain>
      <h1>Error Page - Page Not Found</h1>
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
