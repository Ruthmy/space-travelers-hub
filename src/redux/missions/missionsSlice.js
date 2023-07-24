import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
  error: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default missionsSlice.reducer;
