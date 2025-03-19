import { useContext } from "react";

import { themeContext } from "../../../context/ThemeProvider";

import styles from "./MenuItem.module.css";

const MenuItem = ({ text, href }) => {
  const {theme} = useContext(themeContext);
  
  return (
    <li className={`${styles.item} ${styles[theme]}`}>
      <a className={`${styles.link} ${styles[theme]}`} href={href}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
