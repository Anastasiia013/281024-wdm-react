import ProductListItem from "./ProductListItem/ProductListItem";

import styles from "./ProductList.module.css";

const ProductList = ({ items = [] }) => {
  const elements = items.map((item) => (
    <ProductListItem key={item.id} {...item} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ProductList;
