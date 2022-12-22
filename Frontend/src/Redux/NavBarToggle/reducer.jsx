export const navReducer=(state={nav:true},{type})=>{
      switch(type){
        case "STORENAVBAR":{
            return {nav:true}
        }
        case "CULTNAVBAR":{
            return {nav:false}
        }
       default: return state
      }
}