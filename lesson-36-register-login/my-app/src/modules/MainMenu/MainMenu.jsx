import { NavLink } from "react-router-dom";

import styles from "./MainMenu.module.css";

const MainMenu = ()=> {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink to="/" className={styles.link}>Home page</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={styles.link}>Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={styles.link}>Register</NavLink>
            </li>
            <li>
                <NavLink to="/profile" className={styles.link}>Profile</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu;