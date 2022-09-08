import styled from "styled-components";
import ContentBox from "./ContentBox";

export default function IntroContent() {
  return (
    <StyledMain>
      <ContentBox
        width="30vw"
        height="50vh"
        bgFront="var(--dark-accent)"
        bgBack="var(--light-accent)"
      >
        <StyledImage
          src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
          alt="pixel avatar"
        />
      </ContentBox>
      <ContentBox
        width="50vw"
        height="50vh"
        bgFront="var(--dark-accent)"
        bgBack="var(--light-accent)"
      >
        <StyledSection>
          <StyledHeading>Hi, I'm Simon Partridge</StyledHeading>
          <StyledText>
            I’m a Doctor of Chemistry and former copy editor.
          </StyledText>
          <StyledText>
            I travelled the globe over the last 10 years, but now I’m starting a
            new adventure as a Software Developer.
          </StyledText>
        </StyledSection>
      </ContentBox>
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
  gap: 50px;
  background: var(--light-color);
  z-index: 0;
  box-sizing: border-box;
  border-left: 6px solid var(--dark-color);
  border-right: 6px solid var(--dark-color);
  padding: 15vh 0 20vh 0;
`;

const StyledImage = styled.img`
  height: 45vh;
  min-height: 100px;
  width: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: inherit;
  gap: 50px;
  padding: 50px;
`;

const StyledHeading = styled.h2`
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--light-accent);
`;

const StyledText = styled.p`
  font-family: var(--paragraph-font);
  color: var(--light-color);
`;
