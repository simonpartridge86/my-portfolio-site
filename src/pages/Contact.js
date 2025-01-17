import styled from "styled-components";
import SocialIcon from "../components/SocialIcon";
import externalLinks from "../data/externalLinks.js";

export default function Contact({ passRef }) {
  return (
    <ContactSection ref={passRef}>
      <Heading>Contact Me</Heading>
      <Content>
        <SocialIcon
          text="Email."
          imgURL="https://i.postimg.cc/34D0dhcj/email-12-512.png"
          link={externalLinks.email}
        />
        <SocialIcon
          text="LinkedIn."
          imgURL="https://i.postimg.cc/m1YcywRt/linkedin-512.png"
          link={externalLinks.linkedin}
        />
        <SocialIcon
          text="GitHub."
          imgURL="https://i.postimg.cc/dZPkCfbb/github-6-512.png"
          link={externalLinks.github}
        />
      </Content>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 50px;
  font-family: var(--heading-font);
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  background: var(--light-color);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 80%;
  }
`;

const Heading = styled.h2`
  font-size: 5rem;
  color: var(--dark-color);
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

/*
https://i.postimg.cc/34D0dhcj/email-12-512.png
https://i.postimg.cc/dZPkCfbb/github-6-512.png
https://i.postimg.cc/m1YcywRt/linkedin-512.png
*/
