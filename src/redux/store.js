import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Slices/carsSlice';
import { rootReducer } from './Slices/rootSlice';
import { modalReducer } from './Slices/modalSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        root: rootReducer,
        modal: modalReducer,
    }
});
export default store;
