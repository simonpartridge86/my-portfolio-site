import styled from "styled-components";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  return (
    <Section>
      <h1>Contact Me</h1>
      <Content>
        <SocialIcon
          text="Email."
          imgURL="https://i.postimg.cc/34D0dhcj/email-12-512.png"
        />
        <SocialIcon
          text="GitHub."
          imgURL="https://i.postimg.cc/dZPkCfbb/github-6-512.png"
        />
        <SocialIcon
          text="LinkedIn."
          imgURL="https://i.postimg.cc/m1YcywRt/linkedin-512.png"
        />
        <SocialIcon
          text="Twitter."
          imgURL="https://i.postimg.cc/BtH13qD4/twitter-512.png"
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
  width: 100vw;
  gap: 50px;
  font-family: var(--heading-font);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

/*
https://i.postimg.cc/34D0dhcj/email-12-512.png
https://i.postimg.cc/dZPkCfbb/github-6-512.png
https://i.postimg.cc/m1YcywRt/linkedin-512.png
https://i.postimg.cc/BtH13qD4/twitter-512.png
*/
