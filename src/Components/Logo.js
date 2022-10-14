import styled from "styled-components";

export default function Logo({ onClick }) {
  return (
    <Section onClick={onClick}>
      <Text className="logo">
        S<ExpandingText className="expanding-text">imon&nbsp;</ExpandingText>P
        <ExpandingText className="expanding-text">artridge</ExpandingText>
      </Text>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px 10px;
  border: 5px solid var(--dark-color);
  background: var(--light-color);
  height: 60px;
  max-width: 600px;
  min-width: 60px;
  transition: max-width 1s;
  @media (min-width: 1175px) {
    &:hover {
      max-width: 600px;
      .expanding-text {
        max-width: 300px;
      }
    }
  }
`;

const Text = styled.h1`
  color: var(--dark-accent);
  font-family: var(--heading-font);
  font-size: 4rem;
`;

const ExpandingText = styled.span`
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  transition: max-width 1s;
  vertical-align: top;
`;
