import styled from "styled-components";
import LinkButton from "../components/LinkButton";

export default function NewIntro({ passRef }) {
  return (
    <IntroSection ref={passRef}>
      <Image
        src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
        alt="pixel avatar"
      />
      <TextSection>
        <Heading>Hi, I'm Simon Partridge</Heading>
        <Text>I’m a Doctor of Chemistry and former copy editor.</Text>
        <Text>
          After travelling the world and working remotely for the last 10 years,
          I’ve started a new adventure in the programming world.
        </Text>
        <Text>
          I've just completed a full-stack JavaScript development bootcamp run
          by the brilliant School of Code, and now I'm seeking job opportunities
          as a full-stack developer.
        </Text>
        <LinkContainer>
          <LinkButton path="/projects" text="View My Projects" />
          <LinkButton
            external={true}
            path="https://www.canva.com/design/DAFO2NxMh58/x2-7Hc_ruQk32GOflp0sMg/view?utm_content=DAFO2NxMh58&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            text="View My CV"
          />
        </LinkContainer>
      </TextSection>
    </IntroSection>
  );
}

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  background: var(--dark-accent);
  padding: 15vh 5vw 0 5vw;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  background-image: url(https://i.postimg.cc/d18jz1NR/avatar-1024.png);
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-position: center center;
  height: 85vh;
  width: 35vw;
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const TextSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 65vw;
  gap: 20px;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Heading = styled.h2`
  font-family: var(--heading-font);
  color: var(--light-accent);
  font-size: 3rem;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  color: var(--light-color);
  font-size: 1.5rem;
`;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
