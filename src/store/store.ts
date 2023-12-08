import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { reducer as  favoritesReducer } from "./favorites/favorites";
import { api } from "../api/api";
//import { createLogger } from 'redux-logger';

/*const logger = createLogger({
})*/
const reducers = combineReducers({
    favorites:favoritesReducer,
    [api.reducerPath]:api.reducer,
})
export const store = configureStore({
   reducer:reducers,
   middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware().concat(api.middleware) //.concat(logger)
})

export type RootState = ReturnType<typeof store.getState>