import styled from "styled-components";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: fixed;
  bottom: 0;
  height: 15vh;
  width: 100vw;
  box-sizing: border-box;
  border-bottom: 6px solid var(--dark-color);
`;

/*
https://i.postimg.cc/34D0dhcj/email-12-512.png
https://i.postimg.cc/dZPkCfbb/github-6-512.png
https://i.postimg.cc/m1YcywRt/linkedin-512.png
https://i.postimg.cc/BtH13qD4/twitter-512.png
*/
