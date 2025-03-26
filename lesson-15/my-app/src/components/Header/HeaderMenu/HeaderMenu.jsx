import headerMenuItems from "./headerMenuItems";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  const elements = headerMenuItems.map(({ href, text }) => (
    <a key={text} href={href} className={styles.link}>
      {text}
    </a>
  ));
  
  return <nav>{elements}</nav>;
};

export default HeaderMenu;
