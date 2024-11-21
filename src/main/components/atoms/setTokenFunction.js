import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../molecules/AuthProvider";

const setTokenFunction = async (loginOrSignup,username,password) => {
    let response;
    let tokenVal;
    if(loginOrSignup === 'login') {
        // await clearToken();
        response = await axios.post('/login', { username, password });
        tokenVal = response.data.data.token;
        console.log(tokenVal);
        // Cookies.set('token', tokenVal, { expires: 0.1, secure: true });
        return tokenVal;
    } else if(loginOrSignup === 'signup') {
        response = await axios.post('/signup', { username, password });
        console.log(response.data.message);
        return response.data.message;
    }
}

export default setTokenFunction