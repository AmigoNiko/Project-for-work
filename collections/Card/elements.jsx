// Styled elements for the Card go here
import styled from "styled-components";

export const StyledTitle = styled((props) => <h2 {...props} />)`
  color: black;
  margin-bottom: 5px;
`;

export const StyledCard = styled((props) => <div {...props} />)`
  margin-top: 30px;
  background-color: #f4f4f4;
  width: ${({ order }) => `calc(50% + ${order * 20}px)`}; 
  max-width: 100%; /* Ensures the card doesn't exceed its container */
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 10px; /* Add rounded corners */
  transition: border-color 0.3s ease;
  width: ${({ order }) => `calc(50% + ${order * 50}px)`}; 
  &:hover {
    border-color: #007cff; /* Change border color on hover */
  }

  &:hover ${StyledTitle} {
    color: #007cff;
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    width: ${({ order }) => `calc(70% + ${order * 50}px)`}; 

  }
`;

export const StyledIcon = styled((props) => <div {...props} />)`
  padding: 30px;
`;

export const StyledDescription = styled((props) => <p {...props} />)`
  margin-top: 0px;
  font-size: 22px;
  color: black;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const StyledCardContent = styled((props) => <div {...props}/>)`
   @media (max-width: 1024px) {
    font-size:14px;
    line-height:22px;
    padding-right:10px
  }
`;
