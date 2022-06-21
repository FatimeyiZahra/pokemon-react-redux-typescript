import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pokemonReducer from "../reducers/pokemonReducer";

export const rootReducer = combineReducers({
  pokemonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
