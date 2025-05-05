import styles from "./PageLayout.module.css";

const PageLayout = ({title, children})=> {
    return (
        <main className={styles.main}>
            <div className="container">
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </main>
    )
}

export default PageLayout;