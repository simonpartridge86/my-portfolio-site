import styled from "styled-components";

export default function SocialIcon({ text }) {
  return (
    <StyledContent>
      <StyledBox />
      <StyledText>{text}</StyledText>
    </StyledContent>
  );
}

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledBox = styled.div`
  height: 100px;
  width: 100px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  background: var(--dark-accent);
`;

const StyledText = styled.p`
  font-family: var(--heading-font);
`;
