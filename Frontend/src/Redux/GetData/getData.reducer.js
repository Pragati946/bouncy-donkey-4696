import { GETDATA_ERROR, GETDATA_LOADING, GETDATA_SUCCESS } from "./getData.types";

const initValue = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getDataReducer = (state = initValue, action) => {
  switch (action.type) {
    case GETDATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GETDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case GETDATA_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
