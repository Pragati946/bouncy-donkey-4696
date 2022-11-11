import axios from "axios";
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from "./Auth.types";
export const login=(creds)=>(dispatch)=>{
    console.log(creds)
    dispatch({type:AUTH_REQUEST});
       axios.post("https://reqres.in/api/login",creds)
         .then((res)=>dispatch({type:AUTH_SUCCESS,payload:res.data}))
         .catch((err)=>dispatch({type:AUTH_FAILURE}))
         
    
}
export const logout=()=>({type:LOGOUT});