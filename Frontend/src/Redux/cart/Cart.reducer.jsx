import { Cart_ADD, Cart_Del } from "./Cart.actions"

let data =JSON.parse(localStorage.getItem("Cart")) || []
const initialState=data
export default function CartReducer(state=initialState,{type,payload}){
switch(type){
   case Cart_ADD:{
    localStorage.setItem("Cart",JSON.stringify([...state,payload]))
    return [...state,payload]
   }
   case Cart_Del:{
    let arr=state.filter(item=>item.id!==payload)
    localStorage.setItem("Cart",JSON.stringify(arr))
    return arr
   
   }
    default:{
        return state
    }
}
} 