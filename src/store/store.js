import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { reducer as  favoritesReducer } from "./favorites/favorites";

const reducers = combineReducers({
    favorites:favoritesReducer
})
export const store = configureStore({
   reducer:reducers
})
