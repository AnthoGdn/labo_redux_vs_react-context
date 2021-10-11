import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState,  } from '../../app/store';

export interface TextState {
  value: string;
}

const initialState: TextState = {
  value: 'My state',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { set } = textSlice.actions;

export const selectText = (state: RootState) => state.text.value;

export default textSlice.reducer;
