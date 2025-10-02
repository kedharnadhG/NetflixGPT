import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-64 flex-shrink-0 pr-4 hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt="MovieCard"
      />
    </div>
  );
};


export default MovieCard;
