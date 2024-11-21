import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = {
  getRecipes: async () => {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  },
  getBlogs: async () => {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data;
  },
};

export default api;
