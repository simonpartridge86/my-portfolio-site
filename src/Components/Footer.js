import styled from "styled-components";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <StyledFooter>
      <SocialIcon text="Email." />
      <SocialIcon text="GitHub." />
      <SocialIcon text="LinkedIn." />
      <SocialIcon text="Twitter." />
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
  top: 80vh;
  height: 20vh;
  width: 100vw;
  box-sizing: border-box;
  border-bottom: 6px solid var(--dark-color);
`;
