
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from "./Auth.types"

let token =localStorage.getItem("token");
const initValue={
    // isAuth:!!token,
    isAuth:false,
    token:token || "",
    loading:false,
    error:false,
}
export const AuthReducer=(state=initValue,{type,payload})=>{
    localStorage.setItem("token",JSON.stringify(payload));
switch(type){
    case AUTH_REQUEST:{
        return{
            ...state,
            loading:true,
            error:false,
        }
    }
    case AUTH_SUCCESS:{
        console.log("inside")
       
        return{
            ...state,
            isAuth:true,
            loading:false,
            error:false,
            token:payload
        }
    } 
    case AUTH_FAILURE:{
        return{
            ...state,
            loading:false,
            error:true, 
            errorMessage:payload 
        }
    }
    case LOGOUT:
        localStorage.removeItem("token");
        return{
           isAuth:false,
           token:null
        }
        default:
            return state
    }
}