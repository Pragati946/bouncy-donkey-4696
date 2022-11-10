import { ProductDetails_Error, ProductDetails_Loading, ProductDetails_Success } from "./ProductDetails.actionTypes"

const initialState={
    ProductDetail:{},
    loading:false,
    err:false
}
export default function ProductDetailsreducer(state=initialState,{type,payload}){
    switch(type){
   case ProductDetails_Loading:{
    return {...state,loading:true}
   }
   case ProductDetails_Error:{
    return  {...state,loading:false,err:true}

   }
   case ProductDetails_Success:{
    return {...state,oading:false,ProductDetail:payload}
   }
    default:{
        return state
    }
    }
}