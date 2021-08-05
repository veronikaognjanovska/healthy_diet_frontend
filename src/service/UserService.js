import axios from '../custom-axios/axios';
import {StorageService} from './StorageService';


const UserService = {

    register: (username, password, nameSurname, email, birthday) => {
        return axios.post(`/user/register`, {
            "username": username,
            "password": password,
            "nameSurname": nameSurname,
            "email": email,
            "birthday": birthday
        });
    },

    login: (username, password) => {
        return axios.post('/user/login', {
            "username": username,
            "password": password
        });
    },


    getLoggedInUser: () => {
        return StorageService.getLoggedInUser()?.username;
    },

    setLoggedInUser: (data) => {
        if (data === null) {
            StorageService.setLoggedInUser(data);
        }
        StorageService.setLoggedInUser(data);
    },




};

export default UserService;