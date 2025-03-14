// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import testimonialsReducer from './slices/testimonialsSlice';

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});

export default store;
