import HeaderLogo from "./HeaderLogo/HeaderLogo";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <HeaderLogo />
                </div>
            </div>
        </header>
    )
}

export default Header;