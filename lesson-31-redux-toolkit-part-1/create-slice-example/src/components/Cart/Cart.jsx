import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import CartHeader from "./CartHeader/CartHeader";
import CartItem from "./CartItem/CartItem";
import CartCheckout from "./CartCheckout/CartCheckout";

import {
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  clearCart,
} from "../../redux/cart/cart-slice";

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
     <CartHeader onClearCart={onClearCart} />
      <Paper sx={{ padding: "15px", marginBottom: "25px" }}>{elements}</Paper>
     <CartCheckout totalPrice={totalPrice} />
    </Box>
  );
};

export default Cart;
