import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

interface IncrementeState {
  value: number;
}

const initialState: CounterState = {
  counter: 5,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },

    incrementByNumber(state, action: PayloadAction<IncrementeState>) {
      state.counter += action.payload.value;
    },

    decrement(state) {
      state.counter -= 1;
    },

    resetInitialState(state) {
      state.counter = initialState.counter;
    },
  },
});

export const { increment, incrementByNumber, decrement, resetInitialState } =
  counterSlice.actions;
