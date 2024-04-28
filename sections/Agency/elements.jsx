import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: black;
  margin-bottom: 0px;
`;

export const StyledHeader = styled((props) => <SectionBigHeading {...props} />)`
  margin-top: 100px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  @media (max-width: 1024px) {
    margin: 0px;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0px;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  height: 100%;
  margin-left: 70px;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  color: black;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 25.03rem;
  width: 100%;
  height: 100%;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
  }
`;

export const StyledPage = styled.div``;
