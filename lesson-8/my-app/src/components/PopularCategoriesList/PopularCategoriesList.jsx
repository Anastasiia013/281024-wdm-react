import { MoreIcon } from "../../assets/icons/categories";

import styles from "./PopularCategoriesList.module.css";

import items from "./items";

const PopularCategoriesList = () => {
  const elements = items.map((item) => (
    <li className={styles.item} key={item.name}>
      <a className={styles.link} href={item.href}>
        {item.icon}
        <p className={styles.item_text}>{item.name}</p>
      </a>
    </li>
  ));

  return (
  <ul className={styles.list}>
    {elements}
    <li className={`${styles.item} ${styles.more}`}>
      <a className={styles.link} href="/categories">
        <MoreIcon />
        <p className={`${styles.item_text} ${styles.more}`}>Больше категорий</p>
      </a>
    </li>
  </ul>);
};

export default PopularCategoriesList;
