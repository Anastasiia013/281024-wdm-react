import {LogoIcon} from "../../../assets/icons";

import styles from "./HeaderLogo.module.css";

const HeaderLogo = ()=> {
    return (
        <a href="/" className={styles.link}>
            {/* <img src="/images/logo.svg" alt="" /> */}
            <LogoIcon />
        </a>
    )
}

export default HeaderLogo;