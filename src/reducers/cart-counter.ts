import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  total: number
}

const initialState: CounterState = {
  value: 0,
  total: 0
}

type payloadForClean = {
  count: number,
  total: number
}

export const cartCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += 1;
      state.total += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= 1;
      state.total -= action.payload;
    },
    clean: (state, action: PayloadAction<payloadForClean>) => {
      state.value -= action.payload.count;
      state.total -= action.payload.total;
    }
  }
})

export const { increment, decrement, clean } = cartCounterSlice.actions

export default cartCounterSlice.reducer