
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Movie.css';

// const Movie = () => {
//   const [category, setCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [reviews, setReviews] = useState({});
//   const navigate = useNavigate();

//   const movies = [
//     { title: 'The Lie', category: 'thriller', video: '/src/assets/the_lie.mp4' },
//     { title: 'Homestead', category: 'thriller', video: '/src/assets/homestead.mp4'},

//     { title: 'Annabelle', category: 'horror', video: '/src/assets/annabelle.mp4' },
//     { title: 'The Nun', category: 'horror', video: '/src/assets/nun.mp4' },
//     { title: 'Immaculate', category: 'horror', video: '/src/assets/immaculate.mp4' },

//     { title: 'Hi Nanna', category: 'romance', video: '/src/assets/Hi_nanna.mp4' },
//     { title: 'Sita Ramam', category: 'romance', video: '/src/assets/sita_raman.mp4' },
//     { title: 'Amaran', category: 'romance', video: '/src/assets/amaran.mp4' },

//     { title: 'Sabari', category: 'action', video: '/src/assets/sabari.mp4' },
//     { title: 'San Andreas', category: 'action', video: '/src/assets/san.mp4' },

//     { title: 'Supercool', category: 'comedy', video: '/src/assets/supercool.mp4' },
//     { title: 'Champions', category: 'comedy', video: '/src/assets/champions.mp4' },
//   ];

//   const handleCategoryChange = (newCategory) => setCategory(newCategory);
//   const handleSearchChange = (event) => setSearchTerm(event.target.value);

//   const handleAddReview = (movieTitle, rating, text) => {
//     setReviews((prev) => ({
//       ...prev,
//       [movieTitle]: [...(prev[movieTitle] || []), { rating, text }]
//     }));
//   };

//   const filteredMovies = movies.filter(
//     (movie) =>
//       (category === 'all' || movie.category === category) &&
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="movie-page">
//       <div className="movies-header">
        
//           <h1 className="page-title">Explore Movies</h1>
//           <p className="page-description">
//             Discover and rate the best films from around the world
//           </p>
//         </div>
      


//       <div className="search-bar">
//         <input type="text" placeholder="Search for a movie..." value={searchTerm} onChange={handleSearchChange} />
//       </div>


//       <div className="categories">
//         {['all', 'horror', 'romance', 'action', 'thriller', 'comedy'].map((cat) => (
//           <button key={cat} onClick={() => handleCategoryChange(cat)}>
//             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="movie-list">
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((movie, index) => (
//             <div key={index} className="movie-item">
//               <div className="movie-video-container">
//                 <video controls className="movie-video">
//                   <source src={movie.video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <h2>{movie.title}</h2>
//         {/* View Details Button */}
//           <div className="view-details">
//           <button className="details-button">View Details</button>
          
//         </div>
//       </div>
              
            
          
            
//           ))
//         ) : (
//           <p>No movies found.</p>
//         )}
//       </div>
//     </div>
//   );




  
// };

// export default Movie;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Movie.css';

// const Movie = () => {
//   const [category, setCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const movies = [
//     { id: 1, title: 'The Lie', category: 'thriller', video: '/src/assets/the_lie.mp4' },
//     { id: 2, title: 'Homestead', category: 'thriller', video: '/src/assets/homestead.mp4' },
//     { id: 3, title: 'Annabelle', category: 'horror', video: '/src/assets/annabelle.mp4' },
//     { id: 4, title: 'The Nun', category: 'horror', video: '/src/assets/nun.mp4' },
    // { id: 5, title: 'Immaculate', category: 'horror', video: '/src/assets/immaculate.mp4' },
    // { id: 6, title: 'Hi Nanna', category: 'romance', video: '/src/assets/Hi_nanna.mp4' },
    // { id: 7, title: 'Sita Ramam', category: 'romance', video: '/src/assets/sita_raman.mp4' },
    // { id: 8, title: 'Amaran', category: 'romance', video: '/src/assets/amaran.mp4' },
    // { id: 9, title: 'Sabari', category: 'action', video: '/src/assets/sabari.mp4' },
    // { id: 10, title: 'San Andreas', category: 'action', video: '/src/assets/san.mp4' },
    // { id: 11, title: 'Supercool', category: 'comedy', video: '/src/assets/supercool.mp4' },
    // { id: 12, title: 'Champions', category: 'comedy', video: '/src/assets/champions.mp4' },
//   ];

//   const handleCategoryChange = (newCategory) => setCategory(newCategory);
//   const handleSearchChange = (event) => setSearchTerm(event.target.value);
//   const filteredMovies = movies.filter(
//     (movie) =>
//       (category === 'all' || movie.category === category) &&
//       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="movie-page">
//       <div className="movies-header">
//         <h1 className="page-title">Explore Movies</h1>
//         <p className="page-description">
//           Discover and rate the best films from around the world
//         </p>
//       </div>

//       <div className="search-bar">
//         <input type="text" placeholder="Search for a movie..." value={searchTerm} onChange={handleSearchChange} />
//       </div>

//       <div className="categories">
//         {['all', 'horror', 'romance', 'action', 'thriller', 'comedy'].map((cat) => (
//           <button key={cat} onClick={() => handleCategoryChange(cat)}>
//             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="movie-list">
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((movie) => (
//             <div key={movie.id} className="movie-item">
//               <div className="movie-video-container">
//                 <video controls className="movie-video">
//                   <source src={movie.video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <h2>{movie.title}</h2>
//               <div className="view-details">
//                 <button className="details-button" onClick={() => navigate(`/movies/${movie.id}`)}>
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No movies found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Movie;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Movie.css';

const Movie = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const movies = [
    { id: 1, title: 'The Lie', category: 'thriller', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/the_lie.mp4' },
    { id: 2, title: 'Homestead', category: 'thriller', year: 2022, rating: 5.1, description: 'A suspenseful home invasion thriller.', video: '/src/assets/homestead.mp4' },
    { id: 3, title: 'Annabelle', category: 'horror', year: 2014, rating: 5.4, description: 'A horror movie based on the infamous doll.', video: '/src/assets/annabelle.mp4' },
    { id: 4, title: 'The Nun', category: 'horror', year: 2018, rating: 5.3, description: 'A terrifying horror story about a demonic nun.', video: '/src/assets/nun.mp4' },
    { id: 5, title: 'Immaculate', category: 'horror', video: '/src/assets/immaculate.mp4' },
    { id: 6, title: 'Hi Nanna', category: 'romance', video: '/src/assets/Hi_nanna.mp4' },
    { id: 7, title: 'Sita Ramam', category: 'romance', video: '/src/assets/sita_raman.mp4' },
    { id: 8, title: 'Amaran', category: 'romance', video: '/src/assets/amaran.mp4' },
    { id: 9, title: 'Sabari', category: 'action', video: '/src/assets/sabari.mp4' },
    { id: 10, title: 'San Andreas', category: 'action', video: '/src/assets/san.mp4' },
    { id: 11, title: 'Supercool', category: 'comedy', video: '/src/assets/supercool.mp4' },
    { id: 12, title: 'Champions', category: 'comedy', video: '/src/assets/champions.mp4' },
  ];

  const handleCategoryChange = (newCategory) => setCategory(newCategory);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const filteredMovies = movies.filter(
    (movie) =>
      (category === 'all' || movie.category === category) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-page">
      <div className="movies-header">
        <h1 className="page-title">Explore Movies</h1>
        <p className="page-description">Discover and rate the best films from around the world</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for a movie..." value={searchTerm} onChange={handleSearchChange} />
      </div>

      <div className="categories">
        {['all', 'horror', 'romance', 'action', 'thriller', 'comedy'].map((cat) => (
          <button key={cat} onClick={() => handleCategoryChange(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <div className="movie-video-container">
                <video controls className="movie-video">
                  <source src={movie.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h2>{movie.title}</h2>
              <div className="view-details">
                <button className="details-button" onClick={() => navigate(`/movies/${movie.id}`, { state: movie })}>
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
