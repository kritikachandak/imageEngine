import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 01-YFKIzacYELDHBB_RcJaBf7eNNYhnjJMmqzopX6EA'
    }
});