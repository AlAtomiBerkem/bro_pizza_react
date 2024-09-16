import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categori: 0,
  sort: {
    name: 'популярности',
    sort: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categori = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    }
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
