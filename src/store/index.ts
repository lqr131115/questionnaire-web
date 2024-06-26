import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./counter/user";
import qncReducer from "./counter/qnc";
import pageReducer from "./counter/page";

const store = configureStore({
  reducer: {
    user: userReducer,
    qnc: qncReducer,
    page: pageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
