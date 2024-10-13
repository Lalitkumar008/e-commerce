import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    findUserInfo: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
