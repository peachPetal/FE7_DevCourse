import axios from 'axios';
import type { ArtistResponse } from '../types/Artist';

const API_URL = 'http://localhost:1337/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const artistService = {
  getAll: async () => {
    const response = await api.get<ArtistResponse>('/artists');
    return response.data;
  },
  
  getById: async (id: number) => {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  },
};

export default api;