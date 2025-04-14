import styles from "./ProductListItem.module.css";

const ProductListItem = ({ id, image, name, price, onAddProductToCart }) => {
  return (
    <li>
      <img src={image} className="img-fluid" />
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price} $</p>
        <span onClick={()=> onAddProductToCart(id)} className={styles.toCart}>To cart</span>
      </div>
    </li>
  );
};

export default ProductListItem;
