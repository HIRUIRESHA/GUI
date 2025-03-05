import React, { useState, useEffect } from 'react';
import { movieService } from '../../services/api';
import { toast } from 'react-toastify';
import '../../styles/admin/ManageMovies.css';

const ManageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    release_year: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    checkAdminStatus();
    fetchMovies();
  }, []);

  const checkAdminStatus = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData && userData.userData && userData.userData.userType === 'admin') {
      setIsAdmin(true);
    } else {
      // Redirect non-admins
      window.location.href = '/login';
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await movieService.getAllMovies();
      setMovies(response.data);
      
      // Extract unique genres
      const uniqueGenres = [...new Set(response.data.map(movie => movie.genre))];
      setGenres(uniqueGenres);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Failed to load movies');
      setLoading(false);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await movieService.deleteMovie(movieId);
        toast.success('Movie deleted successfully');
        fetchMovies(); // Refresh the list
      } catch (error) {
        console.error('Error deleting movie:', error);
        toast.error('Failed to delete movie');
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  const handleAddMovie = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newMovie.title || !newMovie.genre || !newMovie.release_year) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    try {
      await movieService.createMovie(newMovie);
      toast.success('Movie added successfully');
      
      // Reset form and refresh movies
      setNewMovie({
        title: '',
        genre: '',
        release_year: '',
        description: '',
        imageUrl: ''
      });
      setShowAddForm(false);
      fetchMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
      toast.error('Failed to add movie');
    }
  };

  // Filter movies based on search term and genre
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filterGenre === '' || movie.genre === filterGenre;
    
    return matchesSearch && matchesGenre;
  });

  if (!isAdmin) {
    return <div className="loading">Checking permissions...</div>;
  }

  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li><a href="/admin-dashboard">Dashboard</a></li>
          <li><a href="/manage-users">Manage Users</a></li>
          <li><a href="/manage-movies" className="active">Manage Movies</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Manage Movies</h2>
        
        <div className="admin-controls">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearch}
              className="admin-search"
            />
            
            <select 
              value={filterGenre} 
              onChange={handleFilterChange}
              className="admin-filter"
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          
          <button 
            className="add-movie-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancel' : 'Add New Movie'}
          </button>
        </div>
        
        {showAddForm && (
          <div className="add-movie-form-container">
            <h3>Add New Movie</h3>
            <form onSubmit={handleAddMovie} className="add-movie-form">
              <div className="form-group">
                <label>Title*</label>
                <input
                  type="text"
                  name="title"
                  value={newMovie.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Genre*</label>
                <input
                  type="text"
                  name="genre"
                  value={newMovie.genre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Release Year*</label>
                <input
                  type="number"
                  name="release_year"
                  value={newMovie.release_year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newMovie.description}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={newMovie.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/movie-image.jpg"
                />
              </div>
              
              <button type="submit" className="submit-movie-btn">
                Add Movie
              </button>
            </form>
          </div>
        )}
        
        {filteredMovies.length === 0 ? (
          <div className="no-results">No movies found matching your criteria.</div>
        ) : (
          <div className="movies-table-container">
            <table className="movies-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMovies.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.release_year}</td>
                    <td>
                      <button 
                        className="edit-btn"
                        onClick={() => toast.info('Edit functionality coming soon')}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button 
                        className="delete-btn"
                        onClick={() => handleDeleteMovie(movie.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMovies;