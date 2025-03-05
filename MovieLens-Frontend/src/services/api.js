import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Movie API services
export const movieService = {
  getAllMovies: () => api.get('/movies'),
  getMovieById: (id) => api.get(`/movies/${id}`),
  createMovie: (movieData) => api.post('/movies', movieData),
  deleteMovie: (id) => api.delete(`/movies/${id}`),
  filterMovies: (params) => api.get('/movies/filter', { params })
};

// Rating API services
export const ratingService = {
  createRating: (ratingData) => api.post('/ratings', ratingData),
  getRatingsForMovie: (movieId) => api.get(`/ratings/${movieId}`),
  deleteRating: (id) => api.delete(`/ratings/${id}`)
};

// User API services
export const userService = {
  getAllUsers: () => api.get('/users'),
  getUserById: (id) => api.get(`/users/${id}`),
  createUser: (userData) => api.post('/users', userData),
  deleteUser: (id) => api.delete(`/users/${id}`),
  filterUsers: (params) => api.get('/users/filter', { params }),
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register-user', userData),
  getUserDetails: () => api.get('/auth/get-userDetails')
};

export default api;