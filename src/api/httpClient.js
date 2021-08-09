import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/opasdevapi/opasapi/',//change this to your localhost port
    timeout: 10000, // indicates, 5000ms ie. 5 second
    headers: {
        'Content-Type': 'application/json',
        // anything you want to add to the headers
    }
});
export default httpClient;