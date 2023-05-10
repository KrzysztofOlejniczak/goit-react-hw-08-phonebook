import { addContact } from './operation';

const { createSlice } = require('@reduxjs/toolkit');

const modalInitialState = false;

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal(state) {
      return true;
    },
    closeModal(state) {
      return false;
    },
  },
  extraReducers: builder => {
    builder.addCase(addContact.fulfilled, _ => {
      return false;
    });
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
