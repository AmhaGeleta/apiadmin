import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://eziladmin.herokuapp.com/api/',
});
