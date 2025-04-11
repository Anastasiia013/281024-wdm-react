import { NavLink } from "react-router-dom";

import styles from "./AuthHeader.module.css";

const AuthHeader = ()=> {
    return (
        <div className={styles.wrapper}>
            <NavLink className={styles.link} to="/login">Login</NavLink>
            <NavLink className={styles.link} to="/register">Register</NavLink>
        </div>
    )
}

export default AuthHeader;