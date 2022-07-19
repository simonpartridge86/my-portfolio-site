import styled from "styled-components";

export default function IntroContent() {
  return (
    <>
      <StyledImage
        src="https://i.postimg.cc/d18jz1NR/avatar-1024.png"
        alt="pixel avatar"
      />
      <article>
        <StyledH1>Hi, I'm Simon Partridge</StyledH1>
        <br />
        <StyledParagraph>
          I’m a <StyledSpan>Doctor of Chemistry</StyledSpan> and former copy
          editor.
        </StyledParagraph>
        <br />
        <StyledParagraph>
          I travelled the globe over the last 10 years, but now I’m starting a
          new adventure as a <StyledSpan>Junior Software Developer</StyledSpan>.
        </StyledParagraph>
      </article>
    </>
  );
}

const StyledImage = styled.img`
  height: 250px;
  width: auto;
`;

const StyledH1 = styled.h1`
  font-family: var(--heading-font);
  font-size: 2rem;
  color: var(--light-accent);
  text-align: left;
`;

const StyledParagraph = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1rem;
  color: var(--light-color);
  max-width: 50vw;
  letter-spacing: -1px;
`;

const StyledSpan = styled.span`
  color: var(--light-accent);
`;
