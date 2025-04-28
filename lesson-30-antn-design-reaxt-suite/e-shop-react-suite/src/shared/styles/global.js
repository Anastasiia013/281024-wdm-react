import { css } from "@emotion/react";

import fontsStyle from "./fonts";
// import resetStyles from "./reset";
import commonStyles from "./common";

const globalStyles = css`
    ${fontsStyle}
    ${commonStyles}
`;

export default globalStyles;