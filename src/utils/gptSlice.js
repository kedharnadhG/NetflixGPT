import { createSlice } from "@reduxjs/toolkit";

const initialGptState = {
  showGptSearch: false,
  movieResults: null,
  movieNames: null,
  loading: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialGptState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setGptLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, setGptLoading } =
  gptSlice.actions;
export { initialGptState };
export default gptSlice.reducer;
