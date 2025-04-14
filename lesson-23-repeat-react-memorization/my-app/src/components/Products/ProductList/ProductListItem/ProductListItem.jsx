import styles from "./ProductListItem.module.css";

const ProductListItem = ({image, name, price})=> {
    return (
        <li>
        <img src={image} />
        <p>{name}</p>
        <p>{price}</p>
    </li>
    )
}

export default ProductListItem;