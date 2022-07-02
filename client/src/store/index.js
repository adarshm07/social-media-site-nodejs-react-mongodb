import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    details: {
      username: "",
    },
    isAdmin: false,
  },
  reducers: {
    userDetails(state, action) {
      state.user = action.payload;
      // console.log(action.payload);
    },
  },
});

const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
};

export const { increment, decrement } = counterSlice.actions;
export const { userDetails } = userSlice.actions;

const store = configureStore({ reducer });

export default store;
