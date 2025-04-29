// import {
//   ADD_TO_CART,
//   INSREASE_COUNT_IN_CART,
//   DESREASE_COUNT_IN_CART,
//   DELETE_FROM_CART,
//   CLEAR_CART,
// } from "./cart-types";
import {createAction} from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");

export const increaseCountInCart = createAction("cart/increase");

export const decreaseCountInCart = createAction("cart/descrease");

export const deleteFromCart = createAction("cart/delete");

export const clearCart = createAction("cart/clear");

/*
createAction = type => {
  const func = payload => ({
    type,
    payload,
  });
  func.type = type;
  func.toString = function() {
    return type;
  }

  return func;
}
*/

// export const addToCart = (payload) => ({
//   type: ADD_TO_CART,
//   payload,
// });

// export const increaseCountInCart = (payload) => ({
//   type: INSREASE_COUNT_IN_CART,
//   payload,
// });

// export const decreaseCountInCart = (payload) => ({
//   type: DESREASE_COUNT_IN_CART,
//   payload,
// });

// export const deleteFromCart = (payload) => ({
//   type: DELETE_FROM_CART,
//   payload,
// });

// export const clearCart = ()=> ({
//     type: CLEAR_CART,
// });