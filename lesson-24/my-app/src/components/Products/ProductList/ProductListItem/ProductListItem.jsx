import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import styles from "./ProductListItem.module.css";

const ProductListItem = ({ onAddProductToCart, ...product }) => {
  const { image, name, price } = product;

  return (
    <li>
      <Card sx={{ padding: "10px" }}>
        <CardMedia
          sx={{ height: 180 }}
          component="img"
          image={image}
          title={name}
          alt={name}
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
        <CardActions>
          <Typography variant="h6">{price} $</Typography>
          <IconButton onClick={()=> onAddProductToCart(product)}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* <img src={image} className="img-fluid" />
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price} $</p>
        <span onClick={()=> onAddProductToCart(product)} className={styles.toCart}>To cart</span>
      </div> */}
    </li>
  );
};

export default ProductListItem;
