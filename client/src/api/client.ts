import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error(
    'VITE_API_URL is not set. Add it to client/.env and restart the dev server.'
  );
}

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
