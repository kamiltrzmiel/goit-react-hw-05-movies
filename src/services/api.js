import axios from 'axios';

const API_URL = 'https://api.themoviedb.org';
const API_KEY = 'e56bac74c49b45071b964a5f7a0906aa';

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/3/trending/movie/day?api_key=${API_KEY}`);
    if (response.status !== 200) throw new Error('Request failed');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
