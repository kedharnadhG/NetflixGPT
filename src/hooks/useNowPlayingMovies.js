import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //MEMOIZATION
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // nowPlaying-movies api-call from TMDB, & updating the redux-store with the fetched data
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    // console.log("now playing movies:", jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  // why we are making api-call in useEffect?  => because we want to make this api-call only once (when this component loads for the first time)
  useEffect(() => {
    //MEMOIZATION  (if nowPlayingMovies is not present in store, then only make api-call)
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
