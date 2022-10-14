import styled from "styled-components";
import externalLinks from "../data/externalLinks";

export default function Intro({ passRef }) {
  return (
    <IntroSection ref={passRef}>
      <Image
        src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
        alt="pixel avatar"
      />
      <TextContainer>
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
        <Text>
          If you're interested in hiring me, please check out{" "}
          <Link href={externalLinks.cv} target="_blank">
            my CV here
          </Link>
          .
        </Text>
      </TextContainer>
    </IntroSection>
  );
}

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  background: var(--dark-accent);
  padding: 15vh 5vw 0 5vw;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: auto;
  width: 40%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 65vw;
  gap: 20px;
  @media (max-width: 768px) {
    height: 40vh;
    width: 80vw;
    margin-bottom: 50px;
  }
`;

const Heading = styled.h2`
  font-family: var(--heading-font);
  color: var(--light-accent);
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  color: var(--light-color);
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Link = styled.a`
  color: var(--light-accent);
  text-decoration: none;
`;
