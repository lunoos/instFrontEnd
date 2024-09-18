import axios from 'axios';

const API_URL = 'http://your-backend-api-url';

const login = async (username, password) => {
  //const response = await axios.post(`${API_URL}/login`, { username, password });
  const response = {data: {
    token: "dummy token"
  }};
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

export default {
  login,
  logout,
};