import styled from "styled-components";

export default function PixelTransition({ src }) {
  return <Image src={src} alt="pixel transition" />;
}

const Image = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  padding: 0;
  margin-top: -10px;
  margin-bottom: -10px;
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
`;
