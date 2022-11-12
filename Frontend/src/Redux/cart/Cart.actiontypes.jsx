import { Cart_ADD, Cart_Del } from "./Cart.actions";

 function CartAdd(data){
    return {type:Cart_ADD,payload:data}
}
 function CartDel(data){
    return {type:Cart_Del,payload:data}
}
export {CartAdd,CartDel}