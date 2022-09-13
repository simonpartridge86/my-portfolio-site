import styled from "styled-components";
import ContentBox from "../Components/ContentBox";
import LinkButton from "../Components/LinkButton";

console.log(
  "Hi, thanks for inspecting my website. Hopefully the console is error-free 🤞"
);
console.log(
  "Use the links below to find out more about my work or contact me:"
);
console.log("https://github.com/simonpartridge86");
console.log("https://www.linkedin.com/in/simonpartridge86/");

export default function Home() {
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
          <StyledLinks>
            <LinkButton path="/projects" text="View My Projects" />
            <LinkButton
              external={true}
              path="https://drive.google.com/file/d/1-dBgItLb1glBOU7Rd3WLeJduFJlMKSFp/view?usp=sharing"
              text="View My CV"
            />
          </StyledLinks>
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
  padding: 0vh 0 0vh 0;
`;

const StyledImage = styled.img`
  height: 45vh;
  min-height: 100px;
  width: auto;
  padding-bottom: 30px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: inherit;
  gap: 20px;
  padding: 0px 30px;
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

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
