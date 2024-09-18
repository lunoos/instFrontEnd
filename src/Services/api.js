import axios from 'axios';

const API_URL = 'http://your-backend-api-url';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  getFeed: () => api.get('/feed'),
  getProfile: (username) => api.get(`/profile/${username}`),
  likePost: (postId) => api.post(`/posts/${postId}/like`),
  dislikePost: (postId) => api.post(`/posts/${postId}/dislike`),
};
