// import styled from "@emotion/styled";

// const Button = styled.button`
//     background-color: #fff;
//     border: 1px solid;
//     padding: 10px 15px;
//     color: #000;
//     cursor: pointer;
// `;

// import styles from "./Button.module.css";

// const Button = ({type = "button", children})=> {
//     return (
//         <button className={styles.btn} type={type}>{children}</button>
//     )
// }
/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import { btnStyle } from "./styles";

const Button = ({type = "button", active, className, children})=> {
  const {colors} = useTheme();

    return <button css={btnStyle({active, ...colors})} className={className} type={type}>{children}</button>
}

export default Button;