import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  // MEMOIZATION
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  // nowPlaying-movies api-call from TMDB, & updating the redux-store with the fetched data
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addUpComingMovies(jsonData.results));
  };

  // why we are making api-call in useEffect?  => because we want to make this api-call only once (when this component loads for the first time)
  useEffect(() => {
    // MEMOIZATION
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
