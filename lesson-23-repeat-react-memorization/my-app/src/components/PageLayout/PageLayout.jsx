import styles from "./PageLayout.module.css";

const PageLayout = ({children, title}) => {
  return (
    <main>
      <div className="container">
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
