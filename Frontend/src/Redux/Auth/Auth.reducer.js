import { FAIL, LOGOUT, REQ, SUC } from "./Auth.types";
let token = localStorage.getItem("token");
const IntV = {
    isAuth: false,
    token: token || "",
    loading: false,
    error: false,
}
export const Auth_Reducer = (state = IntV, { type, payload }) => {
    localStorage.setItem("token", JSON.stringify(payload));
    switch (type) {
        case REQ: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case SUC: {
            console.log("inside")

            return {
                ...state,
                isAuth: true,
                loading: false,
                error: false,
                token: payload
            }
        }
        case FAIL: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            }
        }
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                isAuth: false,
                token: null
            }
        default:
            return state
    }
}