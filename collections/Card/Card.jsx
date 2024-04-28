// The Card to be exported goes here
import React from "react";

import {
  StyledCard,
  StyledIcon,
  StyledTitle,
  StyledDescription,
  StyledCardContent
} from "./elements";
export const Card = ({title, description, boldedSentence, icon: Icon, index  }) => {

  const formattedDescription = description.replace(
    new RegExp(boldedSentence, "gi"),
    `<strong>${boldedSentence}</strong>`
  );

  const order = index + 1; // Adding 1 to start from 1 instead of 0

  return (
    <StyledCard order={order} className="card">
      <StyledIcon>
      {Icon && <Icon color="black" size="57px" />}
      </StyledIcon>
      <StyledCardContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription dangerouslySetInnerHTML={{ __html: formattedDescription }} />
      </StyledCardContent>
    </StyledCard>
  );
};
