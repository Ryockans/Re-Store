import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, cartReducer, bookListReducer} from "./reducers";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    bookList: bookListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store