import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

interface Login {
  isLoggedIn: boolean;
  userId: string;
}

const initialState: Login = {
  isLoggedIn: false,
  userId: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        userId: string;
      }>
    ) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
