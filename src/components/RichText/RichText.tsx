import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types';

import Text from '../Text/Text';

const Render = ({
  document,
  textOptions,
}: {
  document: Document | undefined;
  textOptions: {
    pSize: string;
    pColor?: string;
    bSize: string;
    bColor?: string;
  };
}) => {
  if (!document) return <></>;
  // Rich text render options
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Text type="bold" size={textOptions.bSize} color={textOptions.bColor}>
          {text}
        </Text>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (__, text) => (
        <Text
          type="regular"
          size={textOptions.pSize}
          color={textOptions.pColor}>
          {text}
        </Text>
      ),
    },
  };
  return documentToReactComponents(document, options);
};

export default Render;
