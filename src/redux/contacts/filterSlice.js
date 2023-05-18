const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    fetchFilter(state, action) {
      return action.payload;
    },
  },
});

export const { fetchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
