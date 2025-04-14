

import ProductListItem from "./ProductListItem/ProductListItem";

import styles from "./ProductList.module.css";

const ProductList = ({ items = [] }) => {

  const onAddProductToCart = ()=> {

  }

  const elements = items.map((item) => (
    <ProductListItem onAddProductToCart={onAddProductToCart} key={item.id} {...item} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ProductList;
