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
            In 2022, I completed a full-stack JavaScript development bootcamp
            run by the brilliant{" "}
            <Link href={externalLinks.soc} target="_blank">
              <Bold>School of Code</Bold>
            </Link>
            to transition career to software development.
          </Text>
          <Text>
            I started my first job as a <Bold>Junior Software Engineer</Bold> in
            Feb 2023. In early 2024 I was promoted to a{" "}
            <Bold>mid-level Software Engineer</Bold>.
          </Text>
          <Text>
            Prior to coding, I obtained a <Bold>PhD in Chemistry</Bold>, and{" "}
            <Bold>travelled the world</Bold> for several years working remotely
            as a copy editor. I started learning to code in order to{" "}
            <Bold>find more exciting and creative work</Bold>.
          </Text>
          {/* <Text>
            If you're interested in hiring me, please check out{" "}
            <Link href={externalLinks.cv} target="_blank">
              <Bold>my CV here</Bold>
            </Link>{" "}
            or scroll down to view my projects and contact me.
          </Text> */}
        </TextContainer>
      </Profile>
      <SkillsContainer>
        <Heading>Technologies I've worked with:</Heading>
        <Skills>
          {skills.map((skill) => {
            return (
              <SkillIcon src={skill.src} text={skill.text} key={skill.text} />
            );
          })}
        </Skills>
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
  padding-top: 10vh;
`;

const Profile = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 50vh;
  height: auto;
  background: var(--dark-accent);
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-around;
    width: 100%;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: auto;
  width: 20%;
  margin: 50px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    height: 25vh;
    margin-bottom: 0;
    width: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 20vh;
  height: auto;
  width: 80%;
  gap: 20px;
  @media (max-width: 768px) {
    min-height: 40vh;
    width: 85%;
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
  font-weight: 900;
`;

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  min-height: 20vh;
  height: auto;
  gap: 20px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;
`;
