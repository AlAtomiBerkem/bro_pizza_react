import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './slises/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

console.log(counterSlice);
