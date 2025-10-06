import { Search } from "lucide-react";
import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="pt-[20vh]">
      <form className=" mx-auto flex items-center justify-center">
        <input
          type="text"
          className="p-4 m-4 w-1/2 bg-white/100 rounded-lg text-black font-semibold"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className="py-3 px-6 flex items-center bg-red-600 text-black font-semibold hover:text-white rounded-lg shadow-md hover:bg-red-500 transition-colors duration-200">
          <Search className="inline-block mr-2" size={20} />
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
