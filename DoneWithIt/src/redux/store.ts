import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';  // Import the todo slice

// Configure the store with the todo slice
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
