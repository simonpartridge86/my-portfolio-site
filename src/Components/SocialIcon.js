import styled from "styled-components";

export default function SocialIcon({ text, imgURL }) {
  return (
    <Link href="https://twitter.com/home" target="_blank" rel="noreferrer">
      <Content>
        <Box>
          <Image src={imgURL} alt={`${text} icon`} />
        </Box>
        <Text>{text}</Text>
      </Content>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: var(--dark-color);
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

const Box = styled.div`
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  background: var(--dark-accent);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
`;

const Text = styled.p`
  font-family: var(--paragraph-font);
  font-size: 1.5rem;
`;
