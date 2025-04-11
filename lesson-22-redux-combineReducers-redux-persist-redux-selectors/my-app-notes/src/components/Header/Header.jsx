import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import useAuthenticate from "../../hooks/useAuthenticate";

import MainMenu from "./MainMenu/MainMenu";
import AuthHeader from "./AuthHeader/AuthHeader";
import NotesInfo from "./NotesInfo/NotesInfo";

import { selectIsAuthenticate } from "../../redux/autenticate/autenticate-selectors";

import styles from "./Header.module.css";

const Header = ()=> {
    const isAuthenticate = useSelector(selectIsAuthenticate);
    // const isAuthenticate = useAuthenticate();

    return (
        <header className={styles.header}>
            <Link to="/">LOGO</Link>
            <MainMenu isAuthenticate={isAuthenticate} />
            {isAuthenticate ? <NotesInfo /> : <AuthHeader />}
        </header>
    )
}

export default Header;
