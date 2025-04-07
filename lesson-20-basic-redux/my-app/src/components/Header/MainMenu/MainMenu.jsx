import { NavLink } from "react-router-dom";

import mainMenuItems from "./mainMenuItems";

import styles from "./MainMenu.module.css";

const MainMenu = () => {
  const elements = mainMenuItems.map(({ id, href, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={href}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <ul className={styles.menu}>
      {elements}
    </ul>
  );
};

export default MainMenu;
