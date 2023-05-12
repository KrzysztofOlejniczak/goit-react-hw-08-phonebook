import { addContact, updateContact } from './operation';

const { createSlice } = require('@reduxjs/toolkit');

const modalInitialState = {
  isOpen: false,
  id: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModal(state, action) {
      state.isOpen = false;
      state.id = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, state => {
        state.isOpen = false;
      })
      .addCase(updateContact.fulfilled, state => {
        state.isOpen = false;
      });
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
