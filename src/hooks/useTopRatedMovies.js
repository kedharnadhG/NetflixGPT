import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // nowPlaying-movies api-call from TMDB, & updating the redux-store with the fetched data
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1&language=te&region=IN",
      API_OPTIONS
    );

    const jsonData = await data.json();
    // console.log("now playing movies:", jsonData.results);
    dispatch(addTopRatedMovies(jsonData.results));
  };

  // why we are making api-call in useEffect?  => because we want to make this api-call only once (when this component loads for the first time)
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
