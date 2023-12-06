import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { reducer as  favoritesReducer } from "./favorites/favorites";
import { api } from "../api/api";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';


const logger = createLogger({
    //collapsed:true
})
const reducers = combineReducers({
    favorites:favoritesReducer,
    [api.reducerPath]:api.reducer,
})
export const store = configureStore({
   reducer:reducers,
   middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware().concat(api.middleware).concat(logger)
})
