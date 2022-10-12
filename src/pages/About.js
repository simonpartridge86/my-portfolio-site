import styled from "styled-components";

export default function About() {
  return (
    <Content>
      <h1>About Page</h1>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: var(--heading-font);
  background: var(--dark-accent);
`;
