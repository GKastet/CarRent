import { createSlice } from '@reduxjs/toolkit';
import { initialStateFavorite } from 'redux/initialState';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    findCarFavorite: (state, { payload }) => {
      // console.log(payload);
      state.favoriteCars.push(payload);
    },
    deleteCarFavorite: (state, { payload }) => {        
        state.favoriteCars = payload
    }
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { findCarFavorite, deleteCarFavorite } = favoriteSlice.actions;
