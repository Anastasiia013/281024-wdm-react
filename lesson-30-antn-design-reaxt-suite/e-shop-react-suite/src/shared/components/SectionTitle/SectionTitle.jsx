/** @jsxImportSource @emotion/react */
import { Heading, Divider } from "rsuite";

import { sectionTitleWrapperStyle } from "./styles";

const SectionTitle = ({ title }) => {
  return (
    <div css={sectionTitleWrapperStyle}>
      <Heading level={2}>{title}</Heading>
      <Divider style={{backgroundColor: "#EAEAEA"}} />
    </div>
  );
};

export default SectionTitle;
