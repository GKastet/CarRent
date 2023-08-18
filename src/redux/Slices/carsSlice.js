import { createSlice } from '@reduxjs/toolkit';
import { getCarsCatalogThunk, getCarsPerPageThunk } from 'redux/Thunks/Thunks';
import { initialState } from 'redux/initialState';

const fulfilledGetCarsCatalog = (state, { payload }) => {
  state.cars = payload;
};

const fulfilledGetCarsPerPage = (state, { payload }) => {  
  state.carsPerPage = [...state.carsPerPage, ...payload];
}

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    searchCars: (state, {payload}) =>{
      state.filter = payload
    }

  },
  extraReducers: builder => {
    builder
    .addCase(getCarsCatalogThunk.fulfilled, fulfilledGetCarsCatalog)
    .addCase(getCarsPerPageThunk.fulfilled, fulfilledGetCarsPerPage)
  },
});

export const carsReducer = carsSlice.reducer;
export const {searchCars} = carsSlice.actions;
