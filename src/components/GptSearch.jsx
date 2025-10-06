import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-[100vh] w-screen">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="logo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
