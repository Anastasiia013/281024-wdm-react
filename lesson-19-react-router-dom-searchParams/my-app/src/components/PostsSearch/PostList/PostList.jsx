import styles from "./PostList.module.css";

const PostList = ({items = []})=> {
    const elements = items.map(({id, title})=> <li key={id} className={styles.item}>{title}</li>);
    
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default PostList;