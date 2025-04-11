import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import notesReducer from "./notes/notes-reducer";
import authenticateReducer from "./autenticate/autenticate-reducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  isAuthenticate: authenticateReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["notes"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;