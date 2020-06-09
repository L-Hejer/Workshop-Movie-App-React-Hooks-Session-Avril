import React from 'react';

import './MovieCard.css';

const MovieCard = () => {
  return (
    <div className='container'>
      <div className='movie'>
        <div className='movie-rating'>
          <h1>Rating</h1>
        </div>
        <div className='movie-img'>
          <img src='' alt='movie poster' />
        </div>
        <div className='text-movie-cont'>
          <div className='mr-grid'>
            <div className='col1'>
              <h2>Movie Name</h2>
              <ul className='movie-gen'>
                <p>Movie Date</p>
              </ul>
            </div>
          </div>
          <div className='mr-grid summary-row'>
            <h5>SUMMARY</h5>
            <p>Movie Description</p>
          </div>
          <div className='mr-grid action-row'>
            <div className='col2'>
              <div className='watch-btn'>
                <h3>WATCH TRAILER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
