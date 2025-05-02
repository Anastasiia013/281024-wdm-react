import { NavLink } from "react-router-dom";

import headerMenuItems from "./headerMenuItems";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ()=> {
    const elements = headerMenuItems.map(item => (
        <li key={item.text}>
            <NavLink to={item.to} className={styles.link}>{item.text}</NavLink>
        </li>
    ));

    return <ul className={styles.menu}>{elements}</ul>
}

export default HeaderMenu;