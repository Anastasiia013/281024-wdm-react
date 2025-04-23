/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
    width: 100%;
    padding: 0 15px;

    @media(min-width: 600px) {
        max-width: 540px;
    }

    @media(min-width: 900px) {
        max-width: 840px;
    }

    @media(min-width: 1200px) {
        max-width: 1200px;
    }

    @media(min-width: 1536px) {
        max-width: 1420px;
    }
`;

const Container = ({children})=> {
    return <div css={containerStyle}>{children}</div>
}

export default Container;