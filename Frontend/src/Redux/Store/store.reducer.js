import { GET_ERROR, GET_LOADING, GET_SUCCESS } from "./store.types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};
export const storeReducer = (state = { initialState }, { type, payload }) => {
  switch (type) {
    case GET_LOADING:{
        return {
            ...state,
            loading:true,
            error:false
        }
    }
    case GET_SUCCESS:{
        return {
            ...state,
            loading:false,
            error:false,
            data:payload.data,
        }
    }
    case GET_ERROR:{
        return{
            ...state,
            loading:false,
            error:true
        }
    }
    default: {
      return state;
    }
  }
};
