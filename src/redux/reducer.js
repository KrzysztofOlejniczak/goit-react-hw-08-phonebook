import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const loadFromLocalStorage = () => {
  try {
    const dataFromLocal = localStorage.getItem('phonebook');
    const parsedDataFromLocal = JSON.parse(dataFromLocal);
    if (parsedDataFromLocal !== null) {
      return parsedDataFromLocal;
    }
    return [];
  } catch (error) {
    return [];
  }
};

const contactsInitialState = loadFromLocalStorage();

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
