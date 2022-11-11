import styled from "styled-components";

export default function SkillIcon({ src, text }) {
  return (
    <Icon>
      <Image src={src} alt={text} />
      <Text>{text}</Text>
    </Icon>
  );
}

const Icon = styled.div`
  height: 100px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
  color: var(--light-color);
`;

const Image = styled.img`
  height: 50px;
  width: auto;
`;
