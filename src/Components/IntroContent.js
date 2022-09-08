import styled from "styled-components";
import ContentBox from "./ContentBox";

export default function IntroContent() {
  return (
    <StyledMain>
      <ContentBox width="20vw" height="20vh">
        <StyledImage
          src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
          alt="pixel avatar"
        />
      </ContentBox>
      <ContentBox />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-accent);
  z-index: 0;
`;

const StyledImage = styled.img`
  height: 250px;
  width: auto;
`;
