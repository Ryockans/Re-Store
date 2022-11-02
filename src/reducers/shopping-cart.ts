import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import ShoppingCartItem from "../components/models/shopping-cart-item";

interface ShoppingCartState {
  items: ShoppingCartItem[]
}

const initialState: ShoppingCartState = {
  items: []
}

const findIndexByID = (item, array) => {
  const id = item.id;
  const idArray = array.map((item) => item.id);

  return  idArray.indexOf(id)
}

export const shoppingCartSlice = createSlice({
  name: 'updateCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShoppingCartItem>) => {
      const index = findIndexByID(action.payload, state.items);

      if (index === -1){
        state.items.push(action.payload);
      } else {
        state.items[index].count++;
      }
    },
    removeFromCart: (state, action: PayloadAction<ShoppingCartItem>) => {
      const index = findIndexByID(action.payload, state.items);
      state.items[index].count--;
      if (state.items[index].count === 0) {
        state.items.splice(index, 1);
      }
    },
    removeAll: (state, action: PayloadAction<ShoppingCartItem>) => {
      const index = findIndexByID(action.payload, state.items);
      state.items.splice(index, 1);
    }
  }
});

export const {addToCart, removeFromCart, removeAll} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer