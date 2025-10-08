import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //MEMOIZATION
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // nowPlaying-movies api-call from TMDB, & updating the redux-store with the fetched data
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1&language=te&region=IN",
      API_OPTIONS
    );

    const jsonData = await data.json();
    // console.log("now playing movies:", jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  };

  // why we are making api-call in useEffect?  => because we want to make this api-call only once (when this component loads for the first time)
  useEffect(() => {
    //MEMOIZATION
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
