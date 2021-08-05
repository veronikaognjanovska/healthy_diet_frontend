import axios from "axios";
import {StorageService} from "../service/StorageService";

let getHeaders = () => {
    const token = StorageService.getToken();
    if (token !== null && token !== undefined) {
        return {
            'Access-Control-Allow-Origin': '*',
            'accept': '*/*',
            'Authorization': `Bearer ${token}`
        }
    }
    return {
        'Access-Control-Allow-Origin': '*',
        'accept': '*/*'
    };
};

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: getHeaders()
});

export default instance;