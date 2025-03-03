import styles from "./Button.module.scss";

const Button = ({variant = "contained", children}) => {
    // const variantClassName = variant === "contained" ? styles.contained : styles.outlined;
    
    // return <button className={`${styles.btn} ${variantClassName}`}>{children}</button>
    return <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
}

export default Button;