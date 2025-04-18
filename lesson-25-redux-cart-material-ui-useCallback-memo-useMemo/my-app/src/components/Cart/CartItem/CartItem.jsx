import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Divider from "@mui/material/Divider";

import styles from "./styles";

const CartItem = ({
  id,
  image,
  name,
  price,
  count,
  onIncreaseCart,
  onDecreaseCart,
}) => {
  return (
    <>
      <Box sx={styles.box}>
        <img src={image} className="img-fluid" />
        <Box>
          <Box sx={styles.linkWrapper}>
            <Link to={`/products/${id}`} style={styles.link}>
              <Typography variant="body2">{name}</Typography>
            </Link>
            <IconButton>
              <RemoveShoppingCartOutlinedIcon />
            </IconButton>
          </Box>

          <Box sx={styles.actions}>
            <Box sx={styles.actionButtons}>
              <IconButton onClick={() => onDecreaseCart(id)}>
                <RemoveOutlinedIcon />
              </IconButton>
              <Typography variant="body" sx={styles.count}>
                {count}
              </Typography>
              <IconButton onClick={() => onIncreaseCart(id)}>
                <AddOutlinedIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle2" sx={styles.totalPrice}>
              {price * count}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

export default CartItem;
