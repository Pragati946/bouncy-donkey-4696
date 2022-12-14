import axios from "axios"
import { ProductDetails_Error, ProductDetails_Loading, ProductDetails_Success } from "./ProductDetails.actionTypes";
export const getProductDetail=(id,category)=>async(dispatch)=>{
    dispatch({type:ProductDetails_Loading})
    try{
        
        let response = await axios.get(
          `https://fair-jade-bullfrog-gear.cyclic.app/${category}/${id}`
        );
        let data=response.data
        dispatch({type:ProductDetails_Success,payload:data})
    }catch(err){
        dispatch({type:ProductDetails_Error})
    }

}