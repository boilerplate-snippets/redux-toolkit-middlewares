import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import { listernerMiddelware } from "../middlewares/listnerMiddleware";

export const store = configureStore({
  reducer: {
    userState: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listernerMiddelware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
