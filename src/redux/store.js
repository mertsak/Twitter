import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./PostsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
