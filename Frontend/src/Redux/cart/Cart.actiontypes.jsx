import { Cart_ADD, Cart_Count_ADD, Cart_Count_SUB, Cart_Del, } from "./Cart.actions";

 function CartAdd(data){
    return {type:Cart_ADD,payload:data}
}
 function CartDel(data){
    
    return {type:Cart_Del,payload:data}
}
function CartCountAdd(data){
    console.log(data)
    return {type:Cart_Count_ADD,payload:data}
}
function CartCountSub(data){
    return {type:Cart_Count_SUB,payload:data}
}
export {CartAdd,CartDel,CartCountAdd,CartCountSub}