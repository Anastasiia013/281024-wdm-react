import Button from "../../Button/Button";

import styles from "./PostList.module.css";

const PostList = ({ items = [] }) => {
  const elements = items.map(({id, title, text}) => (
    <li key={id} className={styles.item}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>
          {text}
        </p>
      </div>
      <div className={styles.info}>
        <p className={styles.id}>id поста: {id}</p>
        <Button type="button">Удалить</Button>
      </div>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default PostList;
