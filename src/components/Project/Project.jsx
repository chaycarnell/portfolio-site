import React from "react";
import { ContentCard, Text, RichText, Chip } from "../index";
import * as S from "./Project.styles";

// Set some rich text options
const textOptions = {
  pSize: "14px",
  bSize: "14px",
};

const Render = ({ project = {} }) => {
  const {
    title,
    summary,
    projectImage = [],
    references = [],
    technologies = [],
  } = project.fields;

  return (
    <ContentCard margin={"8px"} padding={"8px"} border center>
      <Text type="header" size="24px" center>
        {title}
      </Text>
      <S.DesktopCarousel>
        {projectImage.map((image) => (
          <img key={image.sys.id} src={image.fields.file.url} />
        ))}
      </S.DesktopCarousel>
      <RichText document={summary} textOptions={textOptions}></RichText>
      <Text type="bold" size={textOptions.bSize}>
        Technologies
      </Text>
      <S.ChipWrapper>
        {technologies.map((technology) => (
          <Chip key={technology}>{technology}</Chip>
        ))}
      </S.ChipWrapper>
      {!!references.length && (
        <>
          <br />
          <Text type="bold" size={textOptions.bSize}>
            References
          </Text>
          <S.ReferenceWrapper>
            {references.map((reference) => (
              <Text
                key={reference.title}
                type="link"
                onClick={() => window.open(reference.link, "_blank")}
              >
                {reference.title}
              </Text>
            ))}
          </S.ReferenceWrapper>
        </>
      )}
    </ContentCard>
  );
};

export default Render;
