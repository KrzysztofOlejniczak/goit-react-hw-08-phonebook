import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operation';
import { toast } from 'react-hot-toast';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error(state.error);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(updateContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success('Contact added');
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const indexToUpdate = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        if (indexToUpdate >= 0) {
          state.items[indexToUpdate] = action.payload;
        }
        toast.success('Contact updated');
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success('Contact deleted');
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
