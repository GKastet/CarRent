import { createSlice } from '@reduxjs/toolkit';
import { getCarsCatalogThunk } from 'redux/Thunks/Thunks';
import { initialState } from 'redux/initialState';

const fulfilledGetCarsCatalog = (state, { payload }) => {
  state.cars = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCarsCatalogThunk.fulfilled, fulfilledGetCarsCatalog);
  },
});

export const carsReducer = carsSlice.reducer;
