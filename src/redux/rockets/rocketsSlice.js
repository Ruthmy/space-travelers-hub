import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle',
  error: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default rocketsSlice.reducer;
