import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4 font-medium">{title}</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth space-x-2"
        style={{ overflowY: "hidden", height: "max-content" }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
