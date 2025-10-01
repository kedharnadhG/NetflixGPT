import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

// here we need to show the video background and video title
const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early return if movies is undefined or empty
  if (!movies || movies === null || movies.length === 0) {
    return <div>Loading...</div>;
  }


  const mainMovie = movies[0];
  // console.log("MainContainer - mainMovie:", mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={ overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
