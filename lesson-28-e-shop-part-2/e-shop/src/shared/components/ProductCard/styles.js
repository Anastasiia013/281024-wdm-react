import { css } from "@emotion/react";

import { imgResponsiveStyle } from "../../styles/mixins";

export const productCardWrapperStyle = css`
    max-width: 386px;
    padding: 45px 42px;
    border: 2px solid #00000026;
    border-radius: 42px;
`;

export const productCardImageWrapperStyle = css`
    text-align: center;
    margin-bottom: 32px;
`;

export const productCardImageStyle = css`
    ${imgResponsiveStyle}
    max-width: 278px;
`
