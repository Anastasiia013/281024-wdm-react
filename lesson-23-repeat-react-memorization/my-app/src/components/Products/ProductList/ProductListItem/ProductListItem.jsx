import styles from "./ProductListItem.module.css";

const ProductListItem = ({ onAddProductToCart, ...product }) => {
  const {image, name, price} = product;
  
  return (
    <li>
      <img src={image} className="img-fluid" />
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price} $</p>
        <span onClick={()=> onAddProductToCart(product)} className={styles.toCart}>To cart</span>
      </div>
    </li>
  );
};

export default ProductListItem;
