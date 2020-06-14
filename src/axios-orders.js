import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-5ec29.firebaseio.com/'
});

export default instance;