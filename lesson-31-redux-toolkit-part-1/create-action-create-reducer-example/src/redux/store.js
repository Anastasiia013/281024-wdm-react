// import { legacy_createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import rootReducer from "./rootReducer";
// import cartReducer from "./cart/cart-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer: {
  //     cartReducer
  // }
});

// export const store = legacy_createStore(rootReducer, devToolsEnhancer());

export const persistor = persistStore(store);
