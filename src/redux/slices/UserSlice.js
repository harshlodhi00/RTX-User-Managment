import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.email !== action.payload.email);
    },
    updateUser: (state, action) => {
      const { email } = action.payload;
      const userIndex = state.findIndex((user) => user.email === email);

      if (userIndex !== -1) {
        console.log("...action.payload", action.payload);
        console.log("...state[userIndex]", state[userIndex]);

        state[userIndex] = { ...state[userIndex], ...action.payload };
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
