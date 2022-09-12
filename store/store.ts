import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import themeReducer from "../features/counter/theme-slice";
import { nameApiFromNextApi } from "../features/counter/getname-slice";
/**
 * Authomatically adds thunk middleware
 * authomaticall enables redux dev tools
 * authomatically turns on dev checks to detect errors
 * authomatically includes combine reducers
 * export types
 */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    [nameApiFromNextApi.reducerPath]: nameApiFromNextApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(nameApiFromNextApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
