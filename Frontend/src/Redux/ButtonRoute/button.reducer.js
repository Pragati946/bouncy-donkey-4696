import { GET_BUTTON } from "./button.types";

const initState = {
  route: "",
};

export const buttonReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BUTTON:
      return {
        ...state,
        route: action.payload,
      };
    default:
      return state;
  }
};
