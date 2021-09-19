import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: {
        'Authorization': 'token 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' 
    }
});

export default api;