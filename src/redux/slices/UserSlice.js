import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {},
    removeUser: (state, action) => {},
    updateUser: (state, action) => {},
  },
});

export const { addUser, removeUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
