import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [genres, setGenres] = useState(["Action", "Drama", "Comedy", "Sci-Fi", "Horror"]);

  useEffect(() => {
    fetchMovies();
    fetchTvSeries();
  }, []);

  // Fetch movies
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movies");
      setMovies(response.data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  // Fetch TV Series
  const fetchTvSeries = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/tv-series");
      setTvSeries(response.data);
    } catch (err) {
      console.error("Error fetching TV series:", err);
    }
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to MovieLens Web Application</h2>

      <section className="image-slider">
        <div className="slider-container">
          {movies.length > 0 &&
            movies.slice(0, 5).map((movie, index) => (
              <div key={index} className="slider-item">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="slider-image"
                />
                <div className="overlay">
                  <div className="overlay-text">
                    <Link to={`/movie/${movie.id}`}>
                      <button className="watch-now-btn">Watch Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="genre-section">
        <h2 className="section-title">Explore Movies by Genre</h2>
        <div className="genres-list">
          {genres.map((genre, index) => (
            <div key={index} className="genre-item">
              <h3>{genre}</h3>
              <Link to={`/movies?genre=${genre}`}>
                <button className="more-btn">More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="tv-series-section">
        <h2 className="section-title">Trending TV Series</h2>
        <div className="tv-series-list">
          {tvSeries.length > 0 &&
            tvSeries.slice(0, 5).map((series, index) => (
              <div key={index} className="tv-series-item">
                <img
                  src={series.imageUrl}
                  alt={series.title}
                  className="tv-series-image"
                />
                <div className="overlay">
                  <div className="overlay-text">
                    <button className="watch-now-btn">Watch Now</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;