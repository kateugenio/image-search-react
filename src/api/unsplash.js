import axios from 'axios';

// unsplash config
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID ...'
  }
});