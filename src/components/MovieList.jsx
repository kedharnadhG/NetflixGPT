import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);

  // const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (!scrollRef.current) return;
  //   const { clientWidth } = scrollRef.current;
  //   const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
  //   scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // };

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
