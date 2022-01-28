import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5000/drinks";
const GRAPH_API_BASE_URL = "http://localhost:5000/view-analytics";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    graphOne(type){
        return axios.get(GRAPH_API_BASE_URL + '/' + type);
    }
}

export default new UserService()