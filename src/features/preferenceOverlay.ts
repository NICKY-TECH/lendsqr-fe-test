import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  value:boolean;
};

const initialValue: initialStateType = {
  value: false,
};

export const filterSlice = createSlice({
  name: "valid",
  initialState: initialValue,
  reducers: {
   filterState: (
      state
    ) => {
      return {
        ...state,
        value:!state.value,
      };
    },
  },
});

export default filterSlice.reducer;
export const { filterState } = filterSlice.actions;
