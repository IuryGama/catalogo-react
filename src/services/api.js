import axios from 'axios';
import 'dotenv';

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export default api;