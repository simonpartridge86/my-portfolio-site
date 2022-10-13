import styled from "styled-components";
import externalLinks from "../data/externalLinks.js";

export default function Footer() {
  return (
    <StyledFooter>
      <Text>&copy; Simon Partridge</Text>
      <LinkContainer>
        <Link href={externalLinks.github} target="_blank">
          Github
        </Link>
        <Spacer>|</Spacer>
        <Link href={externalLinks.linkedin} target="_blank">
          LinkedIn
        </Link>
        <Spacer>|</Spacer>
        <Link href={externalLinks.twitter} target="_blank">
          Twitter
        </Link>
        <Spacer>|</Spacer>
        <Link href={externalLinks.cv} target="_blank">
          CV
        </Link>
      </LinkContainer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  font-family: var(--paragraph-font);
  font-size: 1.75rem;
  background: var(--dark-accent);
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  border-top: none;
  @media all and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p``;

const Spacer = styled.div``;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media all and (max-width: 768px) {
    gap: 10px;
  }
`;

const Link = styled.a`
  color: var(--dark-color);
  text-decoration: none;
`;
