import React from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'

import action_movie from '../../assets/action_movie.jpg'
import romance_movie from '../../assets/romance_movie.jpg'
import horror_movie from '../../assets/horror_movie.jpg'
import comedy_movie from '../../assets/comedy_movie.jpg'
import thriller_movie from '../../assets/thriller_movie.jpg'

const Movies = () => {
    return(
        <div className = 'movies'>
           
      <div className="row top-row">
        <div className="movie">
          
          <img src={action_movie} alt="" />
          <div className = "caption">
          <Link to="/Movie/Movie" className='movie-link'>
            <p>Action Movies</p></Link>
          </div>

        </div>
        <div className="movie">
          <img src={horror_movie} alt="" />
          <div className = "caption">
          <Link to="/Movie/Movie" className='movie-link'>
            <p>Horror Movies</p> </Link>
          </div>
        </div>
        <div className="movie">
          <img src={romance_movie} alt="" />
          
          <div className = "caption">
            <Link to="/Movie/Movie" className='movie-link'>
            <p>Romance Movies</p></Link>
          </div>
        </div>
      </div>
      
      {/* Bottom row with 2 images */}
      <div className="row bottom-row">
        <div className="movie">
          <img src={thriller_movie} alt="" />
          
          <div className = "caption">
            <Link to="/Movie/Movie" className='movie-link'>
            <p>Thriller Movies</p></Link>
          </div>
        </div>
        <div className="movie">
          <img src={comedy_movie} alt="" />
          <div className = "caption">
          <Link to="/Movie/Movie" className='movie-link'>
            <p>Comedy Movies</p></Link>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Movies