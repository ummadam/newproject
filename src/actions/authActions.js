import setAuthToken from "../utils/setAuthToken";
import { SET_CURRENT_USER,IP, GET_ERRORS } from "./types";
import axios from 'axios';
import jwt_decode from 'jwt-decode'



export const loginUser=(userData,history)=>dispatch=>{
    axios.post(IP+'api/users/login',userData).then(
        res=>{
            const {token}=res.data;
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            history.push('/dashboard');

        }
    ).catch(err=>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    })
}

export const setCurrentUser=(decoded)=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

export const logoutUser=(history)=>dispatch=>{
   localStorage.removeItem('jwtToken');
   setAuthToken(false);
   dispatch(setCurrentUser({}))
   history.push('/')
}