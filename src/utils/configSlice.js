import { createSlice } from "@reduxjs/toolkit";

const initialLangState = {
  language: "en",
};

const configSlice = createSlice({
  name: "config",
  initialState: initialLangState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export { initialLangState };
export default configSlice.reducer;
