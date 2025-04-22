import { css } from '@emotion/react';

// export const btnStyle = css`
// background-color: #fff;
// border: 1px solid;
// padding: 10px 15px;
// color: #000;
// cursor: pointer;

//   :hover {
//     color: #fff;
//     background-color: #000;
//   }
// `;

export const btnStyle = ({active = false, background, text}) => css`
background-color: ${active ? text : background};
border: 1px solid;
padding: 10px 15px;
color: ${active ? background : text};
cursor: pointer;

  :hover {
    color: ${background};
    background-color: ${text};
  }
`;

export const textStyle = css`
  font-size: 14px;
`;