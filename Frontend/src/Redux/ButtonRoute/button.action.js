import { GET_BUTTON } from "./button.types";

export const getButton = (route) => (dispatch) => {
  dispatch({ type: GET_BUTTON, payload: route });
};
