import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
  value:boolean;
};

const initialValue: initialStateType = {
  value: false,
};

export const viewSlice = createSlice({
  name: "valid",
  initialState: initialValue,
  reducers: {
    viewState: (
      state
    ) => {
      return {
        ...state,
        value:!state.value,
      };
    },
  },
});

export default viewSlice.reducer;
export const { viewState } = viewSlice.actions;
