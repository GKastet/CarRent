import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Slices/carsSlice';
import { rootReducer } from './Slices/rootSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        root: rootReducer
    }
});
export default store;
