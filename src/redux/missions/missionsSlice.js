import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/get', async () => {
  const URL = 'https://api.spacexdata.com/v3/missions';
  const response = await axios.get(URL);

  const missionsList = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));

  return missionsList;
});

const initialState = {
  list: [],
  status: 'idle',
  error: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.list = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  },
});

export default missionsSlice.reducer;
