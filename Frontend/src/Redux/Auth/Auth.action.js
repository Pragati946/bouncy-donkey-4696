
import axios from "axios";
import { FAIL, LOGOUT, REQ, SUC } from "./Auth.types";
export const login=(route)=>(dispatch)=>{
    dispatch({type:REQ});
       axios.post("https://reqres.in/api/login",route)
         .then((res)=>dispatch({type:SUC,payload:res.data}))
         .catch((err)=>dispatch({type:FAIL}))
         
    
}
export const logout=()=>({type:LOGOUT});