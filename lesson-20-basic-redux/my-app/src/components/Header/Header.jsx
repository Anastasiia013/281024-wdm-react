import { Link } from "react-router-dom";

import MainMenu from "./MainMenu/MainMenu";
import BuyCount from "./BuyCount/BuyCount";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <Link to="/">LOGO</Link>
            <MainMenu />
            <BuyCount />
        </header>
    )
}

export default Header;
