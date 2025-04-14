import styles from "./ProductListItem.module.css";

const ProductListItem = ({ image, name, price }) => {
  return (
    <li>
      <img src={image} className="img-fluid" />
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price} $</p>
        <span className={styles.toCart}>To cart</span>
      </div>
    </li>
  );
};

export default ProductListItem;
