import { EntryCollection } from 'contentful';

import { TypeFeedback } from '../../types/contenful';
import { RichText, Text } from '..';
import * as S from './FeedbackBox.styles';

// Default rich text options
const textOptions = {
  pSize: '14px',
  bSize: '14px',
};

const Render = ({
  feedback,
}: {
  feedback: EntryCollection<TypeFeedback, undefined, string> | undefined;
}) => (
  <S.FeedbackWrapper>
    {feedback?.['items'].map(item => (
      <S.FeedbackCard key={item.sys.id}>
        <RichText document={item.fields.feedback} textOptions={textOptions} />
        <Text type="bold" size={'14px'}>
          {item.fields.role}
        </Text>
      </S.FeedbackCard>
    ))}
  </S.FeedbackWrapper>
);

export default Render;
