import { createSlice } from '@reduxjs/toolkit';
import { initialStateModal } from 'redux/initialState';

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStateModal,
  reducers: {
    toggleShowModal: state => {
      state.isOpen = !state.isOpen;
    },
    findCarModal: (state, { payload }) => {
      state.carModal = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModal, findCarModal } = modalSlice.actions;
