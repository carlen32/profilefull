import { REGISTER_SUCCESS, TOKEN_CHECK, LOGOUT, LOGIN_SUCCESS, GET_USER } from '../actions/types';


const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  isLoading: false,
  name: null,
  lastName: "",
  email: "",
  phone: '',
  userID:''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      // console.log(action.payload)
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    case GET_USER:
      // console.log(action.payload)
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        email: action.payload.email,
        name: action.payload.name,
        userID: action.payload._id,
        lastName: action.payload.lastName,
        phone: action.payload.phoneNumber,
      };
    case TOKEN_CHECK:
      // console.log('tokencheck',action.payload)
      if (action.payload === true) {
        return {
          ...state,
          isAuth: true,
        };
      } else {
        return {
          ...state,
          isAuth: false,
          token: null,
        };
      } case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    default:
      return state;
  }
}