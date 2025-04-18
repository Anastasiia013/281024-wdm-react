import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { Typography, Paper } from '@mui/material';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import CartItem from "./CartItem/CartItem";

import {
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  clearCart,
} from "../../redux/cart/cart-actions";

import { selectCart } from "../../redux/cart/cart-selectors";

const Cart = () => {
  const items = useSelector(selectCart);
  const dispatch = useDispatch();

  const onClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const onIncreaseCart = useCallback(
    (id) => {
      dispatch(increaseCountInCart(id));
    },
    [dispatch]
  );

  const onDecreaseCart = useCallback(
    (id) => {
      dispatch(decreaseCountInCart(id));
    },
    [dispatch]
  );

  const onDeleteFromCart = useCallback(
    (id) => {
      dispatch(deleteFromCart(id));
    },
    [dispatch]
  );

  const elements = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onIncreaseCart={onIncreaseCart}
      onDecreaseCart={onDecreaseCart}
      onDeleteFromCart={onDeleteFromCart}
    />
  ));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Cart
        </Typography>
        <Button onClick={onClearCart} variant="text">
          Clear cart
        </Button>
      </Box>

      <Paper sx={{ padding: "15px" }}>{elements}</Paper>
    </Box>
  );
};

export default Cart;
