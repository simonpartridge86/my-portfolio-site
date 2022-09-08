import styled from "styled-components";

export default function PortfolioContent() {
  return (
    <>
      <div className="portfolio-heading">
        <StyledH1>Project Portfolio</StyledH1>
      </div>
    </>
  );
}

const StyledH1 = styled.h1`
  margin: 2vh 5vh;
  font-family: var(--heading-font);
`;
