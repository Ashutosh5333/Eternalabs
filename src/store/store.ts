
import { configureStore } from "@reduxjs/toolkit";
import tokensReducer from "@/modules/tokens/store/tokens.slice";

export const store = configureStore({
  reducer: { tokens: tokensReducer },
  middleware: g => g({ serializableCheck: false }),
  devTools: true
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
