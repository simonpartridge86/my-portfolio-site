import styled from "styled-components";
import externalLinks from "../data/externalLinks.js";

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Simon Partridge</p>
      <LinkContainer>
        <Link href={externalLinks.github} target="_blank">
          Github
        </Link>
        |
        <Link href={externalLinks.linkedin} target="_blank">
          LinkedIn
        </Link>
        |
        <Link href={externalLinks.cv} target="_blank">
          My CV
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
  @media all and (max-width: 768px) {
    font-size: 1rem;
  }
`;

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
