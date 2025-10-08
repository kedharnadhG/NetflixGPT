import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // MEMOIZATION
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetch trailer video using movieId & updating the redux-store with the trailer-video-data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("getMovieVideos - json:", json);

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log("getMovieVideos - trailer:", trailer);

    // instead of maintaining a state just for trailer, we can use the Redux-store itself, let's keep it in the movie slice (instead of creating a new slice)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // MEMOIZATION
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
