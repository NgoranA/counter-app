import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // immer library is used here under the hood. making a copy of the previous state and updating it in the required manner while keeping track of the previous states
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    asyncMultiply(state, action: PayloadAction<number>) {
      state.value *= action.payload;
    },
  },
});

export const { increment, decrement, asyncMultiply } = counterSlice.actions;
export default counterSlice.reducer;
