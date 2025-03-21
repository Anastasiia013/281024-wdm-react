import useTheme from "../../hooks/useTheme";

import styles from "./Button.module.css";

const Button = ({children}) => {
    const {theme} = useTheme();

    return <button className={`${styles.btn} ${styles[theme]}`}>{children}</button>
}

export default Button;