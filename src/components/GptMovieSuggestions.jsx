import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerMovieList from "./shimmerUI/ShimmerMovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, loading } = useSelector((store) => store.gpt);

  if (loading) {
    return (
      <>
        <ShimmerMovieList />
        <ShimmerMovieList />
        <ShimmerMovieList />
      </>
    );
  }

  if (!movieResults || !movieNames) return null;


  return (
    <div className="p-4 m-4 bg-black/40 text-white">
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
    </div>
  );
};

export default GptMovieSuggestions;
