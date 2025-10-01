import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({movieId}) => {

    // fetch trailer video using movieId
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/1267319/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        console.log("getMovieVideos - json:", json);

        const filterData = json.results.filter(video => video.type === "Trailer" && video.site === "YouTube");
        const trailer = filterData[0];
        console.log("getMovieVideos - trailer:", trailer);
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground