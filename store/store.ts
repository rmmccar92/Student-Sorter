import { configureStore } from "@reduxjs/toolkit";
import { iconSlice } from "../slices/slice";

export const store = configureStore({
  reducer: {
    // add reducers here
    icon: iconSlice.reducer,
  },
});
export const { iconMoon, iconSun } = iconSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
