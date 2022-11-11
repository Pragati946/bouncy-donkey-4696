import axios from "axios"
import { ProductDetails_Error, ProductDetails_Loading, ProductDetails_Success } from "./ProductDetails.actionTypes";
export const getProductDetail=(id)=>async(dispatch)=>{
    dispatch({type:ProductDetails_Loading})
    try{
        
        let response=await  axios.get(`https://cultfit-backend.herokuapp.com/products/${id}`);
        let data=response.data
        dispatch({type:ProductDetails_Success,payload:data})
    }catch(err){
        dispatch({type:ProductDetails_Error})
    }

}