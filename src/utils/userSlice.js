import { createSlice } from "@reduxjs/toolkit";

const initialUserState = null;

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action) => {
      //this is what's happening BTS
      state = action.payload;
      return state;

      // we can write like this also
      // return action.payload;    //here nothing but the initialState(null) is changing
    },

    removeUser: (state, action) => {
      state = null;
      return state;
      //  return null;       // we can just write like this also
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export { initialUserState };
export default userSlice.reducer;
