//authentication service

import axios from 'axios';

const API_URL="https://cp.btfd.cc/api/v2/barong/";

class AuthService{
    login(email,password){
        return axios
        .post(API_URL+"identity/sessions",{
            email,
            password
        })
        .then (response =>{
            if(response.data.accessToken){
                localStorage.setItem("user",JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout(){
        localStorage.removeItem("user");
    }
    register(username,email,password){
        return axios.post(API_URL+ "identity/users",{
            username,
            email,
            password
        })
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
