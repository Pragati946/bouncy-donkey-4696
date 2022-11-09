import { GET_ERROR, GET_LOADING, GET_SUCCESS } from "./store.types"
import axios from "axios";
export const getStore=()=>async(dispatch)=>{
    dispatch({type:GET_LOADING});
    try{
        let res = await axios.get("https://cultfit-backend.herokuapp.com/products/");
        dispatch({type:GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_ERROR});
    }
}