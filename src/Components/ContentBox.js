import styled from "styled-components";

export default function ContentBox(props) {
  return <StyledSection props={props} />;
}

const StyledSection = styled.section`
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
  height: 50vh;
  width: 50vw;
  background-color: var(--light-color);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: repeating-linear-gradient(
      45deg,
      var(--light-accent),
      var(--light-accent) 4px,
      var(--dark-color) 2.5px,
      var(--dark-color) 6.5px
    );
    border: inherit;
    left: 10px;
    top: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
