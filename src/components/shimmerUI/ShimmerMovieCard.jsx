import React from "react";

const ShimmerMovieCard = () => {
  return (
    <div className="w-48 h-64 flex-shrink-0 pr-4">
      <div className="w-full h-full bg-gray-300 rounded-lg animate-pulse" />
    </div>
  );
};

export default ShimmerMovieCard;
