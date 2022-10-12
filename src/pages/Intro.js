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
            After travelling the world and working remotely for the last 10
            years, I’ve started a new adventure in the programming world.
          </Text>
          <Text>
            I've just completed a full-stack JavaScript development bootcamp run
            by the brilliant School of Code, and now I'm seeking job
            opportunities as a full-stack developer.
          </Text>
          <LinkContainer>
            <LinkButton path="/projects" text="View My Projects" />
            <LinkButton
              external={true}
              path="https://www.canva.com/design/DAFO2NxMh58/x2-7Hc_ruQk32GOflp0sMg/view?utm_content=DAFO2NxMh58&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
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
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
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
