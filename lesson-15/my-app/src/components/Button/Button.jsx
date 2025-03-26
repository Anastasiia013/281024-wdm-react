import styles from "./Button.module.css";

const Button = ({type ="submit", onClick, children})=> {
    return <button className={styles.btn} onClick={onClick} type={type}>{children}</button>
}

export default Button;