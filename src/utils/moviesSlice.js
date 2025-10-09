import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export { initialMovieState };
export default moviesSlice.reducer;
