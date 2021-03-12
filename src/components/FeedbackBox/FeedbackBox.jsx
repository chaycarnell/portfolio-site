import React from "react";
import { RichText, Text } from "../../components";
import * as S from "./FeedbackBox.styles";

const Render = ({ feedback = [] }) => (
  <S.FeedbackWrapper>
    {feedback.map((item) => (
      <S.FeedbackCard key={item.sys.id}>
        <RichText document={item.fields.feedback} />
        <Text type="bold">{item.fields.role}</Text>
      </S.FeedbackCard>
    ))}
  </S.FeedbackWrapper>
);

export default Render;
