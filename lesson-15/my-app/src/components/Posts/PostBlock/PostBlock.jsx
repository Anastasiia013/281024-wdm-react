import styles from "./PostBlock.module.css";

const PostBlock = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
}

export default PostBlock;