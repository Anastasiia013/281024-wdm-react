import { NavLink } from "react-router-dom";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ()=> {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink to="/" className={styles.link}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/products" className={styles.link}>Products</NavLink>
            </li>
            <li>
                <NavLink to="/cart" className={styles.link}>Cart</NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu;