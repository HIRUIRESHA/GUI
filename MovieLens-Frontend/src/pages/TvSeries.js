import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/TvSeries.css';

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTvSeries();
  }, []);

  const fetchTvSeries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/tv-series");
      setTvSeries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching TV series:', error);
      toast.error('Failed to load TV series');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading TV series...</div>;
  }

  return (
    <div className="tv-series-container">
      <h1 className="page-title">TV Series</h1>
      
      {tvSeries.length === 0 ? (
        <div className="no-series">
          <p>No TV series available at the moment.</p>
        </div>
      ) : (
        <div className="tv-series-grid">
          {tvSeries.map((series, index) => (
            <div key={index} className="tv-series-card">
              <div className="tv-series-image-container">
                <img 
                  src={series.imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'} 
                  alt={series.title} 
                  className="tv-series-image"
                />
                <div className="tv-series-overlay">
                  <button className="watch-btn">
                    Watch Now
                  </button>
                </div>
              </div>
              <div className="tv-series-info">
                <h3 className="tv-series-title">{series.title}</h3>
                <div className="tv-series-details">
                  <span className="tv-series-genre">{series.genre}</span>
                  <span className="tv-series-year">{series.release_year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TvSeries;