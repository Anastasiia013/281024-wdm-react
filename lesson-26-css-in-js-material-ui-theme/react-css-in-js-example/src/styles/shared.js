import { css } from "@emotion/react";

export const flex = ({align = "baseline", content = "flex-start", wrap = "nowrap"})=> css`
    display: flex;
    align-items: ${align};
    justify-content: ${content};
    flex-wrap: ${wrap};
`;