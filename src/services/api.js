import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ietsis.dynu.net:9000/',
  // baseURL: "https://cors-anywhere.herokuapp.com//ietsis.dynu.net:9000/",
});

export default api;
