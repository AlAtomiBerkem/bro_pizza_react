import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categori: 0,
  currentPage: 1,
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
    setCurentSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    }
  },
});

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
