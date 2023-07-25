import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { missionsAPI } from '../../API/API';

export const fetchMissions = createAsyncThunk('missions/get', async () => {
  const response = await axios.get(missionsAPI);

  const missionsList = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
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
  reducers: {
    reservationToggle(state, action) {
      const missionID = action.payload;
      const reservedStatus = state.list.find((mission) => mission.mission_id === missionID);
      if (reservedStatus) {
        reservedStatus.reserved = !reservedStatus.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.list = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      });
  },
});

export const { reservationToggle } = missionsSlice.actions;
export default missionsSlice.reducer;
