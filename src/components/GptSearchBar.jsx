import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/googleGenAI";

import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setGptLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.language);

  const [errorMsg, setErrorMsg] = useState("");

  // search movie in TMDB using an api-call
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchQuery = searchText.current.value;
    searchText.current.value = "";

    if (!searchQuery) {
      setErrorMsg("Please enter a movie keyword to search.");
      return;
    }

    // generic prompt
    const gptQuery = `Act as a Movie Recommendation System and suggest 5 popular Indian movies for the query: "${searchQuery}".
      Include movies from any Indian language (Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, etc.) but exclude non-Indian films.
      Return only the names, comma-separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.
      `;

    try {
      
      dispatch(setGptLoading(true));

      const genAIresponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        generationConfig: {
          maxOutputTokens: 100, // tight limit for fast response
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
        },
        contents: [
          {
            role: "user",
            parts: [
              {
                text: gptQuery,
              },
            ],
          },
        ],
      });

      const text =
        genAIresponse.text ||
        genAIresponse?.candidates[0].content.parts[0].text ||
        "No results found!";

      const gptMovies = text.split(",").map((movie) => movie.trim());

      console.log("GPT Movies:", gptMovies);

      // for each movie, we find out the TMDB API
      const tmdbMoviesData = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      ); // why using promise.all here? => basically, the map function returns an array of promises, and we can use Promise.all to wait for all the promises to resolve and then get the results as an array.

      // console.log("TMDB Movies:", tmdbMoviesData.flat());

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbMoviesData,
        })
      );
    } catch (error) {
      console.error("❌ Gemini API Error:", error);
      setErrorMsg(
        error?.error?.message || error?.message || "Something went wrong!"
      );
    } finally {
      dispatch(setGptLoading(false));
    }
  };

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  return (
    <div className="pt-[20vh]">
      <form
        className=" mx-auto flex items-center justify-center flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 mb-4 w-3/4 md:w-1/2 bg-white/100 rounded-lg text-black font-semibold"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-3 px-6 md:px-10 flex items-center bg-red-600 text-black font-semibold hover:text-white rounded-lg shadow-md hover:bg-red-500 transition-colors duration-200"
          onClick={handleGptSearchClick}
        >
          <Search className="inline-block mr-2" size={20} />
          {lang[langKey]?.search}
        </button>
      </form>

      {errorMsg && (
        <div
          className={`mx-auto font-bold text-red-700 flex text-2xl bg-gray-300/75 rounded-lg p-4 mt-10 items-center transition-opacity duration-500 ${
            errorMsg ? "opacity-100" : "opacity-0"
          }`}
        >
          ❌ {errorMsg}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
