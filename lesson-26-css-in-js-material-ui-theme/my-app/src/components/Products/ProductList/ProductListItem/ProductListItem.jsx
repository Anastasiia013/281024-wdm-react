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
          <Typography variant="h6" color="info">{name}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent: "space-between"}}>
          <Typography variant="h6">{price} $</Typography>
          <IconButton onClick={()=> onAddProductToCart(product)}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductListItem;
