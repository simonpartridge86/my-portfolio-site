import styled from "styled-components";
import SocialIcon from "../components/SocialIcon";
import externalLinks from "../data/externalLinks.js";

export default function Contact({ passRef }) {
  return (
    <Section ref={passRef}>
      <Heading>Contact Me</Heading>
      <Content>
        <SocialIcon
          text="Email."
          imgURL="https://i.postimg.cc/34D0dhcj/email-12-512.png"
          link={externalLinks.email}
        />
        <SocialIcon
          text="GitHub."
          imgURL="https://i.postimg.cc/dZPkCfbb/github-6-512.png"
          link={externalLinks.github}
        />
        <SocialIcon
          text="LinkedIn."
          imgURL="https://i.postimg.cc/m1YcywRt/linkedin-512.png"
          link={externalLinks.linkedin}
        />
        <SocialIcon
          text="Twitter."
          imgURL="https://i.postimg.cc/BtH13qD4/twitter-512.png"
          link={externalLinks.twitter}
        />
      </Content>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 50px;
  font-family: var(--heading-font);
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: var(--dark-color);
`;

/*
https://i.postimg.cc/34D0dhcj/email-12-512.png
https://i.postimg.cc/dZPkCfbb/github-6-512.png
https://i.postimg.cc/m1YcywRt/linkedin-512.png
https://i.postimg.cc/BtH13qD4/twitter-512.png
*/
