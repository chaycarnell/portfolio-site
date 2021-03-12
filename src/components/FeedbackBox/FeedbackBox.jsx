import React from "react";
import { RichText, Text } from "../../components";
import * as S from "./FeedbackBox.styles";

// Set some rich text options
const textOptions = {
  pSize: "14px",
  bSize: "14px",
};

const Render = ({ feedback = [] }) => (
  <S.FeedbackWrapper>
    {feedback.map((item) => (
      <S.FeedbackCard key={item.sys.id}>
        <RichText document={item.fields.feedback} textOptions={textOptions} />
        <Text type="bold" size={"14px"}>
          {item.fields.role}
        </Text>
      </S.FeedbackCard>
    ))}
  </S.FeedbackWrapper>
);

export default Render;
