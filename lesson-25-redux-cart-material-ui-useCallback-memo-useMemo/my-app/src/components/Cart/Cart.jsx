import { useCallback } from "react";
import { Link } from "react-router-dom";
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

import {
  selectCart,
  selectTotalCartPrice,
} from "../../redux/cart/cart-selectors";

const Cart = () => {
  const items = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalCartPrice);

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

      <Paper sx={{ padding: "15px", marginBottom: "25px" }}>{elements}</Paper>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
        <Typography variant="h5">Total price: {totalPrice}</Typography>
        <Link to="/checkout">
          <Button variant="contained" color="success">
            To checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Cart;
