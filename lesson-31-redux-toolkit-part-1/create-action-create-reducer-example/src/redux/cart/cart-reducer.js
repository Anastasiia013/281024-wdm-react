import { createReducer } from "@reduxjs/toolkit";

import {
  addToCart,
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  clearCart,
} from "./cart-actions";

const cartReducer = createReducer([], (builder) => {
  builder
    .addCase(addToCart, (store, { payload }) => {
      const product = store.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
      } else {
        store.push({ ...payload, count: 1 });
      }
    })
    .addCase(increaseCountInCart, (store, { payload }) => {
      const product = store.find((item) => item.id === payload);
      product.count += 1;
    })
    .addCase(decreaseCountInCart, (store, { payload }) => {
      const index = store.findIndex((item) => item.id === payload);
      store[index].count -= 1;
      if (!store[index].count) {
        store.splice(index, 1);
      }
    })
    .addCase(deleteFromCart, (store, { payload }) =>
      store.filter((item) => item.id !== payload)
    )
    .addCase(clearCart, () => [])
});

/*
const cartReducer = (store = [], { type, payload }) => {
    const newStore = store.map((item) => ({ ...item }));
  switch (type) {
    case addToCart.type:
      const product = newStore.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
        return newStore;
      }
      return [...newStore, { ...payload, count: 1 }];

    case increaseCountInCart.type:
      const updateProduct = newStore.find((item) => item.id === payload);
      updateProduct.count += 1;
      return newStore;

    case decreaseCountInCart.type:
      const descreaseProduct = newStore.find(
        (item) => item.id === payload
      );
      descreaseProduct.count -= 1;
      if (!descreaseProduct.count) {
        return newStore.filter((item) => item.id !== payload);
      }
      return newStore;

    case deleteFromCart.type:
        return newStore.filter((item) => item.id !== payload);

    case clearCart.type:
        return [];
        
    default:
      return store;
  }
};
*/

export default cartReducer;
