import { Link } from "react-router-dom";

import MainMenu from "./MainMenu/MainMenu";
import NotesInfo from "./NotesInfo/NotesInfo";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <Link to="/">LOGO</Link>
            <MainMenu />
            <NotesInfo />
        </header>
    )
}

export default Header;
