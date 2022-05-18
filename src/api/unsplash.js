import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
                'Client-ID h361SRgQmh0Iy_zRR0VaGhNLlILhJNxr5S68CFfQzRA'
    }
});