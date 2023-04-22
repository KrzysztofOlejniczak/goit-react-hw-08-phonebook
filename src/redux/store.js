import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
