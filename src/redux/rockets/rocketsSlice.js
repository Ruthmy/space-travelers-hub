import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { rocketsAPI } from '../../API/rocketsAPI';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await axios.get(rocketsAPI);
      return response.data;
    } catch (error) {
      throw error.response;
    }
  },
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get rockets from API:
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
