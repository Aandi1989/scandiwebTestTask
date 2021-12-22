import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import overalReducer from "./overal";
import productsReducer from "./porducts";
import cartReducer from "./cart";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  overalReducer,
  productsReducer,
  cartReducer 
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store)

window.store = store;

export default store;