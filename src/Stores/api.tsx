import axios from 'axios';

const token = '[the token you received from the POST request above]';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000/employees/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${token}`,
  },
});