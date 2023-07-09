import axios from 'axios';

const api_query = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e56bac74c49b45071b964a5f7a0906aa',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await api_query.get('/trending/movie/day', {
      params: { include_adult: false },
    });
    return response.data.results;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieByTitle = async query => {
  try {
    const response = await api_query.get(`/search/movie`, {
      params: { language: 'en-US', page: 1, include_adult: false, query },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async movie_id => {
  try {
    const response = await api_query.get(`/movie/${movie_id}`, {
      params: { language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchCastById = async movie_id => {
  try {
    const response = await api_query.get(`/movie/${movie_id}/credits`, {
      params: { language: 'en-US' },
    });
    return response.data.cast;
  } catch (error) {
    return error.message;
  }
};

export const fetchReviewsById = async movie_id => {
  try {
    const response = await api_query.get(`/movie/${movie_id}/reviews`, {
      params: { language: 'en-US' },
    });
    return response.data.results;
  } catch (error) {
    return error.message;
  }
};
