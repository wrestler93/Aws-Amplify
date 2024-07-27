import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    stepsData: [], 
  },
  reducers: {
    
    updateStepData(state, action) {
      const { step, data } = action.payload;
      state.stepsData[step] = data;
    },
    resetSteps(state) {
      state.stepsData = [];
    },
  },
});

export const { updateStepData, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
