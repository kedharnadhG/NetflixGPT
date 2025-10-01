import React from 'react'
import Header from './Header';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* Planning :-
        
        MainContainer
          - Video Background
          - Video Title

        SecondaryContainer
          - MovieList * n   (n-diff-rows)
            - MovieCard * m  (m-diff-movies)
      */}

    </div>
  );
}

export default Browse