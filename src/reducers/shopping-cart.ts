import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import ShoppingCartItemProps from "../components/models/shopping-cart-item-props";

interface ShoppingCartState {
  items: ShoppingCartItemProps[]
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
    addToCart: (state, action: PayloadAction<ShoppingCartItemProps>) => {
      const index = findIndexByID(action.payload, state.items);

      if (index === -1){
        state.items.push(action.payload);
      } else {
        state.items[index].count++;
      }
    },
    removeFromCart: (state, action: PayloadAction<ShoppingCartItemProps>) => {
      const index = findIndexByID(action.payload, state.items);
      state.items[index].count--;
      if (state.items[index].count === 0) {
        state.items.splice(index, 1);
      }
    },
    removeAll: (state, action: PayloadAction<ShoppingCartItemProps>) => {
      const index = findIndexByID(action.payload, state.items);
      state.items.splice(index, 1);
    }
  }
});

export const {addToCart, removeFromCart, removeAll} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer