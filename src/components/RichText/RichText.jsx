import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import React from "react";

import Text from "../Text/Text";

const Render = ({ document, textOptions = {} }) => {
  // Rich text render options
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Text type="bold" size={textOptions.bSize} color={textOptions.bColor}>
          {text}
        </Text>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, text) => (
        <Text
          type="regular"
          size={textOptions.pSize}
          color={textOptions.pColor}
        >
          {text}
        </Text>
      ),
    },
  };
  return documentToReactComponents(document, options);
};

export default Render;
