import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../features/redux/textSlice';

export const store = configureStore({
  reducer: {
    text: textReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
