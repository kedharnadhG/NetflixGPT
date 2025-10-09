import { combineReducers } from "@reduxjs/toolkit";
import userReducer, { initialUserState} from "./userSlice";
import moviesReducer, { initialMovieState} from "./moviesSlice";
import gptReducer, { initialGptState} from "./gptSlice";
import configReducer, { initialLangState} from "./configSlice";

const appReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  gpt: gptReducer,
  config: configReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_SIGNOUT") {
      state = {
        user: initialUserState,
        movies: initialMovieState,
        gpt: initialGptState,
        config: initialLangState
    }
  }
  return appReducer(state, action);
};

export default rootReducer;
