import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Divider from "@mui/material/Divider";

import styles from "./styles";

const CartItem = ({ id, image, name, price, count }) => {
  return (
    <>
      <Box sx={styles.box}>
        <img src={image} className="img-fluid" />
        <Box>
          <Link to={`/products/${id}`} style={styles.link}>
            <Typography variant="body2">{name}</Typography>
          </Link>
          <Box sx={styles.actions}>
            <Box sx={styles.actionButtons}>
              <IconButton>
                <RemoveOutlinedIcon />
              </IconButton>
              <Typography variant="body" sx={styles.count}>{count}</Typography>
              <IconButton>
                <AddOutlinedIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle2">{price * count}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

export default CartItem;
