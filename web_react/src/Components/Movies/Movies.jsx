import React from 'react'
import './Movies.css'
import action_movie from '../../assets/action_movie.jpg'
import romance_movie from '../../assets/romance_movie.jpg'
import horror_movie from '../../assets/horror_movie.jpg'
import comedy_movie from '../../assets/comedy_movie.jpg'
import thriller_movie from '../../assets/thriller_movie.jpg'

const Movies = () => {
    return(
        <div className = 'movies'>
            {/*<div className = "action">
                <img src={action_movie} alt="" />
            </div>
            <div className = "romance">
                <img src={romance_movie} alt="" />
            </div>
            <div className = "horror">
                <img src={horror_movie} alt="" />
            </div>
            <div className = "thriller">
                <img src={thriller_movie} alt="" />
            </div>
            <div className = "comedy">
                <img src={comedy_movie} alt="" />
            </div>*/}

             {/* Top row with 3 images */}
      <div className="row top-row">
        <div className="movie">
          <img src={action_movie} alt="" />
          <div className = "caption">
            <p>Action Movies</p>
          </div>
        </div>
        <div className="movie">
          <img src={horror_movie} alt="" />
          <div className = "caption">
            <p>Horror Movies</p>
          </div>
        </div>
        <div className="movie">
          <img src={romance_movie} alt="" />
          <div className = "caption">
            <p>Romance Movies</p>
          </div>
        </div>
      </div>
      
      {/* Bottom row with 2 images */}
      <div className="row bottom-row">
        <div className="movie">
          <img src={thriller_movie} alt="" />
          <div className = "caption">
            <p>Thriller Movies</p>
          </div>
        </div>
        <div className="movie">
          <img src={comedy_movie} alt="" />
          <div className = "caption">
            <p>Comedy Movies</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Movies