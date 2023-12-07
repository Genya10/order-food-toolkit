import { IRecipe } from './../../types/recipe-types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState:IRecipe[] =[]

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }:PayloadAction<IRecipe>) => {
      const isExists = state.some((r:IRecipe) => r.id === recipe.id);
      if (isExists) {
         const index = state.findIndex((item:any) => item.id === recipe.id)
      if(index !== -1){
        state.splice(index,1)
      }
      }
      else {
        state.push(recipe);
      }
    },
  },
});

export const {actions,reducer} = favoritesSlice;
