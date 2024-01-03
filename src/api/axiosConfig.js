import axios from 'axios';

export default axios.create({
    baseURL: 'https://dbbd-85-163-10-57.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});