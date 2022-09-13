import styled from "styled-components";
import ContentBox from "../Components/ContentBox";
import LinkButton from "../Components/LinkButton";

export default function ProjectCard() {
  return (
    <ContentBox
      width="80vw"
      height="50vh"
      bgFront="var(--dark-accent)"
      bgBack="var(--light-accent)"
    >
      <StyledDiv>
        <StyledImage
          src="https://i.postimg.cc/ncyrzgcc/Screenshot-2022-08-18-at-11-26-45.png"
          alt="chews app home page"
        />
        <StyledImage
          src="https://i.postimg.cc/s2y2PWhk/Screenshot-2022-08-18-at-11-27-30.png"
          alt="chews app recipe page"
        />
      </StyledDiv>
      <StyledSection>
        <StyledHeading>Chews</StyledHeading>
        <StyledText>
          A mobile-first web app that helps users with decision-making and
          recipe-finding at mealtimes. Created over 4 weeks in a 6-person team
        </StyledText>
        <StyledText>
          Tech Stack: Next.js, Tailwind CSS, Chakra UI, Node.js, Express,
          PostgreSQL, Auth0
        </StyledText>
        <StyledLinks>
          <LinkButton
            external={true}
            path="https://chews.vercel.app/"
            text="Open App"
          />
          <LinkButton
            external={true}
            path="https://github.com/simonpartridge86/baristacrats-frontend-final-project"
            text="GitHub Repo"
          />
        </StyledLinks>
      </StyledSection>
    </ContentBox>
  );
}

const StyledImage = styled.img`
  max-height: 40vh;
  min-height: 100px;
  width: auto;
  box-sizing: border-box;
  border: 6px solid var(--dark-color);
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  width: inherit;
  gap: 20px;
  padding: 0px 30px;
`;

const StyledHeading = styled.h2`
  font-family: var(--heading-font);
  font-weight: 700;
  color: var(--light-accent);
`;

const StyledText = styled.p`
  font-family: var(--paragraph-font);
  color: var(--light-color);
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: auto;
  gap: 20px;
  padding: 0px 30px;
`;
