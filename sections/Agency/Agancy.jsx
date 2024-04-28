import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  StyledImageContainer,
  StyledHeader,
  StyledPage,
  StyledCardsContainer
} from "./elements";
import { Card } from "../../collections/Card";
import { NotebookPen, Podcast, SearchCheck } from "lucide-react";

export const Agency = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledPage>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{description}</StyledSubTitle>
      </StyledHeader>
      <StyledContainer {...props}>
        {" "}
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledTextContainer>
          <StyledCardsContainer>
          <Card
            title={"Brief"}
            description={
              "Complete brief writing or simple guidance on what to include, we've got you covered."
            }
            boldedSentence={"brief writing or simple guidance"}
            icon={NotebookPen}
            index={1}
          />
          <Card
            title={"Search "}
            description={
              "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting."
            }
            boldedSentence={"criteria matching"}
            icon={SearchCheck}
            index={2}
          />
          <Card
            title={"Pitch "}
            description={
              "Comprehensive pitch management, including comms, diary management and pitch hosting."
            }
            boldedSentence={"pitch management"}
            icon={Podcast}
            index={3}
          />
          </StyledCardsContainer>
        </StyledTextContainer>
      </StyledContainer>
    </StyledPage>
  );
};
