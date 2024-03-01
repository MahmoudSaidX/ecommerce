import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import toggleCartSlice from "./slices/toggleCartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    toggleCart: toggleCartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
