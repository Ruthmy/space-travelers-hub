import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { rocketsAPI } from '../../API/API';

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
  reducers: {
    // Reserve a rocket and set reserved to true
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = true;
      }
    },
    // Cancel reservation of a rocket and set reserved to false
    cancelReservation(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = false;
      }
    },
  },
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

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
