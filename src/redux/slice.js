import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    }
  }
});

export const { getInputValue } = UserSlice.actions;
export default UserSlice.reducer;
