import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '826e96c4329d49018ac4f4a8db838617',
    }
})