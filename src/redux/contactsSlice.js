import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
