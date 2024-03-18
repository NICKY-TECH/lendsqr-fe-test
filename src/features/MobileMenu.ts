import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  value:boolean;
};

const initialValue: initialStateType = {
  value: true,
};

export const mobileSlice = createSlice({
  name: "valid",
  initialState: initialValue,
  reducers: {
    mobileState: (
      state,action:PayloadAction<boolean>
    ) => {
      return {
        ...state,
        value:action.payload,
      };
    },
  },
});

export default mobileSlice.reducer;
export const { mobileState } = mobileSlice.actions;
