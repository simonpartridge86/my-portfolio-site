import styled, { keyframes } from "styled-components";

export default function LinkButton({ path, text, external }) {
  return !external ? (
    <Link onClick={() => {}}>{text}</Link>
  ) : (
    <Link onClick={() => window.open(path, "_blank")}>{text}</Link>
  );
}

const pixelAnimation = keyframes`
    0% {
        background-position-y: 0;
   }
    100% {
        background-position-y: -480px;
   }`;

const Link = styled.a`
  cursor: pointer;
  font-family: var(--heading-font);
  font-size: 1.5rem;
  background: var(--dark-accent);
  width: 200px;
  padding: 0px 10px;
  line-height: 50px;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  color: var(--dark-color);
  transition: var(--speed-normal);
  box-sizing: border-box;
  border: 5px solid var(--dark-color);
  &:hover {
    background: var(--light-accent)
      url(https://i.postimg.cc/yYjrDgND/pixelbutton.png);
    transition-delay: 0.5s;
    background-size: 120px;
    animation: ${pixelAnimation} 0.8s steps(8) forwards;
  }
  @media (max-width: 768px) {
    min-width: 100%;
    font-size: 1.25rem;
  }
`;

/*
Note: striped background css generated using https://stripesgenerator.com/
*/
