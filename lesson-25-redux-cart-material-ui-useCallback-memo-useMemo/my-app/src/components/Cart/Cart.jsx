import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
// import { Typography, Paper } from '@mui/material';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import CartItem from "./CartItem/CartItem";

import {
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
} from "../../redux/cart/cart-actions";

import { selectCart } from "../../redux/cart/cart-selectors";

const Cart = () => {
  const items = useSelector(selectCart);
  const dispatch = useDispatch();

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
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>
      <Paper sx={{ padding: "15px" }}>{elements}</Paper>
    </Box>
  );
};

export default Cart;
