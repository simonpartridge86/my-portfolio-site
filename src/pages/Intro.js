import styled from "styled-components";
import externalLinks from "../data/externalLinks";
import SkillIcon from "../components/SkillIcon";
import skills from "../data/skillsData.js";

export default function Intro({ passRef }) {
  return (
    <IntroSection ref={passRef}>
      <Profile>
        <Image
          src="https://i.postimg.cc/T208K75C/avatar-1024.png"
          alt="pixel avatar"
        />
        <TextContainer>
          <Heading>Hi, I'm Simon Partridge</Heading>
          <Text>
            I’m an <Bold>enthusiastic</Bold>, <Bold>industrious</Bold>, and{" "}
            <Bold>friendly</Bold> software developer with an{" "}
            <Bold>aptitude for learning quickly</Bold> and a{" "}
            <Bold>passion for problem-solving</Bold>.
          </Text>
          <Text>
            I've just completed a full-stack JavaScript development bootcamp run
            by the brilliant School of Code, and now I'm seeking job
            opportunities as a junior developer.
          </Text>
          <Text>
            Prior to coding, I obtained a <Bold></Bold>PhD in Chemistry, and{" "}
            <Bold>travelled the world</Bold> for several years working remotely
            as a copy editor. I started learning to code in order to{" "}
            <Bold>find more exciting and creative work</Bold>.
          </Text>
          <Text>
            If you're interested in hiring me, please check out{" "}
            <Link href={externalLinks.cv} target="_blank">
              <Bold>my CV here</Bold>
            </Link>{" "}
            or scroll down to view my projects and contact me.
          </Text>
        </TextContainer>
      </Profile>
      <SkillsContainer>
        {skills.map((skill) => {
          return (
            <SkillIcon src={skill.src} text={skill.text} key={skill.text} />
          );
        })}
      </SkillsContainer>
    </IntroSection>
  );
}

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  gap: 25px;
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  background: var(--dark-accent);
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 12vh;
  }
`;

const Profile = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 60vh;
  background: var(--dark-accent);
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 12vh;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: auto;
  width: 15vw;
  margin: 50px;
  @media (max-width: 768px) {
    width: 40vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20vh;
  width: 60vw;
  gap: 20px;
  @media (max-width: 768px) {
    height: 40vh;
    width: 80vw;
    gap: 10px;
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
  text-decoration: underline;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 20vh;
  background: black;
  gap: 15px;
`;
