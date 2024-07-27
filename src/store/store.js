// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import stepsReducer from './Duck/stepSlice';

const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});

export default store;
