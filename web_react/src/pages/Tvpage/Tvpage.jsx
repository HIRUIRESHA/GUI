import React, { useState } from 'react';
import './Tvpage.css';

const Tvpage = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tvs = [
    { title: 'Merlin', category: 'trending', video: '/src/assets/merlin.mp4' },
    { title: 'Lioness', category: 'trending', video: '/src/assets/merlin.mp4' },
    { title: 'My Demon', category: 'top-rated', video: '/src/assets/my_demon.mp4'},
    { title: 'The Snow Girl', category: 'top-rated', video: '/src/assets/merlin.mp4' },
    { title: 'The Hangover', category: 'new & upcoming', video: '/src/assets/my_demon.mp4' },
    { title: 'Avengers', category: 'new & upcoming', video: '/src/assets/merlin.mp4' },
    { title: 'A Quiet Place', category: 'bringe',video: '/src/assets/my_demon.mp4' },
    { title: 'Pride and Prejudice', category: 'bringe', video: '/src/assets/the_witcher.mp4' },
    { title: 'The Witcher', category: 'favorite', video: '/src/assets/the_witcher.mp4' },
    { title: 'Blind', category: 'favorite', video: '/src/assets/the_witcher.mp4' },
  ];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = tvs.filter((tv) => {
    const matchesCategory = category === 'all' || tv.category === category;
    const matchesSearch = tv.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => a.title.localeCompare(b.title));

  return (
    
    <div className="tv-page">
      <h1>Tv Library</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a tv show..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="categories">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('trending')}>Trending</button>
        <button onClick={() => handleCategoryChange('top-rated')}>Top-Rated</button>
        <button onClick={() => handleCategoryChange('new & upcoming')}>New & Upcoming</button>
        <button onClick={() => handleCategoryChange('bringe')}>Bringe-Worthy</button>
        <button onClick={() => handleCategoryChange('favorite')}>Fan Favorite</button>
      </div>

      <div className="tv-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((tv, index) => (
            <div key={index} className="tv-item">
              {tv.video ? (
                <div className="tv-video-container">
                  <video controls className="tv-video" style={{ objectFit: 'cover' }}>
                    <source src={tv.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img src={tv.image} alt={tv.title} className="tv-image" />
              )}
              <h2>{tv.title}</h2>
            </div>
          ))
        ) : (
          <p>No tv shows found.</p>
        )}
      </div>
    </div>
  );
};

export default Tvpage