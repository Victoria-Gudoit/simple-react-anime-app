import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as animeReducer } from "./slice";

const rootReducer = combineReducers({
  anime: animeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
