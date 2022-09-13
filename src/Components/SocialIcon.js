import styled from "styled-components";

export default function SocialIcon({ text, imgURL }) {
  return (
    <StyledLink
      href="https://twitter.com/home"
      target="_blank"
      rel="noreferrer"
    >
      <StyledContent>
        <StyledBox>
          <StyledImage src={imgURL} alt={`${text} icon`} />
        </StyledBox>
        <StyledText>{text}</StyledText>
      </StyledContent>
    </StyledLink>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--dark-color);
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

const StyledBox = styled.div`
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  background: var(--dark-accent);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 80%;
  width: 80%;
`;

const StyledText = styled.p`
  font-family: var(--heading-font);
  font-size: 0.75rem;
`;
