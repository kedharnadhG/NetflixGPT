import { Info, Play } from "lucide-react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl  md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg text-gray-300 hidden xl:block md:w-2/4">{overview}</p>
      <div className=" flex md:flex-none mt-4 md:mt-4">
        <button
          type="button"
          className="text-gray-900 hover:cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 px-7 py-2.5 me-2 mb-2 dark:bg-white dark:text-black hover:text-white font-bold dark:border-gray-600 rounded-sm dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <Play className="hidden md:inline me-2 mb-1" size={20} /> Play
        </button>
        <button
          type="button"
          className=" hover:cursor-pointer border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium md:px-8 px-4 py-2.5 text-center me-2 mb-2 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-400 rounded-sm dark:focus:ring-gray-800"
        >
          <Info className="md:inline hidden me-2 mb-1" size={20} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
