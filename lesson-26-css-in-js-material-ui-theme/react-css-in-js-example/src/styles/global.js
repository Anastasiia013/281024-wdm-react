import { css } from "@emotion/react";

import resetStyles from "./reset";

const globalStyles = css`
    ${resetStyles}
    
    .container {
        max-width: 1240px;
        margin: 0 auto;
    }
`;

export default globalStyles;