import { Cart_ADD, Cart_Count_ADD, Cart_Count_SUB, Cart_Del,  } from "./Cart.actions"

let data =JSON.parse(localStorage.getItem("Cart")) || []
const initialState=data
export default function CartReducer(state=initialState,{type,payload}){
switch(type){
   case Cart_ADD:{
    localStorage.setItem("Cart",JSON.stringify([...state,{...payload,count:1}]))
    
    return [...state,{...payload,count:1}]
   }
   case Cart_Del:{
    
    let arr=state.filter(item=>item._id!==payload)
    localStorage.setItem("Cart",JSON.stringify(arr))

    return arr
   
   }
   case Cart_Count_ADD:{
    let arr=state.map(item=>{
        if(item._id===payload){
        return {...item,count:item.count+1}
        }else{
            return item
        }
       
    })
    localStorage.setItem("Cart",JSON.stringify(arr))
    return arr
   }
   case Cart_Count_SUB:{
    let arr=state.map(item=>{
        if(item._id===payload){
        return {...item,count:item.count-1}
        }else{
            return item
        }
       
    })
    localStorage.setItem("Cart",JSON.stringify(arr))
    return arr
   }
    default:{
        return state
    }
}
} 