import useTheme from "../../../hooks/useTheme";

import styles from "./MenuItem.module.css";

const MenuItem = ({ text, href }) => {
  const {theme} = useTheme();
  
  return (
    <li className={`${styles.item} ${styles[theme]}`}>
      <a className={`${styles.link} ${styles[theme]}`} href={href}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
