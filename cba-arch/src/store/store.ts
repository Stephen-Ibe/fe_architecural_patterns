import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./slices";

export const makeStore = () =>
  configureStore({
    reducer: { auth: AuthReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
