import { useCallback } from "react";
import { useDispatch } from "react-redux";

import ProductListItem from "./ProductListItem/ProductListItem";

import {addToCart} from "../../../redux/cart/cart-actions";

import styles from "./ProductList.module.css";

const ProductList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onAddProductToCart = useCallback(payload => {
    dispatch(addToCart(payload));
  }, [dispatch]);

  const elements = items.map((item) => (
    <ProductListItem onAddProductToCart={onAddProductToCart} key={item.id} {...item} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ProductList;
