import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: []
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    updateModel: (state, action) => {
      state.model = action.payload;
    }
  }
});

export const { updateModel } = modelSlice.actions;

export default modelSlice.reducer;
