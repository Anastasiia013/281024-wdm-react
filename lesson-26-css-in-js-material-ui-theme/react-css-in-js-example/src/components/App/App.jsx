/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Theme from "../../context/ThemeContext";

import Button from "../Button/Button";

import styles from "./App.module.css";

import { flex } from "../../styles/shared";

const wrapperStyle = css`
  padding: 15px;
  ${flex({ align: "center", content: "space-between" })}
`;

function App() {
  return (
    <Theme>
      <div css={wrapperStyle}>
        <Button active>Click me</Button>
        <Button className={styles.btnShow}>Show</Button>
      </div>
    </Theme>
  );
}

export default App;
