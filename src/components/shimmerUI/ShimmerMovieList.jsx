import React from "react";
import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList = ({ title }) => {
  const placeholderCards = Array(10).fill(0); // 10 cards

  return (
    <div className="px-6">
      <h1 className="text-2xl text-white py-4 font-medium">
        {title || "Loading..."}
      </h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth space-x-2"
        style={{ overflowY: "hidden", height: "max-content" }}
      >
        {placeholderCards.map((_, idx) => (
          <ShimmerMovieCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerMovieList;
