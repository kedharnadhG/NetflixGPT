import { Info, Play } from "lucide-react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
        <button
          type="button"
          className="text-gray-900 hover:cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <Play className="inline me-2 mb-1" size={20} /> Play
        </button>
        <button
          type="button"
          className=" hover:cursor-pointer border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium px-8 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-400 rounded-lg dark:focus:ring-gray-800"
        >
          <Info className="inline me-2 mb-1" size={20} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
