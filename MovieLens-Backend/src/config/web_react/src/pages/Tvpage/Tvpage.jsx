// import React, { useState } from 'react';
// import './Tvpage.css';

// const Tvpage = () => {
//   const [category, setCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const tvs = [
    // { title: 'Merlin', category: 'trending', video: '/src/assets/merlin.mp4' },
    // { title: 'Lioness', category: 'trending', video: '/src/assets/merlin.mp4' },
    // { title: 'My Demon', category: 'top-rated', video: '/src/assets/my_demon.mp4'},
    // { title: 'The Snow Girl', category: 'top-rated', video: '/src/assets/merlin.mp4' },
    // { title: 'The Hangover', category: 'new & upcoming', video: '/src/assets/my_demon.mp4' },
    // { title: 'Avengers', category: 'new & upcoming', video: '/src/assets/merlin.mp4' },
    // { title: 'A Quiet Place', category: 'bringe',video: '/src/assets/my_demon.mp4' },
    // { title: 'Pride and Prejudice', category: 'bringe', video: '/src/assets/the_witcher.mp4' },
    // { title: 'The Witcher', category: 'favorite', video: '/src/assets/the_witcher.mp4' },
    // { title: 'Blind', category: 'favorite', video: '/src/assets/the_witcher.mp4' },
//   ];

//   const handleCategoryChange = (newCategory) => {
//     setCategory(newCategory);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredMovies = tvs.filter((tv) => {
//     const matchesCategory = category === 'all' || tv.category === category;
//     const matchesSearch = tv.title.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   }).sort((a, b) => a.title.localeCompare(b.title));

//   return (
    
//     <div className="tv-page">
//       <div className="tv-header">
        
//         <h1 className="page-title">Unforgettable TV Series</h1>
//         <p className="page-description">
//         Discover the magic of TV
//         </p>
//       </div>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a tv show..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <div className="categories">
//         <button onClick={() => handleCategoryChange('all')}>All</button>
//         <button onClick={() => handleCategoryChange('trending')}>Trending</button>
//         <button onClick={() => handleCategoryChange('top-rated')}>Top-Rated</button>
//         <button onClick={() => handleCategoryChange('new & upcoming')}>New & Upcoming</button>
//         <button onClick={() => handleCategoryChange('bringe')}>Bringe-Worthy</button>
//         <button onClick={() => handleCategoryChange('favorite')}>Fan Favorite</button>
//       </div>

//       <div className="tv-list">
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((tv, index) => (
//             <div key={index} className="tv-item">
//               {tv.video ? (
//                 <div className="tv-video-container">
//                   <video controls className="tv-video" style={{ objectFit: 'cover' }}>
//                     <source src={tv.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               ) : (
//                 <img src={tv.image} alt={tv.title} className="tv-image" />
//               )}
//               <h2>{tv.title}</h2>
//               {/* View Details Button */}
//           <div className="view-details">
//           <button className="details-button">View Details</button>
          
//         </div>
//             </div>
//           ))
//         ) : (
//           <p>No tv shows found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tvpage

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tvpage.css';

const Tvpage = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const movies = [
    { id: 1, title: 'The Lie', category: 'thriller', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/the_lie.mp4' },
    { id: 1, title: 'Merlin', category: 'trending', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/merlin.mp4' },
    { id: 3,title: 'Lioness', category: 'trending', year: 2018,  rating: 6.2, description: 'A gripping thriller that keeps you on edge.',video: '/src/assets/merlin.mp4' },
    { id: 4,title: 'My Demon', category: 'top-rated', year: 2018,  rating: 6.2, description: 'A gripping thriller that keeps you on edge.',video: '/src/assets/my_demon.mp4'},
    { id: 5,title: 'The Snow Girl', category: 'top-rated', year: 2018,  rating: 6.2, description: 'A gripping thriller that keeps you on edge.',video: '/src/assets/merlin.mp4' },
    { id: 6,title: 'The Hangover', category: 'new & upcoming', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/my_demon.mp4' },
    { id: 8,title: 'Avengers', category: 'new & upcoming', year: 2018,  rating: 6.2, description: 'A gripping thriller that keeps you on edge.',video: '/src/assets/merlin.mp4' },
    { id: 9,title: 'A Quiet Place', category: 'bringe', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.',video: '/src/assets/my_demon.mp4' },
    { id: 10,title: 'Pride and Prejudice', category: 'bringe', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/the_witcher.mp4' },
    { id: 11,title: 'The Witcher', category: 'favorite', year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/the_witcher.mp4' },
    { id: 12,title: 'Blind', category: 'favorite',  year: 2018, rating: 6.2, description: 'A gripping thriller that keeps you on edge.', video: '/src/assets/the_witcher.mp4' },
  ];

  const handleCategoryChange = (newCategory) => setCategory(newCategory);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const filteredTvs = tvs.filter(
    (tv) =>
      (category === 'all' || tv.category === category) &&
      tv.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tv-page">
      <div className="tv-header">
        <h1 className="page-title">Explore Movies</h1>
        <p className="page-description">Discover and rate the best films from around the world</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for a movie..." value={searchTerm} onChange={handleSearchChange} />
      </div>

      <div className="categories">
        {['all', 'trending', 'top-rated', 'new & upcoming', 'bringe', 'favorite'].map((cat) => (
          <button key={cat} onClick={() => handleCategoryChange(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="tv-list">
        {filteredTvs.length > 0 ? (
          filteredTvs.map((tv) => (
            <div key={tv.id} className="tv-item">
              <div className="tv-video-container">
                <video controls className="tv-video">
                  <source src={tv.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h2>{tv.title}</h2>
              <div className="view-details">
                <button className="details-button" onClick={() => navigate(`/tvs/${tv.id}`, { state: tv })}>
                  View Details
                </button>
              </div>
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