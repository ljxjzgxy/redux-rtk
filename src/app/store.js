import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/userSlice";
import { apiSlice } from "../service/api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
