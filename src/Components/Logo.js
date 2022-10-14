import styled from "styled-components";

export default function Logo({ onClick }) {
  return (
    <Section className="expanding-section" onClick={onClick}>
      <Text className="logo">
        <span className="logo-initials">
          S
          <ExpandedText className="expanding-logo-text">
            imon&nbsp;
          </ExpandedText>
        </span>
        <span className="logo-initials">
          P<ExpandedText className="expanding-logo-text">artridge</ExpandedText>
        </span>
      </Text>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 5px solid var(--dark-color);
  background: var(--light-color);
  height: 60px;
  max-width: 150px;
  transition: max-width 1s;
  &:hover {
    max-width: 600px;
    .expanding-logo-text {
      max-width: 300px;
    }
  }
`;

const Text = styled.h1`
  margin: 0px 10px;
  color: var(--dark-accent);
  font-family: var(--heading-font);
  font-size: 4rem;
`;

const ExpandedText = styled.span`
  display: inline-block;
  text-indent: 0;
  max-width: 0;
  overflow: hidden;
  transition: max-width 1s;
  vertical-align: top;
`;
