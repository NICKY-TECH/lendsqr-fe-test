import { createSlice,PayloadAction } from "@reduxjs/toolkit";
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
      state,action:PayloadAction<boolean>
    ) => {
      return {
        ...state,
        value:action.payload,
      };
    },
  },
});

export default viewSlice.reducer;
export const { viewState } = viewSlice.actions;
