import styled from "styled-components";
import ContentBox from "../components/ContentBox";
import LinkButton from "../components/LinkButton";

export default function Intro() {
  return (
    <Main>
      <ContentBox
        width="30vw"
        height="50vh"
        bgFront="var(--dark-accent)"
        bgBack="var(--light-accent)"
      >
        <Image
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
        <Section>
          <Heading>Hi, I'm Simon Partridge</Heading>
          <Text>I’m a Doctor of Chemistry and former copy editor.</Text>
          <Text>
            I travelled the globe over the last 10 years, but now I’m starting a
            new adventure as a Software Developer.
          </Text>
          <LinkContainer>
            <LinkButton path="/projects" text="View My Projects" />
            <LinkButton
              external={true}
              path="https://www.canva.com/design/DAFMS1Bo4Sg/jq2t0NooFjJ1FlABFBMUJA/edit?utm_content=DAFMS1Bo4Sg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              text="View My CV"
            />
          </LinkContainer>
        </Section>
      </ContentBox>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: var(--light-color);
  z-index: 0;
  padding: 0vh 0 0vh 0;
`;

const Image = styled.img`
  height: 45vh;
  min-height: 100px;
  width: auto;
  padding-bottom: 30px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: inherit;
  gap: 20px;
  padding: 0px 30px;
`;

const Heading = styled.h2`
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--light-accent);
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  color: var(--light-color);
`;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
